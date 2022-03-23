<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class DepartmentRequest extends FormRequest
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
      'name' => '',
      'alias' => ''
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
          $rules['name'] = ['required', 'max:255', 'unique:departments'];
          $rules['alias'] = ['required', 'max:255', 'unique:departments'];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['name'] = ['sometimes', 'required', 'max:255', "unique:departments,name,{$this->department->id}"];
          $rules['alias'] = ['sometimes', 'required', 'max:255', "unique:departments,alias,{$this->department->id}"];
        }

        return $rules;
    }

    public function messages() {
      return [
        'name.required' => 'nama jurusan tidak boleh kosong',
        'name.unique' => 'jurusan :input sudah ada di database',
        'name.max' => 'nama jurusan maksimal 255 karakter',
        'alias.required' => 'alias jurusan tidak boleh kosong',
        'alias.unique' => 'alias :input sudah ada di database',
        'alias.max' => 'alias jurusan maksimal 255 karakter'
      ];
    }
}
