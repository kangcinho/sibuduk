<?php

namespace App\Http\Controllers;

use App\Model\Score;
use Illuminate\Http\Request;
use App\Http\Requests\ScoreRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class ScoreController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-score', ['only' => ['store']]);
    //   $this->middleware('can:read-score', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-score', ['only' => ['update']]);
    //   $this->middleware('can:delete-score', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $scores = $this->queryFilter($request);
        } else {
          $scores = Score::latest()->paginate(10);
        }

        return response()->json([
          'data' => $scores,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(ScoreRequest $request)
    {
      $score = Score::create($request->all());

      if ($request->has('include')) {
        $score = $this->queryFilter($request, $score);
      }

      return response()->json([
        'data' => $score,
        'message' => "sukses ditambahkan: nilai untuk siswa nis {$score->student->nis}"
      ], StatusCode::HTTP_CREATED);
    }

    public function show(Score $score)
    {
      return response()->json([
        'data' => $score,
        'message' => null
      ], StatusCode::HTTP_OK);
    }

    public function update(ScoreRequest $request, Score $score)
    {
      $score->update($request->all());

      if ($request->has('include')) {
        $score = $this->queryFilter($request, $score);
      }

      return response()->json([
        'data' => $score,
        'message' => "sukses diupdate: nilai untuk siswa nis {$score->student->nis}"
      ], StatusCode::HTTP_OK);
    }

    public function destroy(Score $score)
    {
      $score->delete();

      return response()->json([
        'data' => null,
        'message' => "sukses dihapus: nilai untuk siswa nis {$score->student->nis}"
      ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(Score::latest())
          ->allowedFilters([
            AllowedFilter::partial('mapel.name'),
            AllowedFilter::exact('rombelCategory.name'),
            AllowedFilter::exact('student_id'),
            // AllowedFilter::exact('season_id'),
            // AllowedFilter::exact('semester_id'),
            AllowedFilter::exact('student.nis'),
            AllowedFilter::exact('rombelCategory.season.period'),
            AllowedFilter::exact('rombelCategory.semester.num'),
            AllowedFilter::exact('pengetahuan'),
            AllowedFilter::exact('keterampilan'),
            AllowedFilter::exact('sikap'),
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
            'rombelCategory',
            'mapel',
            'student',
            'rombelCategory.season',
            'rombelCategory.semester',
            // 'season',
            // 'semester',
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(Score::whereId($object->id))
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
            'rombelCategory',
            'mapel',
            'student',
            'rombelCategory.season',
            'rombelCategory.semester',
            // 'season',
            // 'semester',
          ])
          ->first();
      }
    }
}
