<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Subscription;

class ActiveSubscription extends Model
{
    use HasFactory;

    protected $fillable = ["subscription_id", "user_id", "price", "duration", "status", "start", "end"];

    public function subscription()
    {
        return $this->belongsTo(Subscription::class);
    }
}
