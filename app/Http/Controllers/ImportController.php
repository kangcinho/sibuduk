<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Maatwebsite\Excel\Facades\Excel;
use App\Model\ImportLedgerHistory;
use App\Model\Attendance;
use App\Imports\UserImport;
use App\Imports\StudentImport;
use App\Imports\AttendanceImport;
use App\Imports\ScoreImport;
use App\Imports\ExtraScoreImport;

// Import Controller
// secara umum ada 2 macam error
// 422 -> Error karena validasi
// 500 -> Error karena exception (duplicate DB unique row)
// FE cek error berdasarkan status saja untuk menampilkan pesan error karena ada perbedaan object error message pada 422 dan 500
// Import Controller
class ImportController extends Controller
{
  public function induk(Request $request) {
    try {
      // Import User
      $userImport = new UserImport;
      $userImport->import($request->file('file_excel'));
      // Import User

      // Import Student (belakangan karena perlu user_id)
      $studentImport = new StudentImport;
      $studentImport->import($request->file('file_excel'));
      // Import Student

      return response()->json([
        'data' => null,
        'message' => 'sukses import: data induk siswa'
      ], StatusCode::HTTP_OK);


    } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
      return $this->handleValidationError($e);
    }
  }

  // Ledger
  public function ledger(Request $request) {
    if ($this->isLedgerAlreadyImported($request)) {
      return response()->json([
        'data' => null,
        'message' => 'ledger sudah pernah diimport untuk rombel, tahun ajaran dan semester yang dipilih'
      ], StatusCode::HTTP_UNPROCESSABLE_ENTITY);
      // jika ada kasus agar bisa bypass validasi, maka update status importLedgerHistory menjadi is_active = false secara manual di DB
    } else {
      try {
        // Import Attendance
        $attendanceImport = new AttendanceImport();
        $attendanceImport->setRombelCategoryId($request->rombel_category_id);
        $attendanceImport->setSeasonId($request->season_id);
        $attendanceImport->setSemesterId($request->semester_id);
        $attendanceImport->import($request->file('file_excel'));
        // Import Attendance

        // Import ExtraScore
        $extraScoreImport = new ExtraScoreImport();
        $extraScoreImport->setRombelCategoryId($request->rombel_category_id);
        $extraScoreImport->import($request->file('file_excel'));
        // Import ExtraScore

        // Import Score
        $scoreImport = new ScoreImport();
        $scoreImport->setRombelCategoryId($request->rombel_category_id);
        $scoreImport->setDepartmentId($request->department_id);
        $scoreImport->setSemesterId($request->semester_id);
        $scoreImport->import($request->file('file_excel'));
        // Import Score

        ImportLedgerHistory::create([
          'rombel_category_id' => $request->rombel_category_id,
          'season_id' => $request->season_id,
          'semester_id' => $request->semester_id,
          'created_by' => isset(auth()->user()->id) ? auth()->user()->id : null
        ]);
    
        return response()->json([
          'data' => null,
          'message' => 'sukses import: ledger'
        ]);
      } catch (\Maatwebsite\Excel\Validators\ValidationException $e) {
        return $this->handleValidationError($e);
      }
      
    }
  }

  public function isLedgerAlreadyImported($request) {
    $isExists = ImportLedgerHistory::active()->where('rombel_category_id', $request->rombel_category_id)
      ->where('season_id', $request->season_id)
      ->where('semester_id', $request->semester_id)
      ->exists();

    return $isExists;
  }

  public function handleValidationError($e) {
    $errors = [];

    foreach ($e->failures() as $key => $failure) {
      $errors[] = [
        'excel_row' => $failure->row(),
        'attribute' => $failure->attribute(),
        'error' => $failure->errors(),
      ];
    }

    return response()->json($errors, StatusCode::HTTP_UNPROCESSABLE_ENTITY);
  }
}
