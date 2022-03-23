<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class RombelCategoryRequest extends FormRequest
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
      'season_id' => 'required|numeric',
      'department_id' => 'required|numeric',
      'wali_name' => 'max:255'
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
          $rules['name'] = ['required', 'max:255', "unique:rombel_categories,name,NULL,id,season_id,{$this->season_id}"];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['name'] = ['required', 'max:255', "unique:rombel_categories,name,{$this->rombel_category->id},id,season_id,{$this->rombel_category->season_id}"];
        }

        return $rules;
    }

    public function messages() {
      return [
        'name.required' => 'nama jenis rombel tidak boleh kosong',
        'name.unique' => 'nama jenis rombel sudah ada di tahun ajaran yang dipilih',
        'name.max' => 'nama jenis rombel maksimal 255 karakter',
        'season_id.required' => 'tahun ajaran tidak boleh kosong',
        'season_id.numeric' => 'data input tahun ajaran tidak sesuai',
        'department_id.required' => 'jurusan tidak boleh kosong',
        'department_id.numeric' => 'data input jurusan tidak sesuai',
        'wali_name' => 'nama wali kelas maksimal 255 karakter'
      ];
    }
}
