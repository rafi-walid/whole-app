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
        Schema::create('rdv', function (Blueprint $table) {
            $table->id();
            $table->dateTime('DateCreation');
            $table->dateTime('DateHonore')->nullable();
            $table->unsignedBigInteger('idLeads');
            $table->foreign('idLeads')->references('id')->on('leads');
            $table->unsignedBigInteger('idCommerciale');
            $table->foreign('idCommerciale')->references('id')->on('commerciales');
            $table->string('MotifHonoration')->nullable();
            $table->dateTime('DateAnnulation')->nullable();
            $table->string('MotifAnnulation')->nullable();
            
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('rdv');
    }
};
