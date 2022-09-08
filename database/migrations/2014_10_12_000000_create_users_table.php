<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateUsersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->boolean('status')->nullable()->default(1);
            $table->boolean('isAdmin')->nullable()->default(0);
            $table->string('signature')->nullable();
            $table->string('profile_picture')->nullable();
            $table->string('terminology_client')->nullable();
            $table->string('terminology_psycho')->nullable();
            $table->string('terminology_behavior')->nullable();
            $table->string('opening_heading')->nullable();
            $table->string('section_breaks')->nullable();
            $table->string('spacing_options')->nullable();
            $table->string('font_style')->nullable();
            $table->string('font_size')->nullable();
            $table->string('date_format')->nullable();
            $table->string('color_opacity')->nullable();
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
        Schema::dropIfExists('users');
    }
}
