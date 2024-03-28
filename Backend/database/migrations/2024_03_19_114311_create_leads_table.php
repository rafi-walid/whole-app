<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('leads', function (Blueprint $table) {
            $table->id();
            $table->string('nom');
            $table->string('prenom');
            $table->string('telephone');
            $table->string('cin');
            $table->string('adresse');
            $table->string('email');
            $table->unsignedBigInteger('idCommerciale');
            $table->foreign('idCommerciale')->references('id')->on('commerciales');
            $table->string('sourcelead');
            $table->boolean('svalide');
            $table->Date('DateCreation');
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('leads');
    }
};
