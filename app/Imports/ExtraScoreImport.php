<?php

namespace App\Imports;

use Illuminate\Support\Collection;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use App\Model\Student;
use App\Model\Extra;
use App\Model\ExtraScore;

class ExtraScoreImport implements ToCollection, WithHeadingRow
{
    use Importable;

    private $rombelCategoryId;

    public function setRombelCategoryId(int $rombelCategoryId) {
      $this->rombelCategoryId = $rombelCategoryId;
    }

    public function collection(Collection $collection)
    {
        $extraScores = [];

        foreach ($collection as $key => $row) {
          if ($row->filter()->isNotEmpty()) {
            $extraScoresFromExcel = $row->only(['ekstra', 'nilai_ekstra']);
            $extraScoresFromExcel['ekstra'] = $this->splitExtra($extraScoresFromExcel['ekstra']);
            $extraScoresFromExcel['nilai_ekstra'] = $this->splitExtraScore($extraScoresFromExcel['nilai_ekstra']);         
  
            // mapping agar [ekstra] => [nilai_ekstra] dan menambahkan key/value '00' jika jumlah ekstra dan nilai tidak sama
            // extra ada : nilai kosong/tidak ada = extra => 0
            // extra kosong/tidak ada : nilai ada = 00 => nilai | otomatis error 500 disini
            $extraWithScore = [];
            $counter = 0;
            array_map(function($v1, $v2) use (&$extraWithScore, &$counter){
              $extraWithScore[!is_null($v1) ? $v1 : "0" . $counter++] = !is_null($v2) ? $v2 : "0";     
            }, $extraScoresFromExcel['ekstra'], $extraScoresFromExcel['nilai_ekstra']);
  
            foreach ($extraWithScore as $extra => $score) {
              $extraScores[] = [
                'extra_id' => $this->extraId($extra),
                'student_id' => $this->studentId($row['nis']),
                'rombel_category_id' => $this->rombelCategoryId,
                'score' => $score,
                'created_at' => NOW(),
                'updated_at' => NOW(),
                'created_by' => isset(auth()->user()->id) ? auth()->user()->id : null
              ];
            }
          }
        }

        ExtraScore::insert($extraScores);
    }

    public function headingRow(): int
    {
        return 6;
    }

    private function extraId($extra) {
      return Extra::select('id')->where('name', $extra)->first()->id;
    }

    private function studentId($nis) {
      return Student::select('id')->where('nis', $nis)->first()->id;
    }

    private function splitExtra($extra) {
      return explode('|', $extra);
    }

    private function splitExtraScore($extraScore) {
      return explode('|', $extraScore);
    }
}
