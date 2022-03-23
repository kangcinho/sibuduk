<?php

namespace App\Http\Controllers;

use App\Model\Country;
use Illuminate\Http\Request;
use App\Http\Requests\CountryRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class CountryController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-country', ['only' => ['store']]);
    //   $this->middleware('can:read-country', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-country', ['only' => ['update']]);
    //   $this->middleware('can:delete-country', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $countries = $this->queryFilter($request);
        } else {
          $countries = Country::latest()->paginate(10);
        }

        return response()->json([
          'data' => $countries,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(CountryRequest $request)
    {
        $country = Country::create($request->all());

        if ($request->has('include')) {
          $country = $this->queryFilter($request, $country);
        }

        return response()->json([
          'data' => $country,
          'message' => "sukses ditambahkan: {$country->name}"
        ], StatusCode::HTTP_CREATED);
    }

    public function show(Country $country)
    {
        return response()->json([
          'data' => $country,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function update(CountryRequest $request, Country $country)
    {
        $country->update($request->all());

        if ($request->has('include')) {
          $country = $this->queryFilter($request, $country);
        }

        return response()->json([
          'data' => $country,
          'message' => "sukses diupdate: {$country->name}"
        ], StatusCode::HTTP_OK);
    }

    public function destroy(Country $country)
    {
        $country->delete();

        return response()->json([
          'data' => null,
          'message' => "sukses dihapus: {$country->name}"
        ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(Country::latest())
          ->allowedFilters([
            AllowedFilter::exact('num_code'),
            AllowedFilter::exact('alpha_2_code'),
            'alpha_3_code',
            'name'
          ])
          ->allowedFields([
            'students.id',
            'students.user_id',
            'students.nis',
            'students.nisn',
            'students.fullname',
            'students.nickname',
            'students.gender',
          ])
          ->allowedIncludes([
            'students',
            'fatStudents',
            'motStudents',
            'waliStudents',
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(Country::whereId($object->id))
          ->allowedFields([
            'students.id',
            'students.user_id',
            'students.nis',
            'students.nisn',
            'students.fullname',
            'students.nickname',
            'students.gender',
          ])
          ->allowedIncludes([
            'students',
            'fatStudents',
            'motStudents',
            'waliStudents',
          ])
          ->first();
      }
    }
}
