<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class CountryRequest extends FormRequest
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
      'num_code' => '', // reference https://countrycode.org/
      'alpha_2_code' => '',
      'alpha_3_code' => '',
      'name' => '',
      'nationality' => '',
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
          $rules['num_code'] = ['required', 'numeric', 'digits_between:1,255', "unique:countries"];
          $rules['alpha_2_code'] = ['required', 'alpha', 'size:2', "unique:countries"];
          $rules['alpha_3_code'] = ['required', 'alpha', 'size:3', "unique:countries"];
          $rules['name'] = ['required', 'max:255',];
          $rules['nationality'] = ['required', 'max:255',];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['num_code'] = ['sometimes', 'required', 'digits_between:1,255', 'numeric', "unique:countries,num_code,{$this->country->id}"];
          $rules['alpha_2_code'] = ['sometimes', 'required', 'alpha', 'size:2', "unique:countries,alpha_2_code,{$this->country->id}"];
          $rules['alpha_3_code'] = ['sometimes', 'required', 'alpha', 'size:3', "unique:countries,alpha_3_code,{$this->country->id}"];
          $rules['name'] = ['sometimes', 'required', 'max:255', "unique:countries,name,{$this->country->id}"];
          $rules['nationality'] = ['sometimes', 'required', 'max:255', "unique:countries,nationality,{$this->country->id}"];
        }

        return $rules;
    }

    public function messages() {
      return [
        'num_code.required' => 'country code tidak boleh kosong | lihat referensi: https://countrycode.org/',
        'num_code.numeric' => 'country code harus menggunakan angka',
        'num_code.unique' => 'country code :input sudah ada di database',
        'num_code.digits_between' => 'country code maksimal 255 karakter',

        'alpha_2_code.required' => '2 digit code tidak boleh kosong | lihat referensi: https://countrycode.org/',
        'alpha_2_code.alpha' => 'code harus menggunakan huruf',
        'alpha_2_code.size' => 'code harus 2 karakter',
        'alpha_2_code.unique' => 'code :input sudah ada di database',
        
        'alpha_3_code.required' => '3 digit code tidak boleh kosong | lihat referensi: https://countrycode.org/',
        'alpha_3_code.alpha' => 'code harus menggunakan huruf',
        'alpha_3_code.size' => 'code harus 3 karakter',
        'alpha_3_code.unique' => 'code :input sudah ada di database',
        
        'name.required' => 'nama negara tidak boleh kosong',
        'name.unique' => 'negara :input sudah ada di database',
        'name.max' => 'nama negara maksimal 255 karakter',
        
        'nationality.required' => 'kewarganegaraan tidak boleh kosong',
        'nationality.unique' => 'kewarganegaraan :input sudah ada di database',
        'nationality.max' => 'kewarganegaraan maksimal 255 karakter',
      ];
    }
}
