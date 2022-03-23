<?php

namespace App\Http\Controllers;

use App\Model\Extra;
use Illuminate\Http\Request;
use App\Http\Requests\ExtraRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;

class ExtraController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-extra', ['only' => ['store']]);
    //   $this->middleware('can:read-extra', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-extra', ['only' => ['update']]);
    //   $this->middleware('can:delete-extra', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $extras = $this->queryFilter($request);
        } else {
          $extras = Extra::latest()->paginate(10);
        }

        return response()->json([
          'data' => $extras,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(ExtraRequest $request)
    {
        $extra = Extra::create($request->all());

        if ($request->has('include')) {
          $extra = $this->queryFilter($request, $extra);
        }

        return response()->json([
          'data' => $extra,
          'message' => "sukses ditambahkan: {$extra->name}"
        ], StatusCode::HTTP_CREATED);
    }

    public function show(Extra $extra)
    {
        return response()->json([
          'data' => $extra,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function update(ExtraRequest $request, Extra $extra)
    {
        $extra->update($request->all());

        if ($request->has('include')) {
          $extra = $this->queryFilter($request, $extra);
        }

        return response()->json([
          'data' => $extra,
          'message' => "sukses diupdate: {$extra->name}"
        ], StatusCode::HTTP_OK);
    }

    public function destroy(Extra $extra)
    {
        $extra->delete();

        return response()->json([
          'data' => null,
          'message' => "sukses dihapus: {$extra->name}"
        ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(Extra::latest())
          ->allowedFilters([
            'name'
            ])
          ->allowedIncludes([
            'extraScores'
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(Extra::whereId($object->id))
          ->allowedIncludes(['extraScores'])
          ->first();
      }
    }
}
