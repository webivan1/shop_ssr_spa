<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use App\Entities\Category;
use Closure;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;

class CategoryListQuery extends Query
{
    protected $attributes = [
        'name' => 'categoryList',
        'description' => 'A query'
    ];

    public function type(): Type
    {
        return Type::listOf(GraphQL::type('Categories'));
    }

    public function args(): array
    {
        return [];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields): array
    {
        return Category::withDepth()
            ->defaultOrder()
            ->get()
            ->toArray();
    }
}
