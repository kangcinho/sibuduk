<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Rules\AttendanceRowExists;

class AttendanceRequest extends FormRequest
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
      'rombel_category_id' => 'sometimes|required|numeric',
      // 'season_id' => 'sometimes|required|numeric',
      // 'semester_id' => 'sometimes|required|numeric',
      'student_id' => 'sometimes|required|numeric',
      'sakit' => '',
      'izin' => 'numeric|digits_between:1,255',
      'tanpaket' => 'numeric|digits_between:1,255',
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
        $rules['sakit'] = ['numeric', 'digits_between:1,255', new AttendanceRowExists($this->student_id, $this->rombel_category_id)];
      } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
        $rules['sakit'] = ['numeric', 'digits_between:1,255'];
      }

      return $rules;
    }

    public function messages() {
      return [
        'sakit.numeric' => 'absensi sakit harus menggunakan angka',
        'sakit.digits_between' => 'absensi sakit maksimal 255 karakter',
        'izin.numeric' => 'absensi izin harus menggunakan angka',
        'izin.digits_between' => 'absensi izin maksimal 255 karakter',
        'tanpaket.numeric' => 'absensi tanpa keterangan harus menggunakan angka',
        'tanpaket.digits_between' => 'absensi tanpa keterangan maksimal 255 karakter',
      ];
    }
}
