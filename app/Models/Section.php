<?php

namespace App\Models;

use Laravel\Sanctum\HasApiTokens;
use Illuminate\Database\Eloquent\Model;
use Kalnoy\Nestedset\NodeTrait;


class Section extends Model
{
    use HasApiTokens;

    protected $guarded = [];

    public function children(){
        return $this->hasMany( 'App\Section', 'parent', 'id' );
    }

    public function parent(){
        return $this->hasOne( 'App\Section', 'id', 'parent' );
    }

    public function questions(){
        return $this->hasMany('App\Question');
    }

    public function note(){
        return $this->belongsTo('App\Note');
    }
}
