<?php

namespace App\Entities;

class CategoryList extends Category
{
    protected $fillable = [
        'id', 'heading', 'slug', '_rgt', '_lft', 'parent_id'
    ];
}
