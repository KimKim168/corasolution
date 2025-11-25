<?php

use App\Http\Controllers\BuddhistFrontPageController;
use Illuminate\Support\Facades\Route;

Route::get('/', [BuddhistFrontPageController::class, 'homepage']);
Route::get('/products', [BuddhistFrontPageController::class, 'products']);
Route::get('/services', [BuddhistFrontPageController::class, 'services']);
Route::get('/contact', [BuddhistFrontPageController::class, 'contact']);
Route::get('/our_blogs', [BuddhistFrontPageController::class, 'our_blogs']);
Route::get('/our_blog/{id}', [BuddhistFrontPageController::class, 'our_blog']);
Route::get('/about', [BuddhistFrontPageController::class, 'about']);
Route::get('/projects', [BuddhistFrontPageController::class, 'projects']);
Route::get('/detail/{id}', [BuddhistFrontPageController::class, 'detail']);