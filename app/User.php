<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Tymon\JWTAuth\Contracts\JWTSubject;
use Spatie\Permission\Traits\HasRoles;
use Illuminate\Support\Arr;

class User extends Authenticatable implements JWTSubject
{
    use Notifiable, HasRoles;

    protected $guard_name = 'api';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = [
    //     'name', 'email', 'password', 'is_student'
    // ];

    protected $guarded = ['id'];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * Get the identifier that will be stored in the subject claim of the JWT.
     *
     * @return mixed
     */
    public function getJWTIdentifier()
    {
        return $this->getKey();
    }

    /**
     * Return a key value array, containing any custom claims to be added to the JWT.
     *
     * @return array
     */
    public function getJWTCustomClaims()
    {
        $detail = [
          'fullname' => 'Anonim'
        ];

        if ($this->is_student) {
          if ($this->student !== null) {
            $detail = $this->student->only('id', 'user_id', 'fullname', 'nickname', 'gender', 'birthplace', 'birthdate', 'created_at', 'updated_at'); 
          }
        } else {
          if ($this->staff !== null) {
            $detail = $this->staff;
          }
        }

        return [
          'id' => $this->id,
          'username' => $this->username,
          'email' => $this->email,
          'is_student' => $this->is_student,
          'detail' => $detail,
          'roles' => $this->roles->toArray(),
          'permissions' => $this->getAllPermissions()->map->only('id', 'name')
        ];
    }

    // Relationship
    public function staff() {
      return $this->hasOne('App\Model\Staff');
    }

    public function student() {
      return $this->hasOne('App\Model\Student');
    }
    // Relationship
}
