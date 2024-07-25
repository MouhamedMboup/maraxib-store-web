<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    protected $fillable = ['libelle', 'genre_id'];

    // Définir la relation avec le modèle Produit
    public function produits()
    {
        return $this->hasMany(Produit::class);
    }
}
