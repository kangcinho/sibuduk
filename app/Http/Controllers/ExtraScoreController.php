<?php

namespace App\Http\Controllers;

use App\Model\ExtraScore;
use Illuminate\Http\Request;
use App\Http\Requests\ExtraScoreRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class ExtraScoreController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-extra-score', ['only' => ['store']]);
    //   $this->middleware('can:read-extra-score', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-extra-score', ['only' => ['update']]);
    //   $this->middleware('can:delete-extra-score', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $extraScores = $this->queryFilter($request);
        } else {
          $extraScores = ExtraScore::latest()->paginate(10);
        }

        return response()->json([
          'data' => $extraScores,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(ExtraScoreRequest $request)
    {
        $extraScore = ExtraScore::create($request->all());

        if ($request->has('include')) {
          $extraScore = $this->queryFilter($request, $extraScore);
        }

        return response()->json([
          'data' => $extraScore,
          'message' => "sukses ditambahkan: nilai ekstra siswa nis: {$extraScore->student->nis}"
        ], StatusCode::HTTP_CREATED);
    }

    public function show(ExtraScore $extraScore)
    {
        return response()->json([
          'data' => $extraScore,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function update(ExtraScoreRequest $request, ExtraScore $extraScore)
    {
        $extraScore->update($request->all());

        if ($request->has('include')) {
          $extraScore = $this->queryFilter($request, $extraScore);
        }

        return response()->json([
          'data' => $extraScore,
          'message' => "sukses diupdate: nilai ekstra siswa nis: {$extraScore->student->nis}"
        ], StatusCode::HTTP_OK);
    }

    public function destroy(ExtraScore $extraScore)
    {
      $extraScore->delete();

      return response()->json([
        'data' => null,
        'message' => "sukses dihapus: nilai ekstra siswa nis: {$extraScore->student->nis}"
      ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(ExtraScore::latest())
          ->allowedFilters([
            AllowedFilter::exact('score'),
            AllowedFilter::exact('student.nis'),
            AllowedFilter::exact('rombelCategory.season.period'),
            AllowedFilter::exact('rombelCategory.semester.num'),
            AllowedFilter::exact('extra_id'),
            AllowedFilter::exact('student_id'),
            AllowedFilter::exact('rombelCategory.name'),
            // AllowedFilter::exact('season_id'),
            // AllowedFilter::exact('semester_id'),
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
            'extra',
            'student',
            'rombelCategory',
            'rombelCategory.season',
            'rombelCategory.semester',
            // 'season',
            // 'semester',
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(ExtraScore::whereId($object->id))
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
            'extra',
            'student',
            'rombelCategory',
            'rombelCategory.season',
            'rombelCategory.semester',
            // 'season',
            // 'semester',
          ])
          ->first();
      }
    }
}
