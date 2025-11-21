<?php

use App\Http\Controllers\BuddhistFrontPageController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [BuddhistFrontPageController::class, 'homepage']);
Route::get('/about', [BuddhistFrontPageController::class, 'about']);
Route::get('/products', [BuddhistFrontPageController::class, 'products']);
Route::get('/services', [BuddhistFrontPageController::class, 'services']);
Route::get('/contact', [BuddhistFrontPageController::class, 'contact']);
Route::get('/news', [BuddhistFrontPageController::class, 'news']);
Route::get('/posts/{id}', [BuddhistFrontPageController::class, 'post_show']);
Route::get('/about', [BuddhistFrontPageController::class, 'about']);
Route::get('/projects', [BuddhistFrontPageController::class, 'projects']);
Route::get('/detail', [BuddhistFrontPageController::class, 'detail']);

// Route::get('/news', function () {
//     return Inertia::render('Buddhist/News/Index');
// });

// Route::get('/detail/{id}', function ($id) {
//     return Inertia::render('Buddhist/Detail/Index');
// });

// Route::get('/khmer_legends', function () {
//     return Inertia::render('Buddhist/KhmerLegend/Index');
// });

// Route::get('/library', function () {
//     return Inertia::render('Buddhist/Library/Index');
// });

// Route::get('/magazine', function () {
//     return Inertia::render('Buddhist/Magazine/Index');
// });

// Route::get('/buddhist_time', function () {
//     return Inertia::render('Buddhist/BuddhistTime/Index');
// });