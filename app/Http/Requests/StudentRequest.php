<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;

class StudentRequest extends FormRequest
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
      'nis' => '',
      'nisn' => '',
      'fullname' => 'sometimes',
      'nickname' => 'sometimes|max:255',
      'gender' => 'sometimes',
      'birthplace' => 'sometimes',
      'birthdate' => 'sometimes|required',
      'sau_kandung' => 'sometimes|max:255',
      'sau_tiri' => 'sometimes|max:255',
      'sau_angkat' => 'sometimes|max:255',
      'status_in_fam' => 'sometimes|max:255',
      'birth_order' => 'sometimes|max:255',
      'daily_lang' => 'sometimes|max:255',
      'stu_phone' => 'sometimes|numeric|digits_between:1,255',
      'live_with' => 'sometimes|max:255',
      'sch_distance' => 'sometimes|max:255',
      'blood_type' => 'sometimes|max:255',
      'height' => 'sometimes|max:255',
      'weight' => 'sometimes|max:255',
      'grad_from_sch' => 'sometimes|max:255',
      'pre_sttb' => '',
      'study_period' => 'sometimes|max:255',
      'trf_from' => 'sometimes|max:255',
      'entry_to' => 'sometimes|max:255',
      'fat_name' => 'sometimes|max:255',
      'fat_birthplace' => 'sometimes|max:255',
      'fat_latest_edu' => 'sometimes|max:255',
      'fat_job' => 'sometimes|max:255',
      'fat_income' => 'sometimes|max:255',
      'fat_phone' => 'sometimes|numeric|digits_between:1,255',
      'mot_name' => 'sometimes|max:255',
      'mot_birthplace' => 'sometimes|max:255',
      'mot_latest_edu' => 'sometimes|max:255',
      'mot_job' => 'sometimes|max:255',
      'mot_income' => 'sometimes|max:255',
      'mot_phone' => 'sometimes|numeric|digits_between:1,255',
      'wali_name' => 'sometimes|max:255',
      'wali_birthplace' => 'sometimes|max:255',
      'wali_latest_edu' => 'sometimes|max:255',
      'wali_job' => 'sometimes|max:255',
      'wali_income' => 'sometimes|max:255',
      'wali_phone' => 'sometimes|numeric|digits_between:1,255',
      'wali_relation' => 'sometimes|max:255',
      'sttb' => '',
      'next_stu_step' => 'sometimes|max:255',
      'instance' => 'sometimes|max:255',
      'stu_income' => 'sometimes|max:255',
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
          $rules['nis'] = ['required', 'numeric', 'digits_between:1,255', 'unique:students'];
          $rules['nisn'] = ['required', 'numeric', 'digits_between:1,255', 'unique:students'];
          $rules['fullname'] = ['required', 'max:255'];
          $rules['gender'] = ['required', 'max:255'];
          $rules['birthplace'] = ['required', 'max:255'];
          $rules['birthdate'] = ['required'];
          $rules['pre_sttb'] = ['sometimes', 'required', 'max:255', 'unique:students'];
          $rules['sttb'] = ['sometimes', 'required', 'max:255', 'unique:students'];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['nis'] = ['required', 'numeric', 'digits_between:1,255', "unique:students,nis,{$this->student->id}"];
          $rules['nisn'] = ['required', 'numeric', 'digits_between:1,255', "unique:students,nisn,{$this->student->id}"];
          $rules['pre_sttb'] = ['sometimes', 'required', 'max:255', "unique:students,pre_sttb,{$this->student->id}"];
          $rules['sttb'] = ['sometimes', 'required', 'max:255', "unique:students,sttb,{$this->student->id}"];
        }

        return $rules;
    }

    public function messages() {
      return [
        'nis.required' => 'nis tidak boleh kosong',
        'nis.numeric' => 'nis harus menggunakan angka',
        'nis.unique' => 'nis :input sudah ada di database',
        'nis.digits_between' => 'nis maksimal 255 karakter',

        'nisn.required' => 'nisn tidak boleh kosong',
        'nisn.numeric' => 'nisn harus menggunakan angka',
        'nisn.unique' => 'nisn :input sudah ada di database',
        'nisn.digits_between' => 'nisn maksimal 255 karakter',

        'fullname.required' => 'nama lengkap tidak boleh kosong',
        'fullname.max' => 'nama lengkap maksimal 255 karakter',
        
        'nickname.max' => 'nama panggilan maksimal 255 karakter',
        
        'gender.required' => 'jenis kelamin tidak boleh kosong',
        'gender.max' => 'jenis kelamin maksimal 255 karakter',

        'birthplace.required' => 'tempat lahir tidak boleh kosong',
        'birthplace.max' => 'tempat lahir maksimal 255 karakter',

        'birthdate.required' => 'tanggal lahir tidak boleh kosong',

        'sau_kandung.max' => 'saudara kandung maksimal 255 karakter',
        
        'sau_tiri.max' => 'saudara tiri maksimal 255 karakter',

        'sau_angkat.max' => 'saudara angkat maksimal 255 karakter',
        
        'status_in_fam.max' => 'status dalam keluarga maksimal 255 karakter',
        
        'birth_order.max' => 'urutan kelahiran maksimal 255 karakter',
        
        'daily_lang.max' => 'bahasa sehari-hari maksimal 255 karakter',

        'stu_phone.numeric' => 'nomor telepon harus menggunakan angka',
        'stu_phone.digits_between' => 'nomor telepon maksimal 255 karakter',

        'live_with.max' => 'pendamping siswa tinggal maksimal 255 karakter',
        
        'sch_distance.max' => 'jarak tempat tinggal ke sekolah maksimal 255 karakter',
        
        'blood_type.max' => 'golongan darah maksimal 255 karakter',

        'height.max' => 'tinggi badan maksimal 255 karakter',
        
        'weight.max' => 'berat badan maksimal 255 karakter',

        'grad_from_sch.max' => 'sekolah asal maksimal 255 karakter',
        
        'pre_sttb.required' => 'nomor sttb sekolah asal tidak boleh kosong',
        'pre_sttb.unique' => 'nomor sttb sekolah asal :input sudah ada di database',
        'pre_sttb.max' => 'nomor sttb sekolah asal maksimal 255 karakter',
        
        'study_period.max' => 'lama belajar maksimal 255 karakter',
        
        'trf_from.max' => 'asal transfer dari sekolah maksimal 255 karakter',
        
        'entry_to.max' => 'diterima di kelas maksimal 255 karakter',
        
        'fat_name.max' => 'nama ayah maksimal 255 karakter',
        
        'fat_birthplace.max' => 'tempat lahir ayah maksimal 255 karakter',
        
        'fat_latest_edu.max' => 'pendidikan terakhir ayah maksimal 255 karakter',
        
        'fat_job.max' => 'pekerjaan ayah maksimal 255 karakter',
        
        'fat_income.max' => 'penghasilan ayah maksimal 255 karakter',

        'fat_phone.numeric' => 'nomor telepon ayah harus menggunakan angka',
        'fat_phone.digits_between' => 'nomor telepon ayah maksimal 255 karakter',
        
        'mot_name.max' => 'nama ibu maksimal 255 karakter',
        
        'mot_birthplace.max' => 'tempat lahir ibu maksimal 255 karakter',
        
        'mot_latest_edu.max' => 'pendidikan terakhir ibu maksimal 255 karakter',
        
        'mot_job.max' => 'pekerjaan ibu maksimal 255 karakter',
        
        'mot_income.max' => 'penghasilan ibu maksimal 255 karakter',

        'mot_phone.numeric' => 'nomor telepon ibu harus menggunakan angka',
        'mot_phone.digits_between' => 'nomor telepon ibu maksimal 255 karakter',
        
        'wali_name.max' => 'nama wali maksimal 255 karakter',
        
        'wali_birthplace.max' => 'tempat lahir wali maksimal 255 karakter',
        
        'wali_latest_edu.max' => 'pendidikan terakhir wali maksimal 255 karakter',
        
        'wali_job.max' => 'pekerjaan wali maksimal 255 karakter',

        'wali_income.max' => 'penghasilan wali maksimal 255 karakter',

        'wali_phone.numeric' => 'nomor telepon wali harus menggunakan angka',
        'wali_phone.digits_between' => 'nomor telepon wali maksimal 255 karakter',

        'wali_relation.max' => 'hubungan siswa dengan wali maksimal 255 karakter',
        
        'sttb.required' => 'nomor sttb tidak boleh kosong',
        'sttb.unique' => 'nomor sttb sudah ada di database',
        'sttb.max' => 'nomor sttb maksimal 255 karakter',

        'next_stu_step.max' => 'keterangan setelah lulus maksimal 255 karakter',
        'instance.max' => 'instansi maksimal 255 karakter',
        'stu_income.max' => 'penghasilan siswa maksimal 255 karakter'
      ];
    }
}
