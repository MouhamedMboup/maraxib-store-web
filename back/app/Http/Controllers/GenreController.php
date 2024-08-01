<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Genre;
use Illuminate\Support\Facades\Validator;



class GenreController extends Controller
{

    public function addGenre()
    {

        $genre = Genre::all();
        return response()->json($genre);
    }

    public function store(Request $request)
    {
        $rules = [
            'libelle' => 'required|string|max:255',

        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $genre = Genre::create($validator->validated());

        return response()->json(['message' => 'Genre créée avec succès', 'categorie' => $genre], 201);

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $genre = Genre::find($id);

        if (!$genre) {
            return response()->json(['message' => 'Genre non trouvée'], 404);
        }

        return response()->json($genre);
    }


    public function update(Request $request, string $id)
    {

        $genre = Genre::find($id);

        if (!$genre) {
            return response()->json(['message' => 'Genre non trouvée'], 404);
        }

        $rules = [
            'libelle' => 'string|max:255',

        ];

        $validator = Validator::make($request->all(), $rules);

        if ($validator->fails()) {
            return response()->json(['error' => $validator->errors()], 400);
        }

        $genre->update($validator->validated());

        return response()->json(['message' => 'Genre mise à jour avec succès', 'categorie' => $genre]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $genre = Genre::find($id);

        if (!$genre) {
            return response()->json(['message' => 'Genre non trouvée'], 404);
        }

        $genre->delete();

        return response()->json(['message' => 'Genre supprimée avec succès']);
    }
}
