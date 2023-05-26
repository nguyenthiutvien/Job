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
        Schema::create('user__mentors', function (Blueprint $table) {
            $table->unsignedBigInteger("user_id");
            $table->unsignedBigInteger("mentor_id");
            $table->foreign("user_id")->references("user_id")->on("users")->onDelete("cascade");
            $table->foreign("mentor_id")->references("mentor_id")->on("mentors")->onDelete("cascade");
            $table->dateTime("application_date");
            $table->string("status",30);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user__mentors');
    }
};
