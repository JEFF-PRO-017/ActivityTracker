<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ActivityController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Routes pour les activités
Route::middleware('api')->group(function () {
    // Endpoint pour créer une activité
    Route::post('/activities', [ActivityController::class, 'store'])->name('activities.store');

    // Endpoint pour mettre à jour une activité
    Route::put('/activities/{id}', [ActivityController::class, 'update'])->name('activities.update');

    // // Endpoint pour lister toutes les activités
    // Route::get('/activities', [ActivityController::class, 'index'])->name('activities.index');

    // // Endpoint pour récupérer les détails d'une activité spécifique
    // Route::get('/activities/{id}', [ActivityController::class, 'show'])->name('activities.show');

    // Endpoint pour supprimer une activité
    Route::delete('/activities/{id}', [ActivityController::class, 'destroy'])->name('activities.destroy');
});
