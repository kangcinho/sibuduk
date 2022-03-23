<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class RombelRequest extends FormRequest
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
      'rombel_category_id' => 'required|numeric',
      'student_id' => 'required|numeric'
    ];

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return $this->rules;
    }

    public function messages() {
      return [
        'rombel_category_id.required' => 'jenis rombel tidak boleh kosong',
        'rombel_category_id.numeric' => 'data input jenis rombel tidak sesuai',
        'student_id.required' => 'siswa tidak boleh kosong',
        'student_id.numeric' => 'data input siswa tidak sesuai',
      ];
    }
}
