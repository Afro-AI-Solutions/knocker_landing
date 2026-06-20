<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Content extends Model
{
    public const UPDATED_AT = 'updated_at';

    public const CREATED_AT = null;

    protected $table = 'content';

    protected $fillable = [
        'page_key',
        'data',
    ];

    protected function casts(): array
    {
        return [
            'data' => 'array',
            'updated_at' => 'datetime',
        ];
    }
}
