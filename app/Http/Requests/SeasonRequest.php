<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class SeasonRequest extends FormRequest
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
      'period' => ''
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
          $rules['period'] = ['required', 'max:255', 'unique:seasons'];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['period'] = ['sometimes', 'required', 'max:255', "unique:seasons,period,{$this->season->id}"];
        }

        return $rules;
    }

    public function messages() {
      return [
        'period.required' => 'tahun ajaran tidak boleh kosong',
        'period.unique' => 'tahun ajaran :input sudah ada di database',
        'period.max' => 'tahun ajaran maksimal 255 karakter'
      ];
    }
}
