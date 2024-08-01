<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;

    protected $fillable = [
        'libelle',
        'genre_id'
    ];

    // Définir la relation avec le modèle Produit
    public function produits()
    {
        return $this->hasMany(Produit::class, 'categorie_id');
    }

    // Relation avec la table Genres
    public function genre()
    {
        return $this->belongsTo(Genre::class, 'genre_id');
    }
}
