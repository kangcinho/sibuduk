<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StaffRequest extends FormRequest
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
      'nip' => '',
      'fullname' => 'sometimes',
      'nickname' => 'max:255',
      'gender' => 'sometimes',
      'birthplace' => 'sometimes',
      'birthdate' => 'sometimes',
      'position' => 'max:255',
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
          $rules['nip'] = ['required', 'digits_between', 'numeric', 'unique:staff'];
          $rules['fullname'] = ['required', 'max:255',];
          $rules['gender'] = ['required', 'max:255',];
          $rules['birthplace'] = ['required', 'max:255',];
          $rules['birthdate'] = ['required'];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['nip'] = ['required', 'numeric', 'digits_between:1,255', "unique:staff,nip,{$this->staff->id}"];
        }

        return $rules;
    }

    public function messages() {
      return [
        'nip.required' => 'nip tidak boleh kosong',
        'nip.numeric' => 'nip harus menggunakan angka',
        'nip.unique' => 'nip :input sudah ada di database',
        'nip.digits_between' => 'nip maksimal 255 karakter',
        
        'fullname.required' => 'nama lengkap tidak boleh kosong',
        'fullname.max' => 'nama lengkap maksimal 255 karakter',
        'nickname.max' => 'nama lengkap maksimal 255 karakter',
        'gender.required' => 'jenis kelamin tidak boleh kosong',
        'birthplace.required' => 'tempat lahir tidak boleh kosong',
        'birthplace.max' => 'tempat lahir maksimal 255 karakter',
        'birthdate.required' => 'tanggal lahir tidak boleh kosong',
        'position.max' => 'jabatan maksimal 255 karakter',
      ];
    }
}
