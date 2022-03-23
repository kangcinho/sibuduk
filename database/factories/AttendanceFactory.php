<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Attendance;
use Faker\Generator as Faker;

$factory->define(Attendance::class, function (Faker $faker) {
    return [
        'student_id' => $faker->numberBetween(1, 100),
        'rombel_category_id' => $faker->numberBetween(1, 100),
        // 'semester_id' => $faker->numberBetween(1, 6),
        // 'season_id' => $faker->numberBetween(1, 5),
        'sakit' => $faker->numberBetween(0, 10),
        'izin' => $faker->numberBetween(0, 10),
        'tanpaket' => $faker->numberBetween(0, 10),
    ];
});
