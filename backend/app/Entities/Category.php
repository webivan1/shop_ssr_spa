<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Kalnoy\Nestedset\NodeTrait;

/**
 * @property int $id
 * @property string $heading
 * @property string $slug
 * @property string|null $content
 * @property int $sortable
 * @property-read int $depth
 *
 * @property-read Seo|null $seo
 * @property-read Category|null $parent
 */
class Category extends Model
{
    use NodeTrait;

    public $table = 'categories';

    protected $fillable = [
        'id', 'heading', 'slug', 'content', 'sortable', '_rgt', '_lft', 'parent_id'
    ];

    public function seo(): HasOne
    {
        return $this->hasOne(Seo::class, 'source_id', 'id')->where('source', 'categories');
    }

    public function parents(): array
    {
        return $this->parent ? $this->parent->allParents() : [];
    }

    /**
     * @return Category[]
     */
    public function allParents(): array
    {
        return array_merge($this->parents(), $this->parent ? [$this->parent] : []);
    }
}
