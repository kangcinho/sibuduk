<?php

namespace App\Http\Controllers;

use App\Model\RombelCategory;
use Illuminate\Http\Request;
use App\Http\Requests\RombelCategoryRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class RombelCategoryController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-rombel-category', ['only' => ['store']]);
    //   $this->middleware('can:read-rombel-category', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-rombel-category', ['only' => ['update']]);
    //   $this->middleware('can:delete-rombel-category', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $rombelCategories = $this->queryFilter($request);
        } else {
          $rombelCategories = RombelCategory::latest()->paginate(10);
        }

        return response()->json([
          'data' => $rombelCategories,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(RombelCategoryRequest $request)
    {
      $rombelCategory = RombelCategory::create($request->all());

      if ($request->has('include')) {
        $rombelCategory = $this->queryFilter($request, $rombelCategory);
      }

      return response()->json([
        'data' => $rombelCategory,
        'message' => "sukses ditambahkan: {$rombelCategory->name}"
      ], StatusCode::HTTP_CREATED);
    }

    public function show(RombelCategory $rombelCategory)
    {
      return response()->json([
        'data' => $rombelCategory,
        'message' => null
      ], StatusCode::HTTP_OK);
    }

    public function update(RombelCategoryRequest $request, RombelCategory $rombelCategory)
    {
      $rombelCategory->update($request->all());

      if ($request->has('include')) {
        $rombelCategory = $this->queryFilter($request, $rombelCategory);
      }

      return response()->json([
        'data' => $rombelCategory,
        'message' => "sukses diupdate: {$rombelCategory->name}"
      ], StatusCode::HTTP_OK);
    }

    public function destroy(RombelCategory $rombelCategory)
    {
      $rombelCategory->delete();

      return response()->json([
        'data' => null,
        'message' => "sukses dihapus: {$rombelCategory->name}"
      ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(RombelCategory::latest())
          ->allowedFilters([
            'name',
            AllowedFilter::exact('season.period'),
            AllowedFilter::exact('department.alias'),
            AllowedFilter::exact('semester.num'),
            'wali_name',
          ])
          ->allowedIncludes([
            'department',
            'season',
            'semester',
            'rombels',
            'attendances'
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(RombelCategory::whereId($object->id))
          ->allowedIncludes([
            'department',
            'season',
            'semester',
            'rombels',
            'attendances'
          ])
          ->first();
      }
    }
}
