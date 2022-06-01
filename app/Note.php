<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Note extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name'
    ];

    public function sections()
    {
        return $this->hasMany('App\Section');
    }

    public function headings()
    {
        return $this->hasMany('App\Heading');
    }
}
