<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Model\Department;
use App\Http\Requests\DepartmentRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;

class DepartmentController extends Controller
{

    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-department', ['only' => ['store']]);
    //   $this->middleware('can:read-department', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-department', ['only' => ['update']]);
    //   $this->middleware('can:delete-department', ['only' => ['destroy']]);
    // }

    public function index(Request $request) {
      if ($request->has('q') || $request->has('include')) {
        $departments = $this->queryFilter($request);
      } else {
        $departments = Department::latest()->paginate(10);
      }

      return response()->json([
        'data' => $departments,
        'message' => null
      ], StatusCode::HTTP_OK);
    }

    public function store(DepartmentRequest $request) {
      $department = Department::create($request->all());

      if ($request->has('include')) {
        $department = $this->queryFilter($request, $department);
      }

      return response()->json([
        'data' => $department,
        'message' => "sukses ditambahkan: {$department->name}"
      ], StatusCode::HTTP_CREATED);
    }

    public function show(Department $department) {
      return response()->json([
        'data' => $department,
        'message' => null
      ], StatusCode::HTTP_OK);
    }

    public function update(DepartmentRequest $request, Department $department) {
      $department->update($request->all());

      if ($request->has('include')) {
        $department = $this->queryFilter($request, $department);
      }
      
      return response()->json([
        'data' => $department,
        'message' => "sukses update: {$department->name}"
      ], StatusCode::HTTP_OK);
    }

    public function destroy(Department $department) {
      $department->delete();
      
      return response()->json([
        'data' => null,
        'message' => "sukses dihapus: {$department->name}"
      ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(Department::latest())
          ->allowedFilters([
            'name',
            'alias'
          ])
          ->allowedIncludes([
            'rombelCategories',
            'mapels'
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(Department::whereId($object->id))
          ->allowedIncludes([
            'rombelCategories',
            'mapels'
          ])
          ->first();
      }
    }
}
