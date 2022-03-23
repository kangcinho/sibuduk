<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Rules\MatchOldPassword;

class UserRequest extends FormRequest
{
    protected function failedValidation(Validator $validator)
    {
      throw new HttpResponseException(response()->json($validator->errors(), 422));
    }
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    protected $rules = [
      'username' => '',
      'password' => '',
      'email' => 'email|max:255',
      'new_password' => ''
    ];

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $rules = $this->rules;

        if ($this->isMethod('POST')) {
          $rules['username'] = ['required', 'max:255', 'unique:users,username'];
          $rules['password'] = ['sometimes', 'required', 'min:6', 'max:255'];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['username'] = ['required', 'max:255', "unique:users,username,{$this->user->id}"];
          $rules['password'] = ['sometimes', 'required', 'min:6', 'max:255', new MatchOldPassword()];
          $rules['new_password'] = ['sometimes', 'required', 'min:6', 'max:255',];
        }

        return $rules;
    }

    public function messages() {
      return [
        'username.required' => 'username tidak boleh kosong',
        'username.unique' => 'username :input sudah ada di database',
        'username.max' => 'username maksimal 255 karakter',
        'password.required' => 'password tidak boleh kosong',
        'password.min' => 'password minimal 6 karakter',
        'password.max' => 'password maksimal 255 karakter',
        'new_password.required' => 'password baru tidak boleh kosong',
        'new_password.min' => 'password baru minimal 6 karakter',
        'new_password.max' => 'password baru maksimal 255 karakter',
        'email.email' => 'format email tidak sesuai',
        'email.max' => 'email maksimal 255 karakter',
      ];
    }
}
