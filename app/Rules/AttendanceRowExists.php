<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Model\Attendance;

class AttendanceRowExists implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    protected $studentId;
    protected $rombelCategoryId;
    // protected $seasonId;
    // protected $semesterId;
    
    public function __construct($studentId, $rombelCategoryId)
    {
        $this->studentId = $studentId;
        $this->rombelCategoryId = $rombelCategoryId;
        // $this->seasonId = $seasonId;
        // $this->semesterId = $semesterId;
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
        $isExists = Attendance::where('student_id', $this->studentId)
          ->where('rombel_category_id', $this->rombelCategoryId)
          // ->where('season_id', $this->seasonId)
          // ->where('semester_id', $this->semesterId)
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
        return 'kehadiran siswa sudah ada di kategori rombel yang dipilih';
    }
}
