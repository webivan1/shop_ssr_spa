<?php

namespace App\Entities;

use Illuminate\Database\Eloquent\Model;

/**
 * @property string $title
 * @property string $description
 * @property string|null $keywords
 * @property string $source
 * @property int $source_id
 */
class Seo extends Model
{
    protected $table = 'seo';
    protected $fillable = ['title', 'description', 'keywords', 'source', 'source_id'];
}
