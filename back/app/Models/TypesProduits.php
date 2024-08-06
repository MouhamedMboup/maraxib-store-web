<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TypesProduits extends Model
{
    use HasFactory;

    protected $fillable = [
        'libelle',
    ];

    // Relation avec la table Categories
   public function categories()
    {
        return $this->hasMany(Categorie::class, 'type_produit_id');
    }
}
