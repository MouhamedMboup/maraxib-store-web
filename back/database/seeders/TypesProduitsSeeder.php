<?php

namespace Database\Seeders;

use App\Models\TypesProduits;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TypesProduitsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        TypesProduits::create(['libelle' => 'Homme']);
        TypesProduits::create(['libelle' => 'Femme']);
        TypesProduits::create(['libelle' => 'Accessoire']);
    }
}
