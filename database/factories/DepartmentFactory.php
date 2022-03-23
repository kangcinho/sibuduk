<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Department;
use Faker\Generator as Faker;

$factory->define(Department::class, function (Faker $faker) {
    return [
      'name' => $faker->unique()->sentence(4),
      'alias' => $faker->unique()->sentence(2),
      'created_at' => NOW(),
      'updated_at' => NOW(),
    ];
});
