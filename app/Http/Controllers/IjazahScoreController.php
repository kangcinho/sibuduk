<?php

namespace App\Http\Controllers;

use App\Model\IjazahScore;
use Illuminate\Http\Request;
use App\Http\Requests\IjazahScoreRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class IjazahScoreController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-ijazah-score', ['only' => ['store']]);
    //   $this->middleware('can:read-ijazah-score', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-ijazah-score', ['only' => ['update']]);
    //   $this->middleware('can:delete-ijazah-score', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $ijazahScore = $this->queryFilter($request);
        } else {
          $ijazahScore = IjazahScore::latest()->paginate(10);
        }

        return response()->json([
          'data' => $ijazahScore,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(IjazahScoreRequest $request)
    {
        $ijazahScore = IjazahScore::create($request->all());

        if ($request->has('include')) {
          $ijazahScore = $this->queryFilter($request, $ijazahScore);
        }

        return response()->json([
          'data' => $ijazahScore,
          'message' => "sukses ditambahkan: nilai ijazah {$ijazahScore->mapel->name} siswa nis: {$ijazahScore->student->nis}"
        ], StatusCode::HTTP_CREATED);
    }

    public function show(IjazahScore $ijazahScore)
    {
        return response()->json([
          'data' => $ijazahScore,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function update(IjazahScoreRequest $request, IjazahScore $ijazahScore)
    {
        $ijazahScore->update($request->all());

        if ($request->has('include')) {
          $ijazahScore = $this->queryFilter($request, $ijazahScore);
        }

        return response()->json([
          'data' => $ijazahScore,
          'message' => "sukses diupdate: nilai ijazah {$ijazahScore->mapel->name} siswa nis: {$ijazahScore->student->nis}"
        ]);
    }

    public function destroy(IjazahScore $ijazahScore)
    {
        $ijazahScore->delete();

        return response()->json([
          'data' => null,
          'message' => "sukses dihapus: nilai ijazah {$ijazahScore->mapel->name} siswa nis: {$ijazahScore->student->nis}"
        ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(IjazahScore::latest())
          ->allowedFilters([
            AllowedFilter::exact('student.nis'),
            AllowedFilter::exact('rombelCategory.season.period'),
            AllowedFilter::exact('rombelCategory.semester.num'),
            AllowedFilter::exact('student_id'),
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
            'student',
            'rombelCategory',
            'mapel'
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(IjazahScore::whereId($object->id))
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
            'student',
            'rombelCategory',
            'mapel'
          ])
          ->first();
      }
    }
}
