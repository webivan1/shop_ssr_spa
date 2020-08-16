<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * @property int $id
 * @property int $category_id
 * @property string $heading
 * @property string $slug
 * @property string $title
 * @property string $description
 * @property string $keywords
 * @property string $content
 * @property int $quantity
 * @property float $price
 * @property float|null $price_old
 *
 * @property-read Category $category
 */
class Product extends Model
{
    public $table = 'products';

    protected $fillable = [
        'category_id', 'heading', 'slug', 'title', 'description', 'keywords', 'content', 'quantity', 'price', 'price_old'
    ];

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
