<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\APIPostController;
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

// =====================================



Route::get('/posts', [APIPostController::class, 'index']);
Route::post('/posts', [APIPostController::class, 'store']);
Route::get('/posts/{id}', [APIPostController::class, 'show']);
Route::put('/posts/{id}', [APIPostController::class, 'update']);
Route::delete('/posts/{id}', [APIPostController::class, 'destroy']);
