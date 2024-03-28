<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use App\Models\Lead;
use Faker\Factory as Faker;


class LeadsTableSeeder extends Seeder
{

    public function run(): void
    {
        
        Lead::factory(100)->create();
        
    }
}
