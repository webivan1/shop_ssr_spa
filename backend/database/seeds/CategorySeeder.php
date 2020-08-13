<?php

use Illuminate\Database\Seeder;
use App\Entities\Category;
use Illuminate\Support\Facades\DB;
use App\Entities\Seo;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::statement("SET foreign_key_checks=0");
        Category::truncate();
        Seo::truncate();
        DB::statement("SET foreign_key_checks=1");

        $this->createCategories(30);
    }

    public function createCategories(int $amount, int $depth = 0, ?Category $parent = null)
    {
        factory(Category::class, $amount)->make()->map(function (Category $category) use ($parent, $depth) {
            $category->save();

            factory(Seo::class, 1)->create([
                'source' => 'categories',
                'source_id' => $category->id
            ]);

            if ($parent) {
                $category->appendToNode($parent)->save();
            }

            $children = mt_rand(0, 7);

            $depth += 1;

            /** @var Category|null $result */
            if ($children > 0 && $depth < 3) {
                $this->createCategories($children, $depth, $category);
            }
        });
    }
}
