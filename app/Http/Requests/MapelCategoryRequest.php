<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class MapelCategoryRequest extends FormRequest
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
          $rules['name'] = ['required', 'max:255', "unique:mapel_categories"];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['name'] = ['sometimes', 'required', 'max:255', "unique:mapel_categories,name,{$this->mapel_category->id}"];
        }

        return $rules;
    }

    public function messages() {
      return [
        'name.required' => 'nama kategori mapel tidak boleh kosong',
        'name.unique' => 'kategori mapel :input sudah ada di database',
        'name.max' => 'nama kategori mapel maksimal 255 karakter'
      ];
    }
}
