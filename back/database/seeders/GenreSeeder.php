<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Genre;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Genre::create(['libelle' => 'Homme', 'genre_id' => 1]);
        Genre::create(['libelle' => 'Femme', 'genre_id' => 2]);
    }
}
