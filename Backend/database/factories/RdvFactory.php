<?php

namespace Database\Factories;

use App\Models\Rdv;
use Illuminate\Database\Eloquent\Factories\Factory;

class RdvFactory extends Factory
{
    protected $model = Rdv::class;

    public function definition()
    {
        return [
            'DateCreation' => $this->faker->dateTimeBetween('-3 year', 'now'),
            'DateHonore' => null, 
            'Idleads' => \App\Models\Lead::factory(),
            'idCommerciale' => \App\Models\Commerciale::factory(),
            'MotifHonoration' => null, 
            'DateAnnulation' => $this->faker->optional()->dateTimeBetween('now', '+1 year'),
            'MotifAnnulation' => $this->faker->optional()->sentence(),
        ];
    }
}
