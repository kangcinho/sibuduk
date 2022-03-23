<?php

namespace App\Imports;

use App\Model\Mapel;
use App\Model\Student;
use App\Model\Score;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Maatwebsite\Excel\Concerns\ToCollection;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ScoreImport implements ToCollection, WithHeadingRow
{
    use Importable;

    private $rombelCategoryId;
    private $departmentId;
    // private $seasonId;
    private $semesterId;

    public function setRombelCategoryId($rombelCategoryId) {
      $this->rombelCategoryId = $rombelCategoryId;
    }

    public function setDepartmentId($departmentId) {
      $this->departmentId = $departmentId;
    }
    
    // public function setSeasonId($seasonId) {
    //   $this->seasonId = $seasonId;
    // }
    
    public function setSemesterId($semesterId) {
      $this->semesterId = $semesterId;
    }

    public function collection(Collection $collection)
    {
        $scores = [];

        foreach ($collection as $key => $row) {
          if ($row->filter()->isNotEmpty()) {
            $mapelFromExcel = $row->except(['nis', 'nama', 'sakit', 'izin', 'alpha', 'ekstra', 'nilai_ekstra']);
  
            foreach ($mapelFromExcel as $mapel => $score) {
              $scores[] = [
                'mapel_id' => $this->mapelId($mapel),
                'rombel_category_id' => $this->rombelCategoryId,
                'student_id' => $this->studentId($row['nis']),
                // 'semester_id' => $this->semesterId,
                // 'season_id' => $this->seasonId,
                'pengetahuan' => $this->scorePengetahuan($score),
                'keterampilan' => $this->scoreKeterampilan($score),
                'sikap' => $this->scoreSikap($score),
                'created_at' => NOW(),
                'updated_at' => NOW(),
                'created_by' => isset(auth()->user()->id) ? auth()->user()->id : null
              ];
          }
          }
        }

        Score::insert($scores);
    }

    public function headingRow(): int
    {
        return 6;
    }

    private function studentId($nis) {
      return Student::select('id')->where('nis', $nis)->first()->id;
    }

    private function mapelId($mapel) {
      $mapelName = Str::contains($mapel, '_') ? Str::title(str_replace('_', ' ', $mapel)) : str_replace('_', ' ', $mapel);
      
      $mapelId = Mapel::select('id')->where('semester_id', $this->semesterId)
      ->where('department_id', $this->departmentId)
      ->where(function ($query) use ($mapelName) {
        $query->where('name', $mapelName)
        ->orWhere('alias', $mapelName);
      })
      ->first()
      ->id;
      
      return $mapelId;
    }

    private function scorePengetahuan($score) {
      return explode('|', $score)[0] ?? 0;
    }

    private function scoreKeterampilan($score) {
      return explode('|', $score)[1] ?? 0;
    }

    private function scoreSikap($score) {
      return explode('|', $score)[2] ?? '';
    }
}
