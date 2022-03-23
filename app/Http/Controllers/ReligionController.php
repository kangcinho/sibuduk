<?php

namespace App\Http\Controllers;

use App\Model\Religion;
use Illuminate\Http\Request;
use App\Http\Requests\ReligionRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;

class ReligionController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-religion', ['only' => ['store']]);
    //   $this->middleware('can:read-religion', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-religion', ['only' => ['update']]);
    //   $this->middleware('can:delete-religion', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $religions = $this->queryFilter($request);
        } else {
          $religions = Religion::latest()->paginate(10);
        }

        return response()->json([
          'data' => $religions,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(ReligionRequest $request)
    {
        $religion = Religion::create($request->all());

        if ($request->has('include')) {
          $religion = $this->queryFilter($request, $religion);
        }

        return response()->json([
          'data' => $religion,
          'message' => "sukses ditambahkan: {$religion->name}"
        ], StatusCode::HTTP_CREATED);
    }

    public function show(Religion $religion)
    {
        return response()->json([
          'data' => $religion,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function update(ReligionRequest $request, Religion $religion)
    {
        $religion->update($request->all());

        if ($request->has('include')) {
          $religion = $this->queryFilter($request, $religion);
        }

        return response()->json([
          'data' => $religion,
          'message' => "sukses diupdate: {$religion->name}"
        ], StatusCode::HTTP_OK); 
    }

    public function destroy(Religion $religion)
    {
        $religion->delete();

        return response()->json([
          'data' => null,
          'message' => "sukses dihapus: {$religion->name}"
        ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(Religion::latest())
          ->allowedFilters(['name'])
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
            'students',
            'fatStudents',
            'motStudents',
            'waliStudents'
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(Religion::whereId($object->id))
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
            'students',
            'fatStudents',
            'motStudents',
            'waliStudents'
          ])
          ->first();
      }
    }
}
