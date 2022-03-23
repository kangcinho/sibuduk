<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model\Student;
use Faker\Generator as Faker;

$factory->define(Student::class, function (Faker $faker) {
    static $userId = 1;

    return [
      'user_id' => $userId++,
      'nis' => $faker->numerify('####'),
      'nisn' => $faker->numerify('##########'),
      'fullname' => $faker->name(),
      'nickname' => $faker->firstname(),
      'gender' => $faker->randomElement(['L', 'P']),
      'birthplace' => $faker->city,
      'birthdate' => $faker->date,
      'stu_religion_id' => $faker->numberBetween(1, 6),
      'stu_country_id' => $faker->numberBetween(1, 249),
      'sau_kandung' => $faker->numberBetween(1, 4),
      'sau_tiri' => $faker->numberBetween(1, 4),
      'sau_angkat' => $faker->numberBetween(1, 4),
      'status_in_fam' => $faker->randomElement(['Kandung', 'Tiri', 'Angkat']),
      'daily_lang' => $faker->languageCode,
      'stu_address' => $faker->address,
      'stu_phone' => $faker->e164PhoneNumber,
      'live_with' => $faker->randomElement(['Orang Tua', 'Saudara', 'Kakek / Nenek']),
      'sch_distance' => $faker->numberBetween(1, 20),
      'blood_type' => $faker->randomElement(['A', 'B', 'AB', 'O']),
      'disease' => $faker->sentence(4),
      'disability' => $faker->sentence(4),
      'height' => $faker->numberBetween(140, 200),
      'weight' => $faker->numberBetween(40, 150),
      'grad_from_sch' => $faker->company,
      'pre_grad_date' => $faker->date,
      'pre_entry_date' => $faker->date,
      'pre_sttb' => $faker->swiftBicNumber,
      'study_period' => $faker->numberBetween(1, 3),
      'is_trf' => $faker->numberBetween(0, 1),
      'trf_from' => $faker->company,
      'trf_reason' => $faker->text,
      'entry_date' => $faker->date,
      'entry_to' => $faker->company,
      'fat_name' => $faker->name('male'),
      'fat_birthplace' => $faker->city,
      'fat_birthdate' => $faker->date,
      'is_step_fat' => $faker->numberBetween(0, 1),
      'fat_religion_id' => $faker->numberBetween(1, 6),
      'fat_country_id' => $faker->numberBetween(1, 249),
      'fat_latest_edu' => $faker->randomElement(['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'S1', 'S2', 'S3']),
      'fat_job' => $faker->jobTitle,
      'fat_income' => $faker->numerify('########'),
      'fat_address' => $faker->address,
      'fat_phone' => $faker->e164PhoneNumber,
      'is_fat_alive' => $faker->numberBetween(0, 1),
      'fat_internal_note' => $faker->text,
      'mot_name' => $faker->name('female'),
      'mot_birthplace' => $faker->city,
      'mot_birthdate' => $faker->date,
      'is_step_mot' => $faker->numberBetween(0, 1),
      'mot_religion_id' => $faker->numberBetween(1, 6),
      'mot_country_id' => $faker->numberBetween(1, 149),
      'mot_latest_edu' => $faker->randomElement(['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'S1', 'S2', 'S3']),
      'mot_job' => $faker->jobTitle,
      'mot_income' => $faker->numerify('########'),
      'mot_address' => $faker->address,
      'mot_phone' => $faker->e164PhoneNumber,
      'is_mot_alive' => $faker->numberBetween(0, 1),
      'mot_internal_note' => $faker->text,
      'wali_name' => $faker->name,
      'wali_birthplace' => $faker->city,
      'wali_birthdate' => $faker->date,
      'wali_religion_id' => $faker->numberBetween(1, 6),
      'wali_country_id' => $faker->numberBetween(1, 149),
      'wali_latest_edu' => $faker->randomElement(['Tidak Sekolah', 'SD', 'SMP', 'SMA', 'S1', 'S2', 'S3']),
      'wali_job' => $faker->jobTitle,
      'wali_income' => $faker->numerify('########'),
      'wali_address' => $faker->address,
      'wali_phone' => $faker->e164PhoneNumber,
      'is_wali_alive' => $faker->numberBetween(0, 1),
      'wali_internal_note' => $faker->text,
      'wali_relation' => $faker->sentence(3),
      'interest_art' => $faker->text,
      'interest_sport' => $faker->text,
      'interest_social' => $faker->text,
      'interest_other' => $faker->text,
      'scholarship' => $faker->text,
      'leave_date' => $faker->date,
      'leave_reason' => $faker->text,
      'grad_date' => $faker->date,
      'sttb' => $faker->swiftBicNumber,
      'next_stu_step' => $faker->sentence(2),
      'next_act_date' => $faker->date,
      'instance' => $faker->company,
      'stu_income' => $faker->numerify('########'),
      'created_at' => NOW(),
      'updated_at' => NOW(),
    ];
});
