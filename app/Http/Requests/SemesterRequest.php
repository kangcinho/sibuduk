<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class SemesterRequest extends FormRequest
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
      'num' => '',
      'name' => '',
      'romawi' => '',
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
          $rules['num'] = ['required', 'max:255', 'numeric', 'unique:semesters'];
          $rules['name'] = ['required', 'max:255', 'unique:semesters'];
          $rules['romawi'] = ['required', 'max:255', 'unique:semesters'];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['num'] = ['sometimes', 'required', 'digits_between:1,255', 'numeric', "unique:semesters,num,{$this->semester->id}"];
          $rules['name'] = ['sometimes', 'required', 'max:255', "unique:semesters,name,{$this->semester->id}"];
          $rules['romawi'] = ['sometimes', 'required', 'max:255', "unique:semesters,romawi,{$this->semester->id}"];
        }

        return $rules;
    }

    public function messages() {
      return [
        'num.required' => 'semester tidak boleh kosong',
        'num.numeric' => 'semester harus menggunakan angka',
        'num.unique' => 'semester :input sudah ada di database',
        'num.digits_between' => 'semester maksimal 255 karakter',
        'name.required' => 'nama semester tidak boleh kosong',
        'name.unique' => 'nama semester :input sudah ada di database',
        'name.max' => 'nama semester maksimal 255 karakter',
        'romawi.required' => 'angka romawi tidak boleh kosong',
        'romawi.unique' => 'angka romawi :input sudah ada di database',
        'romawi.max' => 'angka romawi maksimal 255 karakter',
      ];
    }
}
