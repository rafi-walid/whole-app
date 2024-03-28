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
        Schema::create('commerciales', function (Blueprint $table) {
            $table->id();
            $table->string('NomCommerciale');
            $table->string('prenonCommerciale');
            $table->boolean('IsActive');
            $table->string('CodeCommerciale');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('commerciales');
    }
};
