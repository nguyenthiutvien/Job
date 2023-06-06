<?php

use App\Http\Controllers\CompanyController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

// User
Route::get("/users",[UserController::class,"index"]);
Route::post("/users",[UserController::class,"store"]);
Route::get("/users/{email}/edit",[UserController::class,"edit"]);
// Route::put("/users/{email}",[UserController::class,"update"]);
Route::put("/users/{email}/confirm-email",[UserController::class,"confirmEmail"]);
Route::get("/users/{email}/confirm-code",[UserController::class,"confirmEmail"]);
// Route::get("/users/{email}/confirm-code",[UserController::class,"confirmEmail"]);
Route::put("/users/{email}/change-pass",[UserController::class,"recoverPass"]);
// Company
Route::get("/company",[CompanyController::class,"index"]);
Route::post("/company",[CompanyController::class,"store"]);