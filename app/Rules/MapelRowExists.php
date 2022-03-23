<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Model\Mapel;

class MapelRowExists implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */

    protected $semesterId;
    protected $departmentId;
    
    public function __construct($semesterId, $departmentId)
    {
        $this->semesterId = $semesterId;
        $this->departmentId = $departmentId;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $isExists = Mapel::where('semester_id', $this->semesterId)
          ->where('department_id', $this->departmentId)
          ->exists();
        
        return $isExists ? false : true;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'mata pelajaran sudah ada pada jurusan dan semester yang dipilih';
    }
}
