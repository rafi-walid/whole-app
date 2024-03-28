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
        Schema::create('opportunities', function (Blueprint $table) {
            $table->id();
            $table->date('dateconvertir');
            $table->unsignedBigInteger('idCommerciale');
            $table->foreign('idCommerciale')->references('id')->on('commerciales');
            $table->unsignedBigInteger('idLead');
            $table->foreign('idLead')->references('id')->on('leads');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('opportunities');
    }
};
