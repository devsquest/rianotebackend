<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatementDetail extends Model
{
    use HasFactory;
    protected $fillable = ['statement_detail_id', 'title'];

    public function options()
    {
        return $this->hasMany('App\Models\Option');
    }
}
