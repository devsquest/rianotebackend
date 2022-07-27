<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Heading extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'note_id', 'heading_text', 'heading_content', 'user_id'
    ];

    /**
     * @var mixed
     */
    private $heading_text;

    /**
     * @var mixed
     */
    private $heading_content;

    public function note()
    {
        return $this->belongsTo('App\Note');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
