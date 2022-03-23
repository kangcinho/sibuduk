<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;
use Symfony\Component\HttpFoundation\Response as StatusCode;
use Spatie\QueryBuilder\QueryBuilder;

class RolePermissionController extends Controller
{
  public function roles(Request $request) {
    if ($request->has('q')) {
      $query = Role::where('name', '!=', 'SUPERUSER');

      $roles = QueryBuilder::for($query)
        ->allowedFilters(['name'])
        ->paginate(10)
        ->appends(request()->query());
    } else {
      $roles = Role::where('name', '!=', 'SUPERUSER')->orderBy('name')->paginate(10);
    }

    return response()->json([
      'data' => $roles,
      'message' => null
    ], StatusCode::HTTP_OK);
  }

  public function syncRole(Request $request) {
    $role = Role::updateOrCreate(['name' => $request->name], $request->all());

    return response()->json([
      'data' => $role,
      'message' => "sukses sinkronasi: {$role->name}"
    ], StatusCode::HTTP_OK);
  }

  public function syncUserRole(Request $request, User $user) {
    $user->syncRoles($request->all());

    return response()->json([
      'data' => $user,
      'message' => "sukses sinkronasi: role untuk {$user->username}"
    ], StatusCode::HTTP_OK);
  }

  public function permissions(Request $request) {
    if ($request->has('q')) {
      $permissions = QueryBuilder::for(Permission::class)
        ->allowedFilters(['name'])
        ->paginate(10)
        ->appends(request()->query());
    } else {
      $permissions = Permission::orderBy('name')->paginate(10);
    }

    return response()->json([
      'data' => $permissions,
      'message' => null
    ], StatusCode::HTTP_OK);
  }

  public function syncPermission(Request $request) {
    $permission = Permission::updateOrCreate(['name' => $request->name], $request->all());

    return response()->json([
      'data' => $permission,
      'message' => "sukses sinkronasi: {$permission->name}"
    ], StatusCode::HTTP_OK);
  }

  public function syncUserPermission(Request $request, User $user) {
    $user->syncPermissions($request->all());

    return response()->json([
      'data' => $user,
      'message' => "sukses sinkronasi: permission untuk {$user->username}"
    ], StatusCode::HTTP_OK);
  }
}
