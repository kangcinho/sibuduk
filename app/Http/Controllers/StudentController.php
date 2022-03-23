<?php

namespace App\Http\Controllers;

use App\Model\Student;
use Illuminate\Http\Request;
use App\Http\Requests\StudentRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class StudentController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-student', ['only' => ['store']]);
    //   $this->middleware('can:read-student', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-student', ['only' => ['update']]);
    //   $this->middleware('can:delete-student', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $students = $this->queryFilter($request);
        } else {
          $students = Student::slim()->latest()->paginate(10);
        }

        return response()->json([
          'data' => $students,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(StudentRequest $request)
    {
        $student = Student::create($request->all());

        if ($request->has('include')) {
          $student = $this->queryFilter($request, $student);
        }

        return response()->json([
          'data' => $student,
          'message' => "sukses ditambahkan: {$student->nis}"
        ], StatusCode::HTTP_CREATED);
    }

    public function show(Student $student)
    {
        return response()->json([
          'data' => $student,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function update(StudentRequest $request, Student $student)
    {
        $student->update($request->all());

        if ($request->has('include')) {
          $student = $this->queryFilter($request, $student);
        }

        return response()->json([
          'data' => $student,
          'message' => "sukses diupdate: {$student->nis}"
        ], StatusCode::HTTP_OK);
    }

    public function destroy(Student $student)
    {
        $student->delete();

        return response()->json([
          'data' => null,
          'message' => "sukses dihapus: {$student->nis}"
        ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(Student::latest())
          ->allowedFilters([
            AllowedFilter::exact('nis'),
            AllowedFilter::exact('nisn'),
            'fullname'
          ])
          ->allowedIncludes([
            'stuReligion',
            'stuCountry',
            'fatReligion',
            'fatCountry',
            'motReligion',
            'motCountry',
            'waliReligion',
            'waliCountry'])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(Student::whereId($object->id))
        ->allowedIncludes([
          'stuReligion',
          'stuCountry',
          'fatReligion',
          'fatCountry',
          'motReligion',
          'motCountry',
          'waliReligion',
          'waliCountry'])
        ->first();
      }
    }
}
