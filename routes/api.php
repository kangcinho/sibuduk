<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// AUTH
Route::group(['middleware' => 'api', 'prefix' => 'auth'], function ($router) {
  Route::post('login', 'AuthController@login')->name('login');
  Route::post('logout', 'AuthController@logout')->name('logout');
  Route::post('refresh', 'AuthController@refresh')->name('refresh');
  Route::post('me', 'AuthController@me')->name('me');

});

Route::apiResources([
  'department' => 'DepartmentController',
  'religion' => 'ReligionController',
  'extra' => 'ExtraController',
  'season' => 'SeasonController',
  'semester' => 'SemesterController',
  'country' => 'CountryController',
  'mapel-category' => 'MapelCategoryController',
  'mapel' => 'MapelController',
  'student' => 'StudentController',
  'staff' => 'StaffController',
  'attendance' => 'AttendanceController',
  'extra-score' => 'ExtraScoreController',
  'rombel-category' => 'RombelCategoryController',
  'rombel' => 'RombelController',
  'score' => 'ScoreController',
  'user' => 'UserController',
  'ijazah-score' => 'IjazahScoreController'
]);

// Role and Permission
Route::group(['middleware' => 'api', 'prefix' => 'acl'], function ($router) {
  Route::get('role', 'RolePermissionController@roles')->name('role');
  Route::post('role', 'RolePermissionController@syncRole')->name('role.sync');
  Route::post('sync-user-role/{user}', 'RolePermissionController@syncUserRole')->name('role.sync-user');

  Route::get('permission', 'RolePermissionController@permissions')->name('permission');
  Route::post('permission', 'RolePermissionController@syncPermission')->name('permission.sync');
  Route::post('sync-user-permission/{user}', 'RolePermissionController@syncUserPermission')->name('permission.sync-user');
});

// Import Excel
Route::group(['middleware' => 'api', 'prefix' => 'import'], function ($router) {
  Route::post('induk', 'ImportController@induk')->name('import.induk');
  Route::post('ledger', 'ImportController@ledger')->name('import.ledger');
});

// Utilities
Route::group(['middleware' => 'api', 'prefix' => 'utils'], function ($router) {
  Route::post('profile-picture/{user}', 'UserController@uploadProfilePicture')->name('profile.update-picture');
  Route::get('examplepdf', 'ExportController@bukuInduk')->name('export.examplepdf');
});