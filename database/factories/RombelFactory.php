<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Rombel;
use Faker\Generator as Faker;

$factory->define(Rombel::class, function (Faker $faker) {
    return [
        'rombel_category_id' => $faker->numberBetween(1, 3),
        'student_id' => $faker->numberBetween(1, 100)
    ];
});
