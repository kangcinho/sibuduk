<?php

namespace App\Rules;

use Illuminate\Contracts\Validation\Rule;
use App\Model\IjazahScore;

class IjazahScoreRowExists implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    protected $rombelCategoryId;
    protected $studentId;
    protected $mapelId;

    public function __construct($rombelCategoryId, $studentId, $mapelId)
    {
        $this->rombelCategoryId = $rombelCategoryId;
        $this->studentId = $studentId;
        $this->mapelId = $mapelId;
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
        $isExists = IjazahScore::where('rombel_category_id', $this->rombelCategoryId)
          ->where('student_id', $this->studentId)
          ->where('mapel_id', $this->mapelId)
          ->exists();

        return !$isExists;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'nilai ijazah sudah ada pada siswa dan mata pelajaran yang dipilih';
    }
}
