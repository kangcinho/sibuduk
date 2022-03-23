<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ExtraRequest extends FormRequest
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
      'coach' => 'max:255'
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
          $rules['name'] = ['required', 'max:255', 'unique:extras'];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['name'] = ['sometimes', 'required', 'max:255', "unique:extras,name,{$this->extra->id}"];
        }

        return $rules;
    }

    public function messages() {
      return [
        'name.required' => 'nama extra tidak boleh kosong',
        'name.unique' => 'extra :input sudah ada di database',
        'name.max' => 'nama extra maksimal 255 karakter',
        'coach.max' => 'nama pembina maksimal 255 karakter'
      ];
    }
}
