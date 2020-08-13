<?php

declare(strict_types=1);

namespace App\GraphQL\Types;

use App\Entities\Category;
use App\Entities\Seo;
use Rebing\GraphQL\Support\Type as GraphQLType;
use GraphQL\Type\Definition\Type;
use Rebing\GraphQL\Support\Facades\GraphQL;

class SeoType extends GraphQLType
{
    protected $attributes = [
        'name' => 'Seo',
        'description' => 'Seo',
        'model' => Seo::class
    ];

    public function fields(): array
    {
        return [
            'title' => [
                'type' => Type::string()
            ],
            'description' => [
                'type' => Type::string()
            ],
            'keywords' => [
                'type' => Type::string()
            ],
        ];
    }
}
