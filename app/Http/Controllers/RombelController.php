<?php

namespace App\Http\Controllers;

use App\Model\Rombel;
use Illuminate\Http\Request;
use App\Http\Requests\RombelRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;

class RombelController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-rombel', ['only' => ['store']]);
    //   $this->middleware('can:read-rombel', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-rombel', ['only' => ['update']]);
    //   $this->middleware('can:delete-rombel', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
        if ($request->has('q') || $request->has('include')) {
          $rombels = $this->queryFilter($request);
        } else {
          $rombels = Rombel::latest()->paginate(10);
        }

        return response()->json([
          'data' => $rombels,
          'message' => null
        ], StatusCode::HTTP_OK);
    }

    public function store(RombelRequest $request)
    {
      $rombel = Rombel::create($request->all());

      if ($request->has('include')) {
        $rombel = $this->queryFilter($request, $rombel);
      }

      return response()->json([
        'data' => $rombel,
        'message' => "sukses ditambahkan: siswa nis {$rombel->student->nis} ke rombel {$rombel->rombelCategory->name}"
      ], StatusCode::HTTP_CREATED);
    }

    public function show(Rombel $rombel)
    {
      return response()->json([
        'data' => $rombel,
        'message' => null
      ], StatusCode::HTTP_OK);
    }

    public function update(RombelRequest $request, Rombel $rombel)
    {
      $rombel->update($request->all());

      if ($request->has('include')) {
        $rombel = $this->queryFilter($request, $rombel);
      }

      return response()->json([
        'data' => $rombel,
        'message' => "sukses diupdate: siswa nis {$rombel->student->nis} ke rombel {$rombel->rombelCategory->name}"
      ], StatusCode::HTTP_OK);
    }

    public function destroy(Rombel $rombel)
    {
      $rombel->delete();

      return response()->json([
        'data' => null,
        'message' => "sukses dihapus: siswa nis {$rombel->student->nis} ke rombel {$rombel->rombelCategory->name}"
      ], StatusCode::HTTP_OK);
    }

    public function queryFilter($request, $object = null) {
      if ($request->isMethod('GET')) {
        return QueryBuilder::for(Rombel::latest())
          ->allowedFilters([
            AllowedFilter::partial('rombelCategory.name'),
            AllowedFilter::exact('student.nis'),
            AllowedFilter::exact('rombel_category_id'),
            AllowedFilter::exact('student_id')
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
            'student'
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else if ($request->isMethod('POST') || $request->isMethod('PUT') || $request->isMethod('PATCH')) {
        return QueryBuilder::for(Rombel::whereId($object->id))
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
            'student'
          ])
          ->first();
      }
    }
}
