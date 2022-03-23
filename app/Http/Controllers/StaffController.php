<?php

namespace App\Http\Controllers;

use App\Model\Staff;
use Illuminate\Http\Request;
use App\Http\Requests\StaffRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class StaffController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-staff', ['only' => ['store']]);
    //   $this->middleware('can:read-staff', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-staff', ['only' => ['update']]);
    //   $this->middleware('can:delete-staff', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
      if ($request->has('q') || $request->has('include')) {
        $staff = $this->queryFilter($request);
      } else {
        $staff = Staff::latest()->paginate(10);
      }

      return response()->json([
        'data' => $staff,
        'message' => null
      ], StatusCode::HTTP_OK);
    }

    public function store(StaffRequest $request)
    {
        $staff = Staff::create($request->all());

        if ($request->has('include')) {
          $staff = $this->queryFilter($request, $staff);
        }

        return response()->json([
          'data' => $staff,
          'message' => "sukses ditambahkan: {$staff->nip}"
        ], StatusCode::HTTP_CREATED);
    }

    public function show(Staff $staff)
    {
        return response()->json([
          'data' => $staff,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function update(StaffRequest $request, Staff $staff)
    {
        $staff->update($request->all());

        if ($request->has('include')) {
          $staff = $this->queryFilter($request, $staff);
        }

        return response()->json([
          'data' => $staff,
          'message' => "sukses diupdate: {$staff->nip}"
        ], StatusCode::HTTP_OK);
    }

    public function destroy(Staff $staff)
    {
        $staff->delete();

        return response()->json([
          'data' => null,
          'message' => "sukses dihapus: {$staff->nip}"
        ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(Staff::latest())
          ->allowedFilters([
            allowedFilter::exact('nip'),
            'fullname',
            'position'
          ])
          ->allowedIncludes([
            'user',
            'religion',
            'country'
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(Staff::whereId($object->id))
          ->allowedIncludes([
            'user',
            'religion',
            'country'
          ])
          ->first();
      }
    }
}
