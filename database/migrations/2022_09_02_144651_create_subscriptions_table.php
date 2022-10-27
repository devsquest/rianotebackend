<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('subscriptions', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->decimal('price', 10, 1)->default(0);
            $table->unsignedInteger('duration')->nullable();
            $table->string('currency')->nullable();
            $table->string('currency_sign')->nullable();
            $table->text('description')->nullable();
            $table->string('stripe_price_id')->nullable();
            $table->boolean('status')->default(1);
            $table->string('short_name')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('subscriptions');
    }
};
