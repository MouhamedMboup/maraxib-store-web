<?php

use App\Http\Controllers\CategorieController;
use App\Http\Controllers\GenreController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProduitController;
use App\Http\Controllers\TypesProduitsController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/produitsHomme', [ProduitController::class, 'produitsHomme']);
Route::get('/produitsFemme', [ProduitController::class, 'produitsFemme']);
Route::get('/produits/{typeProduit}', [ProduitController::class, 'produits']);


Route::get('/newCollection', [ProduitController::class, 'newCollection']);



Route::get('/getProduits', [ProduitController::class, 'index']);
Route::post('/produits', [ProduitController::class, 'store']);
Route::get('/produitById/{id}', [ProduitController::class, 'show']);
Route::put('/produits/{id}', [ProduitController::class, 'update']);
Route::delete('/produits/{id}', [ProduitController::class, 'destroy']);

Route::post('/categorie', [CategorieController::class, 'addCategorie']);
Route::post('/genre', [TypesProduitsController::class, 'addGenre']);

