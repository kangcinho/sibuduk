<?php

namespace App\Imports;

use App\Model\Attendance;
use App\Model\Student;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithValidation;

class AttendanceImport implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading, WithValidation
{
    use Importable;

    private $seasonId;
    private $semesterId;
    private $rombelCategoryId;

    public function setRombelCategoryId(int $rombelCategoryId) {
      $this->rombelCategoryId = $rombelCategoryId;
    }

    public function setSeasonId(int $seasonId) {
      $this->seasonId = $seasonId;
    }

    public function setSemesterId(int $semesterId) {
      $this->semesterId = $semesterId;
    }

    public function model(array $row)
    {
        return new Attendance([
            'student_id' => Student::select('id')->firstWhere('nis', $row['nis'])->id,
            'rombel_category_id' => $this->rombelCategoryId,
            'season_id' => $this->seasonId,
            'semester_id' => $this->semesterId,
            'sakit' => $row['sakit'],
            'izin' => $row['izin'],
            'tanpaket' => $row['alpha']
        ]);
    }

    public function headingRow(): int
    {
        return 6;
    }

    public function batchSize(): int
    {
        return 100;
    }

    public function chunkSize(): int
    {
        return 100;
    }

    public function rules(): array
    {
        return [
          '*.sakit' => 'numeric',
          '*.izin' => 'numeric',
          '*.alpha' => 'numeric'
        ];
    }

    public function customValidationMessages()
    {
        return [
            '*.sakit.numeric' => 'jumlah sakit hanya boleh menggunakan angka',
            '*.izin.numeric' => 'jumlah izin hanya boleh menggunakan angka',
            '*.alpha.numeric' => 'jumlah alpha hanya boleh menggunakan angka',
        ];
    }
}
