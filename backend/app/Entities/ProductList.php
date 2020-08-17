<?php

namespace App\Entities;

use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Expression;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Support\Facades\Log;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class ProductList extends Product
{
    protected $fillable = [
        'category_id', 'heading', 'slug', 'quantity', 'price', 'price_old'
    ];

    public function getListBuilder($root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo): Builder
    {
        /** @var Category $category */
        $category = Category::where('id', (int)$args['categoryId'])->first();

        /** @var Builder $query */
        $query = Product::from('products as t');
        $query->select(['t.*', new Expression('COUNT(DISTINCT(c.id)) as categories')]);

        empty($category) ?: $query->join('categories as c', function (JoinClause $join) use ($category) {
            $join->on('c.id', '=', 't.category_id');

            if ($category) {
                $join->where('c._lft', '>=', $category->getLft());
                $join->where('c._rgt', '<=', $category->getRgt());
            } else {
                $join->on('c.id', '=', 't.category_id');
            }
        });

        $query->where('t.quantity', '>', 0);

        $query->groupBy(['t.id']);

        // filters
        empty($args['priceFrom']) ?: $query->where('t.price', '>=', $args['priceFrom']);
        empty($args['priceTo']) ?: $query->where('t.price', '<=', $args['priceTo']);
        empty($args['search']) ?: $query->where('t.heading', 'like', "%{$args['search']}%");

        Log::error($category->getLft() . '-' . $category->getRgt());

        return $query;
    }
}
