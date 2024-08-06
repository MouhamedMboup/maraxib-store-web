<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;

    protected $fillable = [
        'libelle',
        'type_produit_id'
    ];

    // Définir la relation avec le modèle Produit
    public function produits()
    {
        return $this->hasMany(Produit::class, 'categorie_id');
    }

    // Relation avec la table TypesProduits
    public function typeProduit()
    {
        return $this->belongsTo(TypesProduits::class, 'type_produit_id');
    }
}
