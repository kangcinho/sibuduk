<?php

namespace App\Http\Controllers;

use App\Model\Attendance;
use Illuminate\Http\Request;
use App\Http\Requests\AttendanceRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class AttendanceController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-attendance', ['only' => ['store']]);
    //   $this->middleware('can:read-attendance', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-attendance', ['only' => ['update']]);
    //   $this->middleware('can:delete-attendance', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $attendances = $this->queryFilter($request);
        } else {
          $attendances = Attendance::latest()->paginate(10);
        }

        return response()->json([
          'data' => $attendances,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(AttendanceRequest $request)
    {
        $attendance = Attendance::create($request->all());

        if ($request->has('include')) {
          $attendance = $this->queryFilter($request, $attendance);
        }

        return response()->json([
          'data' => $attendance,
          'message' => "sukses ditambahkan: kehadiran siswa nis: {$attendance->student->nis}"
        ], StatusCode::HTTP_CREATED);
    }

    public function show(Attendance $attendance)
    {
        return response()->json([
          'data' => $attendance,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function update(AttendanceRequest $request, Attendance $attendance)
    {
        $attendance->update($request->all());

        if ($request->has('include')) {
          $attendance = $this->queryFilter($request, $attendance);
        }

        return response()->json([
          'data' => $attendance,
          'message' => "sukses diupdate: kehadiran siswa nis: {$attendance->student->nis}"
        ], StatusCode::HTTP_OK);
    }

    public function destroy(Attendance $attendance)
    {
        $attendance->delete();

        return response()->json([
          'data' => $attendance,
          'message' => "sukses dihapus: kehadiran siswa nis: {$attendance->student->nis}"
        ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(Attendance::latest())
          ->allowedFilters([
            AllowedFilter::exact('sakit'),
            AllowedFilter::exact('izin'),
            AllowedFilter::exact('tanpaket'),
            AllowedFilter::exact('student.nis'),
            AllowedFilter::exact('rombelCategory.season.period'),
            AllowedFilter::exact('rombelCategory.semester.num'),
            AllowedFilter::exact('rombelCategory.name'),
          ])
          ->allowedFields([
            'student.id',
            'student.user_id',
            'student.nis',
            'student.nisn',
            'student.fullname',
            'student.nickname',
            'student.gender',
          ])
          ->allowedIncludes([
            // 'season',
            // 'semester',
            'student',
            'rombelCategory',
            'rombelCategory.season',
            'rombelCategory.semester',
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(Attendance::whereId($object->id))
          ->allowedFields([
            'student.id',
            'student.user_id',
            'student.nis',
            'student.nisn',
            'student.fullname',
            'student.nickname',
            'student.gender',
          ])
          ->allowedIncludes([
            // 'season',
            // 'semester',
            'student',
            'rombelCategory',
            'rombelCategory.season',
            'rombelCategory.semester',
          ])
          ->first();
      }
    }
}
