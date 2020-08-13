<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use App\Entities\Category;
use Rebing\GraphQL\Support\Type as GraphQLType;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;

class CategoryItemType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Category',
        'description' => 'Category',
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
            'content' => [
                'type' => Type::string()
            ],
            'seo' => [
                'type' => GraphQL::type('Seo')
            ],
            'children' => [
                'type' => Type::listOf(GraphQL::type('CategoryDetail'))
            ]
        ];
    }
}
