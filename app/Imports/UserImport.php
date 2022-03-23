<?php

namespace App\Imports;

use App\User;
use Illuminate\Support\Facades\Hash;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\Importable;
use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithValidation;

class UserImport implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading, WithValidation
{
    use Importable;

    public function model(array $row)
    {
        return new User([
            'username' => $row['nis'],
            'password' => $this->generatePassword($row),
            'is_student' => true
        ]);
    }

    public function generatePassword($row) {
      $arrName = explode(" ", $row['nama_peserta_didik']);
      $lastName = end($arrName);

      return Hash::make($row['nis'].ucfirst($lastName));
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
          '*.nis' => 'unique:users,username'
        ];
    }

    public function customValidationMessages()
    {
        return [
            '*.nis.unique' => 'user dengan nis :input sudah ada di database',
        ];
    }
}
