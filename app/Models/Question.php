<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'question_text', 'question_type',
    ];

    public function options()
    {
        return $this->hasMany('App\Models\Option');
    }

    public function section(){
        return $this->belongsTo('App\Models\Section');
    }
}
