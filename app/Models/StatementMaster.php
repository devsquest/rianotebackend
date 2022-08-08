<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class StatementMaster extends Model
{
    use HasFactory;
    protected $fillable = ['statement_text', 'short_text', 'question_id'];
}
