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
        Schema::create('user__companies', function (Blueprint $table) {
            $table->unsignedBigInteger("user_id");
            $table->unsignedBigInteger("company_id");
            $table->foreign("user_id")->references("user_id")->on("users")->onDelete("cascade");
            $table->foreign("company_id")->references("company_id")->on("companies")->onDelete("cascade");
            $table->string("cv");
            $table->dateTime("application_date");
            $table->string("status");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user__companies');
    }
};
