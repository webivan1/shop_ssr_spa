<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entities\Seo;
use Faker\Generator as Faker;
use Illuminate\Support\Str;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Seo::class, function (Faker $faker) {
    return [
        'title' => $faker->text(150),
        'description' => $faker->text(255),
        'keywords' => $faker->text(350)
    ];
});
