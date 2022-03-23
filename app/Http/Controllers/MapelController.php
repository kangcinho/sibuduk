<?php

namespace App\Http\Controllers;

use App\Model\Mapel;
use Illuminate\Http\Request;
use App\Http\Requests\MapelRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class MapelController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-mapel', ['only' => ['store']]);
    //   $this->middleware('can:read-mapel', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-mapel', ['only' => ['update']]);
    //   $this->middleware('can:delete-mapel', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $mapels = $this->queryFilter($request);
        } else {
          $mapels = Mapel::latest()->paginate(10);
        }

        return response()->json([
          'data' => $mapels,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(MapelRequest $request)
    {
      $mapel = Mapel::create($request->all());

      if ($request->has('include')) {
        $mapel = $this->queryFilter($request, $mapel);
      }

      return response()->json([
        'data' => $mapel,
        'message' => "sukses ditambahkan: {$mapel->name}"
      ], StatusCode::HTTP_CREATED);
    }

    public function show(Mapel $mapel)
    {
      return response()->json([
        'data' => $mapel,
        'message' => null
      ], StatusCode::HTTP_OK);
    }

    public function update(MapelRequest $request, Mapel $mapel)
    {
      $mapel->update($request->all());

      if ($request->has('include')) {
        $mapel = $this->queryFilter($request, $mapel);
      }

      return response()->json([
        'data' => $mapel,
        'message' => "sukses diupdate: {$mapel->name}"
      ], StatusCode::HTTP_OK);
    }

    public function destroy(Mapel $mapel)
    {
      $mapel->delete();

      return response()->json([
        'data' => null,
        'message' => "sukses dihapus: {$mapel->name}"
      ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(Mapel::latest())
          ->allowedFilters([
            AllowedFilter::partial('mapelCategory.name'),
            AllowedFilter::exact('department.alias'),
            'name',
            'alias',
            'kkm'
          ])
          ->allowedIncludes([
            'season',
            'semester',
            'department',
            'mapelCategory',
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(Mapel::whereId($object->id))
        ->allowedIncludes([
          'season',
          'semester',
          'department',
          'mapelCategory',
        ])
        ->first();
      }
    }
}
