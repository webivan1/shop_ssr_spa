<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use App\Entities\Category;
use Rebing\GraphQL\Support\Type as GraphQLType;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;

class CategoryListType extends GraphQLType
{
    protected $attributes = [
        'name' => 'CategoryList',
        'description' => 'List of categories',
        'model' => Category::class
    ];

    public function fields(): array
    {
        return [
            'id' => [
                'type' => Type::nonNull(Type::int())
            ],
            'heading' => [
                'type' => Type::nonNull(Type::string())
            ],
            'slug' => [
                'type' => Type::nonNull(Type::string())
            ],
            '_lft' => [
                'type' => Type::nonNull(Type::int())
            ],
            '_rgt' => [
                'type' => Type::nonNull(Type::int())
            ],
            'parent_id' => [
                'type' => Type::int()
            ],
            'depth' => [
                'type' => Type::int()
            ]
        ];
    }
}
