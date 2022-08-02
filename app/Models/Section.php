<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;


class Section extends Model
{
    use HasApiTokens;

    protected $fillable = ['parent_id', 'name', 'note_id', 'type'];
    protected $guarded = [];

    public function children()
    {
        return $this->hasMany('App\Models\Section', 'parent', 'id');
    }

    public function parent()
    {
        return $this->hasOne('App\Models\Section', 'id', 'parent');
    }

    public function questions()
    {
        return $this->hasMany('App\Models\Question');
    }

    public function note()
    {
        return $this->belongsTo('App\Models\Note');
    }
}
