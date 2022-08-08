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
        'question_text', 'question_type', 'selection_type', 'section_id', 'only_show_options'
    ];

    public function options()
    {
        return $this->hasMany('App\Models\Option');
    }
    public function statementMaster()
    {
        return $this->hasMany('App\Models\StatementMaster');
    }
    public function statementDetail()
    {
        return $this->hasMany('App\Models\StatementDetail');
    }
    public function section()
    {
        return $this->belongsTo('App\Models\Section');
    }
}
