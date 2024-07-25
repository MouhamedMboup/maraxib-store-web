<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categorie;

class CategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        Categorie::create(['libelle' => 'Homme', 'genre_id' => 1]);
        Categorie::create(['libelle' => 'Femme', 'genre_id' => 2]);
    }
}
