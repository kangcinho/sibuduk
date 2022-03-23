<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Rules\IjazahScoreRowExists;

class IjazahScoreRequest extends FormRequest
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
      'avg_score' => '',
      'exam_score' => '',
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
          $rules['avg_score'] = ['required', 'numeric', 'digits_between:1,255', new IjazahScoreRowExists($this->rombel_category_id, $this->student_id, $this->mapel_id)];
          $rules['exam_score'] = ['required', 'numeric', 'digits_between:1,255'];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['avg_score'] = ['required', 'numeric', 'digits_between:1,255'];
          $rules['exam_score'] = ['required', 'numeric', 'digits_between:1,255'];
        }

        return $rules;
    }

    public function messages() {
      return [
        'avg_score.required' => 'nilai rata-rata tidak boleh kosong',
        'avg_score.numeric' => 'nilai rata-rata tidak boleh kosong',
        'avg_score.digits_between' => 'nilai rata-rata maksimal 255 karakter',

        'exam_score.required' => 'nilai ujian tidak boleh kosong',
        'exam_score.numeric' => 'nilai ujian harus menggunakan angka',
        'exam_score.digits_between' => 'nilai ujian maksimal 255 karakter',
      ];
    }
}
