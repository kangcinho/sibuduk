<?php

namespace App\Imports;

use App\Model\Student;
use App\Model\Religion;
use App\User;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithValidation;

class StudentImport implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading, WithValidation
{
    use Importable;

    public function model(array $row)
    {
        return new Student([
          'user_id' => User::select('id')->firstWhere('username', $row['nis'])->id,
          'nis' => $row['nis'],
          'nisn' => $row['nisn'],
          'fullname' => $row['nama_peserta_didik'],
          'birthplace' => $row['tempat_lahir'],
          'birthdate' => $row['tgl_lahir'],
          'gender' => substr(ucfirst($row['jenis_kelamin']), 0, 1),
          'stu_religion_id' => Religion::select('id')->firstWhere('name', $row['agama'])->id,
          'status_in_fam' => $row['status_dalam_keluarga'],
          'birth_order' => $row['anak_ke'],
          'stu_address' => $row['alamat_peserta_didik'],
          'stu_phone' => $row['no_tlp_rumah'],
          'grad_from_sch' => $row['sekolah_asal'],
          'entry_to' => $row['diterima_dikelas'],
          'entry_date' => $row['tgl'],
          'fat_name' => $row['nama_ayah'],
          'mot_name' => $row['nama_ibu'],
          'fat_address' => $row['alamat_ortu'],
          'fat_phone' => $row['no_telepon_rumah'],
          'fat_job' => $row['pekerjaan_ayah'],
          'mot_job' => $row['pekerjaan_ibu'],
          'wali_name' => $row['nama_wali'],
          'wali_address' => $row['alamat_wali'],
          'wali_phone' => $row['no_tlp_wali'],
          'wali_job' => $row['pekerjaan_wali'],
        ]);
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
          '*.nis' => 'unique:students,nis',
          '*.nisn' => 'unique:students,nisn'
        ];
    }

    public function customValidationMessages()
    {
        return [
            '*.nis.unique' => 'siswa nis :input sudah ada di database',
            '*.nisn.unique' => 'siswa nisn :input sudah ada di database',
        ];
    }
}
