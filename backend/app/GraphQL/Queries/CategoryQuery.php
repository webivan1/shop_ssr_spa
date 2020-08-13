<?php

declare(strict_types=1);

namespace App\GraphQL\Queries;

use Closure;
use App\Entities\Category;
use Illuminate\Support\Facades\Log;
use Rebing\GraphQL\Support\Facades\GraphQL;
use GraphQL\Type\Definition\ResolveInfo;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Query;

class CategoryQuery extends Query
{
    protected $attributes = [
        'name' => 'Category',
        'description' => 'A query'
    ];

    public function type(): Type
    {
        return GraphQL::type('CategoryDetail');
    }

    public function args(): array
    {
        return [
            'slug' => [
                'name' => 'slug',
                'type' => Type::string(),
            ],
            'id' => [
                'name' => 'id',
                'type' => Type::int()
            ]
        ];
    }

    public function resolve($root, $args, $context, ResolveInfo $resolveInfo, Closure $getSelectFields): array
    {
        $query = Category::with('seo', 'children');

        if (!empty($args['id'])) {
            $query->where('id', (int)$args['id']);
        } else if (!empty($args['slug'])) {
            $query->where('slug', 'like', $args['slug']);
        } else {
            throw new \DomainException('Undefined arguments are ID or SLUG');
        }

        return $query->first()->toArray();
    }
}
