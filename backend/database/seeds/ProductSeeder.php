<?php

use Illuminate\Database\Seeder;
use App\Entities\Category;
use App\Entities\Product;
use Illuminate\Support\Facades\DB;
use Kalnoy\Nestedset\Collection;

class ProductSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET foreign_key_checks=0");
        Product::truncate();
        DB::statement("SET foreign_key_checks=1");

        Category::query()->chunk(50, function (Collection $categories) {
            /** @var Category[] $categories */
            foreach ($categories as $category) {
                $productAmount = mt_rand(0, 15);

                if ($productAmount > 0) {
                    factory(Product::class, $productAmount)->create([
                        'category_id' => $category->id
                    ]);
                }
            }
        });
    }
}
