<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Sesor/Index');
})->name('sesor');
Route::get('/about_us', function () {
    return Inertia::render('Sesor/AboutUs/Index');
})->name('about_us');
Route::get('/service', function () {
    return Inertia::render('Sesor/Service/Index');
})->name('service');

