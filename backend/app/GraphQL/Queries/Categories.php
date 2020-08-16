<?php

namespace App\GraphQL\Queries;

use App\Entities\CategoryList;

class Categories
{
    public function __invoke($_, array $args)
    {
        return CategoryList::defaultOrder()->withDepth()->get();
    }
}
