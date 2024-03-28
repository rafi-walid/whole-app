<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use  App\Http\Controllers\DataController;

Route::get('/leads', [DataController::class, 'index']);
Route::post('/leadsdata', [DataController::class, 'leadsdata']);
Route::post('/fetch-attributes', [DataController::class, 'fetchAttributes']);
Route::post('/fetch-data', [DataController::class, 'fetchData']);
