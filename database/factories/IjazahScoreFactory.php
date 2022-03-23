<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\IjazahScore;
use Faker\Generator as Faker;

$factory->define(IjazahScore::class, function (Faker $faker) {
    return [
        'student_id' => $faker->numberBetween(1, 100),
        'rombel_category_id' => $faker->numberBetween(1, 100),
        'mapel_id' => $faker->numberBetween(1, 422),
        'avg_score' => $faker->numberBetween(70, 100),
        'exam_score' => $faker->numberBetween(70, 100),
    ];
});
