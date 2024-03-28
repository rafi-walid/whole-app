<?php

namespace Database\Factories;

use App\Models\Lead;
use Illuminate\Database\Eloquent\Factories\Factory;

class LeadFactory extends Factory
{
    protected $model = Lead::class;

    public function definition()
    {
        
        $alphabetPart = strtoupper($this->faker->randomLetter() . $this->faker->randomLetter());

        
        $numberPart = $this->faker->randomNumber(5);

        return [
            'nom' => $this->faker->lastName,
            'prenom' => $this->faker->firstName,
            'telephone' => $this->faker->phoneNumber,
            'cin' => $alphabetPart . $numberPart, 
            'adresse' => $this->faker->address,
            'email' => $this->faker->unique()->safeEmail,
            'idCommerciale' => \App\Models\Commerciale::factory(),
            'sourcelead' => $this->faker->word,
            'svalide' => $this->faker->boolean,
            'DateCreation' => $this->faker->dateTimeBetween('-3 year', 'now'),
        ];
    }
}
