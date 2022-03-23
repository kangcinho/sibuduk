<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Score;
use Faker\Generator as Faker;

$factory->define(Score::class, function (Faker $faker) {
    return [
      'mapel_id' => $faker->numberBetween(1, 422),
      'rombel_category_id' => $faker->numberBetween(1, 100),
      'student_id' => $faker->numberBetween(1, 100),
      // 'semester_id' => $faker->numberBetween(1, 6),
      // 'season_id' => $faker->numberBetween(1, 5),
      'pengetahuan' => $faker->numberBetween(75, 100),
      'keterampilan' => $faker->numberBetween(75, 100),
      'sikap' => $faker->numberBetween(75, 100),
    ];
});
