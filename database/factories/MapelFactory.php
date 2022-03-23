<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Mapel;
use Faker\Generator as Faker;

$factory->define(Mapel::class, function (Faker $faker) {
    return [
        'season_id' => $faker->numberBetween(1, 5),
        'semester_id' => $faker->numberBetween(1, 12),
        'department_id' => $faker->numberBetween(1, 100),
        'mapel_category_id' => $faker->numberBetween(1, 3),
        'name' => $faker->sentence(2),
        'alias' => $faker->stateAbbr,
        'kkm' => $faker->numberBetween(65, 80),
    ];
});
