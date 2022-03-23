<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ReligionRequest extends FormRequest
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
        'name' => ''
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
          $rules['name'] = ['required', 'max:255', 'unique:religions'];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['name'] = ['sometimes', 'max:255', 'required', "unique:religions,name,{$this->religion->id}"];
        }

        return $rules;
    }

    public function messages() {
      return [
        'name.required' => 'nama agama tidak boleh kosong',
        'name.unique' => 'agama :input sudah ada di database',
        'name.max' => 'nama agama maksimal 255 karakter'
      ];
    }
}
