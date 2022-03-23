<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Http\Exceptions\HttpResponseException;
use App\Rules\MapelRowExists;

class MapelRequest extends FormRequest
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
      'department_id' => 'sometimes|required|numeric',
      'name' => '',
      'alias' => '',
      'kkm' => 'numeric|digits_between:1,255',
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
          $rules['name'] = ['required', 'max:255', new MapelRowExists($this->semester_id, $this->department_id)];
          // $rules['name'] = ['required', 'max:255', "unique:mapels,name,NULL,id,department_id,{$this->department_id}"];
          $rules['alias'] = ['required', 'max:255'];
          // $rules['alias'] = ['required', 'max:255', "unique:mapels,name,NULL,id,department_id,{$this->department_id}"];
        } else if ($this->isMethod('PUT') || $this->isMethod('PATCH')) {
          $rules['name'] = ['sometimes', 'required', 'max:255'];
          $rules['alias'] = ['sometimes', 'required', 'max:255'];
          // $rules['name'] = ['sometimes', 'required', 'max:255', "unique:mapels,name,{$this->mapel->id},id,department_id,{$this->mapel->department_id}"];
          // $rules['alias'] = ['sometimes', 'required', 'max:255', "unique:mapels,name,{$this->mapel->id},id,department_id,{$this->mapel->department_id}"];
        }

        return $rules;
    }

    public function messages() {
      return [
        'department_id.required' => 'jurusan tidak boleh kosong',
        'department_id.numeric' => 'data input jurusan tidak sesuai',
        'name.required' => 'nama mata pelajaran tidak boleh kosong',
        'name.unique' => 'nama mata pelajaran sudah ada di jurusan yang dipilih',
        'name.max' => 'nama mata pelajaran maksimal 255 karakter',
        'alias.required' => 'nama alias mata pelajaran tidak boleh kosong',
        'alias.unique' => 'nama alias mata pelajaran sudah ada di jurusan yang dipilih',
        'alias.max' => 'nama alias mata pelajaran maksimal 255 karakter',
        'kkm.numeric' => 'kkm harus menggunakan angka',
        'kkm.digits_between' => 'kkm maksimal 255 karakter',
      ];
    }
}
