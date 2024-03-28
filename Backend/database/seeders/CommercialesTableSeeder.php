<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Commerciale;
class CommercialesTableSeeder extends Seeder
{

    public function run(): void
    {
        Commerciale::factory(100)->create();
    }
}
