<?php

namespace App\Http\Controllers;

use App\User;
use Illuminate\Http\Request;
use App\Http\Requests\UserRequest;
use App\Http\Requests\UploadProfilePictureRequest;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;
use Spatie\QueryBuilder\AllowedFilter;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Image;

class UserController extends Controller
{
    // di FE belum diatur, jadi komen aja dlu
    // public function __construct()
    // {
    //   $this->middleware('can:create-user', ['only' => ['store']]);
    //   $this->middleware('can:read-user', ['only' => ['index', 'show']]);
    //   $this->middleware('can:update-user', ['only' => ['update']]);
    //   $this->middleware('can:delete-user', ['only' => ['destroy']]);
    // }

    public function index(Request $request)
    {
      if ($request->has('q') || $request->has('include')) {
        $users = QueryBuilder::for(User::latest())
          ->allowedFilters([
            AllowedFilter::exact('username')
          ])
          ->allowedIncludes([
            'staff',
            'student'
          ])
          ->paginate(10)
          ->appends(request()->query());
      } else {
        $users = User::latest()->paginate(10);
      }

      return response()->json([
        'data' => $users,
        'message' => null
      ], StatusCode::HTTP_OK);
    }

    public function store(UserRequest $request)
    {
      $password = Hash::make($request->password);
      $request->merge(['password' => $password]);

      $user = User::create($request->all());
      return response()->json([
        'data' => $user,
        'message' => "sukses ditambahkan: {$user->username}"
      ], StatusCode::HTTP_CREATED);
    }

    public function show(User $user)
    {
      return response()->json([
        'data' => $user,
        'message' => null
      ], StatusCode::HTTP_OK);
    }

    public function update(UserRequest $request, User $user)
    {
      if ($request->password && $request->new_password) {
        $password = Hash::make($request->new_password);
        $request->merge(['password' => $password]);
      }

      $user->update($request->all());
      return response()->json([
        'data' => $user,
        'message' => "sukses diupdate: {$user->username}"
      ], StatusCode::HTTP_OK);
    }

    public function destroy(User $user)
    {
      $user->delete();

      return response()->json([
        'data' => null,
        'message' => "sukses dihapus: {$user->username}"
      ], StatusCode::HTTP_OK);
    }

    public function uploadProfilePicture(UploadProfilePictureRequest $request, User $user) {
      $file = $request->file('profile_pict');
      $path = $file->hashName('avatars');

      $img = Image::make($file)
        ->resize(354, null, function ($constraint) { $constraint->aspectRatio(); })
        ->encode();

      Storage::put($path, $img);

      if ($user->is_student) {
        $profileImgUrl = $user->student->profile_pict;

        if (!is_null($profileImgUrl)) {
          Storage::delete($profileImgUrl);
        }

        $user->student->update(['profile_pict' => $path]);
      } else {
        $profileImgUrl = $user->staff->profile_pict;

        if (!is_null($profileImgUrl)) {
          Storage::delete($profileImgUrl);
        }

        $user->staff->update(['profile_pict' => $path]);
      }
      
      return response()->json([
        'profile_pict' => $path // sementara return path aja dlu
      ]);
    }
}