<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Option extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'option_text', 'question_id', 'statement_detail_id'
    ];

    public function question()
    {
        return $this->belongsTo('App\Models\Question');
    }
}
