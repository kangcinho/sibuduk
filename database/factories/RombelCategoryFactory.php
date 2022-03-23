<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\RombelCategory;
use Faker\Generator as Faker;

$factory->define(RombelCategory::class, function (Faker $faker) {
    return [
        'department_id' => $faker->numberBetween(1, 100),
        'season_id' => $faker->numberBetween(1, 5),
        'semester_id' => $faker->numberBetween(1, 12),
        'name' => $faker->state,
        'description' => $faker->paragraph(2),
    ];
});
