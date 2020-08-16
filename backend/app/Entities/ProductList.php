<?php

namespace App\Entities;

use GraphQL\Type\Definition\ResolveInfo;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Expression;
use Illuminate\Database\Query\JoinClause;
use Nuwave\Lighthouse\Support\Contracts\GraphQLContext;

class ProductList extends Product
{
    protected $fillable = [
        'category_id', 'heading', 'slug', 'quantity', 'price', 'price_old'
    ];

    public function getListBuilder($root, array $args, GraphQLContext $context, ResolveInfo $resolveInfo): Builder
    {
        $query = Product::from('products as t');
        $query->select(['t.*', new Expression('COUNT(DISTINCT(c.id)) as categories')]);
        $query->with('category');
        $query->join('categories as parent', 'parent.id', '=', 't.category_id');
        $query->join('categories as c', function (JoinClause $join) {
            $join->on('parent._lft', '<=', 'c._lft');
            $join->on('parent._rgt', '>=', 'c._rgt');
        });

        $query->where('t.category_id', $args['categoryId']);
        $query->where('t.quantity', '>', 0);

        $query->groupBy(['t.id', 'parent.id']);

        // filters
        empty($args['priceFrom']) ?: $query->where('t.price', '>=', $args['priceFrom']);
        empty($args['priceTo']) ?: $query->where('t.price', '<=', $args['priceTo']);
        empty($args['search']) ?: $query->where('t.heading', 'like', "%{$args['search']}%");

        return $query;
    }
}
