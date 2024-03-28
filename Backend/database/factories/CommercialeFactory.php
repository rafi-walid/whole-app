<?php

namespace Database\Factories;

use App\Models\Commerciale;
use Illuminate\Database\Eloquent\Factories\Factory;

class CommercialeFactory extends Factory
{
    protected $model = Commerciale::class;

    public function definition()
    {
        return [
            'NomCommerciale' => $this->faker->lastName,
            'prenonCommerciale' => $this->faker->firstName,
            'IsActive' => $this->faker->boolean,
            'CodeCommerciale' => $this->faker->unique()->regexify('[A-Za-z0-9]{10}')
        ];
    }
}