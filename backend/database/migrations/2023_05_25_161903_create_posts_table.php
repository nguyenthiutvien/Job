<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->bigIncrements("post_id");
            $table->unsignedBigInteger("mentor_id");
            $table->foreign("mentor_id")->references("mentor_id")->on("mentors")->onDelete("cascade");
            $table->string("title");
            $table->string("content");
            $table->dateTime("time");
            $table->dateTime("application_date");
            $table->dateTime("closing_time");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
