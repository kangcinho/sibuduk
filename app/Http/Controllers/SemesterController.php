<?php

namespace App\Http\Controllers;

use App\Model\Semester;
use Illuminate\Http\Request;
use App\Http\Requests\SemesterRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class SemesterController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-semester', ['only' => ['store']]);
    //   $this->middleware('can:read-semester', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-semester', ['only' => ['update']]);
    //   $this->middleware('can:delete-semester', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
      if ($request->has('q') || $request->has('include')) {
        $semesters = $this->queryFilter($request);
      } else {
        $semesters = Semester::latest()->paginate(10);
      }

      return response()->json([
        'data' => $semesters,
        'message' => null
      ], StatusCode::HTTP_OK);
    }

    public function store(SemesterRequest $request)
    {
        $semester = Semester::create($request->all());

        if ($request->has('include')) {
          $semester = $this->queryFilter($request, $semester);
        }

        return response()->json([
          'data' => $semester,
          'message' => "sukses ditambahkan: {$semester->num}"
        ], StatusCode::HTTP_CREATED);
    }

    public function show(Semester $semester)
    {
        return response()->json([
          'data' => $semester,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function update(SemesterRequest $request, Semester $semester)
    {
        $semester->update($request->all());

        if ($request->has('include')) {
          $semester = $this->queryFilter($request, $semester);
        }

        return response()->json([
          'data' => $semester,
          'message' => "sukses diupdate: {$semester->num}"
        ], StatusCode::HTTP_OK);
    }

    public function destroy(Semester $semester)
    {
        $semester->delete();

        return response()->json([
          'data' => null,
          'message' => "berhasil dihapus: {$semester->num}"
        ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(Semester::latest())
          ->allowedFilters([AllowedFilter::exact('num'), 'name', 'romawi'])
          ->allowedIncludes([
            'rombelCategories',
            'mapels',
            // 'extraScores',
            // 'scores'
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(Semester::whereId($object->id))
          ->allowedIncludes([
            'rombelCategories',
            'mapels',
            // 'extraScores',
            // 'scores'
          ])
          ->first();
      }
    }
}
