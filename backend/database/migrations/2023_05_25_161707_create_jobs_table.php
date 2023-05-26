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
        Schema::create('jobs', function (Blueprint $table) {
            $table->bigIncrements("job_id");
            $table->unsignedBigInteger("company_id");
            $table->foreign("company_id")->references("company_id")->on("companies")->onDelete("cascade");
            $table->string("position",50);
            $table->string("salary",50);
            $table->string("requirement");
            $table->string("status",30);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jobs');
    }
};
