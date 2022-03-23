<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Staff;
use Faker\Generator as Faker;

$factory->define(Staff::class, function (Faker $faker) {
    static $userId = 101;

    return [
      'user_id' => $userId++,
      'nip' => $faker->numerify('##########'),
      'fullname' => $faker->name(),
      'nickname' => $faker->firstname(),
      'gender' => $faker->randomElement(['L', 'P']),
      'birthplace' => $faker->city,
      'birthdate' => $faker->date,
      'religion_id' => $faker->numberBetween(1, 6),
      'country_id' => $faker->numberBetween(1, 249),
      'position' => $faker->sentence(2)
    ];
});
