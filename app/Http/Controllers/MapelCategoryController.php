<?php

namespace App\Http\Controllers;

use App\Model\MapelCategory;
use Illuminate\Http\Request;
use App\Http\Requests\MapelCategoryRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;

class MapelCategoryController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-mapel-category', ['only' => ['store']]);
    //   $this->middleware('can:read-mapel-category', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-mapel-category', ['only' => ['update']]);
    //   $this->middleware('can:delete-mapel-category', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $mapelCategories = $this->queryFilter($request);
        } else {
          $mapelCategories = MapelCategory::latest()->paginate(10);
        }

        return response()->json([
          'data' => $mapelCategories,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(MapelCategoryRequest $request)
    {
        $mapelCategory = MapelCategory::create($request->all());

        if ($request->has('include')) {
          $mapelCategory = $this->queryFilter($request, $mapelCategory);
        }

        return response()->json([
          'data' => $mapelCategory,
          'message' => "sukses ditambahkan: {$mapelCategory->name}"
        ], StatusCode::HTTP_CREATED);
    }

    public function show(MapelCategory $mapelCategory)
    {
        return response()->json([
          'data' => $mapelCategory,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function update(MapelCategoryRequest $request, MapelCategory $mapelCategory)
    {
        $mapelCategory->update($request->all());

        if ($request->has('include')) {
          $mapelCategory = $this->queryFilter($request, $mapelCategory);
        }

        return response()->json([
          'data' => $mapelCategory,
          'message' => "sukses diupdate: {$mapelCategory->name}"
        ], StatusCode::HTTP_OK);
    }

    public function destroy(MapelCategory $mapelCategory)
    {
        $mapelCategory->delete();

        return response()->json([
          'data' => null,
          'message' => "sukses dihapus: {$mapelCategory->name}"
        ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(MapelCategory::latest())
          ->allowedFilters(['name'])
          ->allowedIncludes(['mapels'])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(MapelCategory::whereId($object->id))
          ->allowedIncludes(['mapels'])
          ->first();
      }
    }
}
