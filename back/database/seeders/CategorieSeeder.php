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
        Categorie::create(['libelle' => 'Djallabe', 'type_produit_id' => 1]);
        Categorie::create(['libelle' => 'Baye Lahat', 'type_produit_id' => 1]);
        Categorie::create(['libelle' => 'Robe', 'type_produit_id' => 2]);
        Categorie::create(['libelle' => 'Ndiaxass', 'type_produit_id' => 1]);
        Categorie::create(['libelle' => 'Echarpe', 'type_produit_id' => 2]);
        Categorie::create(['libelle' => 'Voile', 'type_produit_id' => 2]);
        Categorie::create(['libelle' => 'kourouss', 'type_produit_id' => 1]);
        Categorie::create(['libelle' => 'kourouss', 'type_produit_id' => 1]);
        Categorie::create(['libelle' => 'Accessoire homme', 'type_produit_id' => 3]);
        Categorie::create(['libelle' => 'Accessoire femme', 'type_produit_id' => 3]);
    }
}
