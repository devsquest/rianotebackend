<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'status', 'user_id'
    ];

    public function sections()
    {
        return $this->hasMany('App\Models\Section');
    }

    public function headings()
    {
        return $this->hasMany('App\Models\Heading');
    }
}
