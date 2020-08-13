<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Entities\Product;
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

$factory->define(Product::class, function (Faker $faker) {
    return [
        'heading' => $faker->text(150),
        'slug' => $faker->slug,
        'title' => $faker->text(200),
        'description' => $faker->text(255),
        'keywords' => $faker->text(255),
        'content' => $faker->realText(mt_rand(300, 2000)),
        'quantity' => mt_rand(1, 1000),
        'price' => $price = $faker->numberBetween(10, 300),
        'price_old' => mt_rand(0, 1) > 0 ? $price + 20 : null
    ];
});
