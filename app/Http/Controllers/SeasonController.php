<?php

namespace App\Http\Controllers;

use App\Model\Season;
use Illuminate\Http\Request;
use App\Http\Requests\SeasonRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;

class SeasonController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-season', ['only' => ['store']]);
    //   $this->middleware('can:read-season', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-season', ['only' => ['update']]);
    //   $this->middleware('can:delete-season', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $seasons = $this->queryFilter($request);
        } else {
          $seasons = Season::latest()->paginate(10);
        }

        return response()->json([
          'data' => $seasons,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(SeasonRequest $request)
    {
        $season = Season::create($request->all());

        if ($request->has('include')) {
          $season = $this->queryFilter($request, $season);
        }

        return response()->json([
          'data' => $season,
          'message' => "sukses ditambahkan: {$season->period}"
        ], StatusCode::HTTP_CREATED);
    }

    public function show(Season $season)
    {
        return response()->json([
          'data' => $season,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function update(SeasonRequest $request, Season $season)
    {
        $season->update($request->all());

        if ($request->has('include')) {
          $season = $this->queryFilter($request, $season);
        }

        return response()->json([
          'data' => $season,
          'message' => "sukses diupdate: {$season->period}"
        ], StatusCode::HTTP_OK);
    }

    public function destroy(Season $season)
    {
        $season->delete();

        return response()->json([
          'data' => null,
          'message' => "sukses dihapus: {$season->period}"
        ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(Season::latest())
          ->allowedFilters(['period'])
          ->allowedIncludes([
            'rombelCategories',
            // 'extraScores',
            // 'scores',
            // 'mapels'
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(Season::whereId($object->id))
          ->allowedIncludes([
            'rombelCategories',
            // 'extraScores',
            // 'scores',
            // 'mapels'
          ])
          ->first();
      }
    }
}
