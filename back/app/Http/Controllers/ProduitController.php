<?php

namespace App\Http\Controllers;

use App\Models\Genre;
use Illuminate\Http\Request;
use App\Models\Produit;
use App\Models\TypesProduits;
use Illuminate\Support\Facades\Validator;

class ProduitController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $produits = Produit::all();
        return response()->json($produits);
    }

    public function produits($typeProduit)
    {
        $genreProduit = TypesProduits::where('libelle', $typeProduit)->first();

        if(!$genreProduit){
        return response()->json(['error'=> "Ce genre n'existe pas "]);
        }

        $categories = $genreProduit->categories()->whereHas('produits')->with('produits')->get();

        if($categories->isEmpty()){
            return response()->json(['message'=> "Il n'y a pas de produits de type $typeProduit !"]);
        }
        return response()->json($categories);
    }


    public function newCollection()
{

    // $produitsHomme = Produit::where('genre', 'homme')->get();
    // $produitsFemme = Produit::where('genre', 'femme')->get();

    // return response()->json([
    //     'homme' => $produitsHomme,
    //     'femme' => $produitsFemme
    // ]);

    $produits = Produit::all();
    return response()->json($produits);
}


    public function store(Request $request)
    {

    $rules = [
        'libelle' => 'required|string',
        'prix' => 'required|numeric',
        'image' => 'required|string',
        'lien_whatsapp' => 'required|string',
        'categorie_id' => 'required|integer|exists:categories,id'
    ];

    $validator = Validator::make($request->all(), $rules);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    $produit = Produit::create($validator->validated());

    return response()->json(['message' => 'Produit créé avec succès', 'produit' => $produit], 201);
    }

    public function show(string $id)
    {
            $produit = Produit::find($id);
        if (!$produit) {
            return response()->json(['message' => 'Produit non trouvé'], 404);
        }
        return response()->json($produit);
    }


    public function update(Request $request, $id)
        {
    $produit = Produit::find($id);
    if (!$produit) {
        return response()->json(['message' => 'Produit non trouvé'], 404);
    }

    $rules = [
        'libelle' => 'string',
        'prix' => 'numeric',
        'image' => 'string',
        'lien_whatsapp' => 'string',
        'categorie_id' => 'integer|exists:categories,id'
    ];

    $validator = Validator::make($request->all(), $rules);

    if ($validator->fails()) {
        return response()->json(['error' => $validator->errors()], 400);
    }

    $produit->update($validator->validated());

    return response()->json(['message' => 'Produit mis à jour avec succès', 'produit' => $produit]);
    }

    /**
     * Remove the specified resource from storage.
     */public function destroy($id)
    {
    $produit = Produit::find($id);
    if (!$produit) {
        return response()->json(['message' => 'Produit non trouvé'], 404);
    }

    $produit->delete();
    return response()->json(['message' => 'Produit supprimé avec succès']);
    }

}
