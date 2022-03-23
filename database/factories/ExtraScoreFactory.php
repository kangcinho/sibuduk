<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\ExtraScore;
use Faker\Generator as Faker;

$factory->define(ExtraScore::class, function (Faker $faker) {
    return [
        'extra_id' => $faker->numberBetween(1, 14),
        'student_id' => $faker->numberBetween(1, 100),
        'rombel_category_id' => $faker->numberBetween(1, 100),
        // 'season_id' => $faker->numberBetween(1, 5),
        // 'semester_id' => $faker->numberBetween(1, 12),
        'score' => $faker->numberBetween(70, 100),
    ];
});
