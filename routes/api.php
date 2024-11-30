<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CategorieController; // Import du contrôleur
use App\Http\Controllers\ScategorieController;
use App\Http\Controllers\ArticleController;
Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');


Route::middleware('api')->group(function () {
    Route::resource('categories', CategorieController::class);
    });
Route::get("/categories",[CategorieController::class,"index"]);
Route::post("/categories",[CategorieController::class,"store"]);
Route::get("/categories/{id}",[CategorieController::class,"show"]);
Route::delete("/categories/{id}",[CategorieController::class,"destroy"]);
Route::put("/categories/{id}",[CategorieController::class,"update"]);


Route::middleware('api')->group(function () {
    Route::resource('scategories', ScategorieController::class);
    });
 Route::get("/scategories",[ScategorieController::class,"index"]);
Route::post("/scategories",[ScategorieController::class,"store"]);
Route::get("/scategories/{id}",[ScategorieController::class,"show"]);
Route::delete("/scategories/{id}",[ScategorieController::class,"destroy"]);
Route::put("/scategories/{id}",[ScategorieController::class,"update"]);

 Route::get('/scat/{idcat}', [ScategorieController::class,'showSCategorieByCAT']);
 
 Route::middleware('api')->group(function () {
    Route::resource('articles', ArticleController::class);
    });
    Route::get("/articles",[ArticleController::class,"index"]);
Route::post("/articles",[ArticleController::class,"store"]);
Route::get("/articles/{id}",[ArticleController::class,"show"]);
Route::delete("/articles/{id}",[ArticleController::class,"destroy"]);
Route::put("/articles/{id}",[ArticleController::class,"update"]);

Route::get('/articles/art/articlespaginate', [ArticleController::class,
'articlesPaginate']);
Route::get('/articles/art/paginationPaginate', [ArticleController::class, 'paginationPaginate']);