<?php

namespace Database\Factories;

use App\Models\Opportunity;
use App\Models\Commerciale;
use App\Models\Lead;
use Illuminate\Database\Eloquent\Factories\Factory;

class OpportunityFactory extends Factory
{
    protected $model = Opportunity::class;

    public function definition()
    {
        return [
            'dateconvertir' => $this->faker->dateTimeBetween('-3 year', 'now'),
            'idCommerciale' => Commerciale::factory(), 
            'idLead' => Lead::factory(),
        ];
    }
}
