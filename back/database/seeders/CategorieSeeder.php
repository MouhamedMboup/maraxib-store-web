<?php

namespace Database\Seeders;

use App\Models\Categorie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class CategorieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Categorie::create(['libelle' => 'Djallabe', 'genre_id' => 1]);
        Categorie::create(['libelle' => 'Baye Lahat', 'genre_id' => 2]);
        Categorie::create(['libelle' => 'Robe', 'genre_id' => 1]);
        Categorie::create(['libelle' => 'Accessoire', 'genre_id' => 2]);
        Categorie::create(['libelle' => 'Ndiaxass', 'genre_id' => 1]);
        Categorie::create(['libelle' => 'Echarpe', 'genre_id' => 2]);
        Categorie::create(['libelle' => 'Voile', 'genre_id' => 2]);
        Categorie::create(['libelle' => 'kourouss', 'genre_id' => 2]);
    }
}
