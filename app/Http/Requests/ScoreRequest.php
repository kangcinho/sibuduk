<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class ScoreRequest extends FormRequest
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
      'pengetahuan' => 'numeric|digits_between:1,255',
      'keterampilan' => 'numeric|digits_between:1,255',
      'sikap' => 'max:255',
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
        'pengetahuan.numeric' => 'nilai pengetahuan harus menggunakan angka',
        'pengetahuan.digits_between' => 'nilai pengetahuan maksimal 255 karakter',
        'keterampilan.numeric' => 'nilai keterampilan harus menggunakan angka',
        'keterampilan.digits_between' => 'nilai keterampilan maksimal 255 karakter',
        'sikap.numeric' => 'nilai sikap harus menggunakan angka',
        'sikap.max' => 'nilai sikap maksimal 255 karater'
      ];
    }
}
