<?php

use App\Http\Controllers\Api\AdminContactController;
use App\Http\Controllers\Api\ContentController;
use App\Http\Controllers\Api\MessageController;
use Illuminate\Support\Facades\Route;

Route::get('/content', [ContentController::class, 'index']);
Route::get('/content/{pageKey}', [ContentController::class, 'show']);
Route::post('/content/{pageKey}', [ContentController::class, 'store']);

Route::get('/messages', [MessageController::class, 'index']);
Route::post('/messages', [MessageController::class, 'store']);
Route::put('/messages/{id}/read', [MessageController::class, 'markAsRead']);

Route::post('/contact', [AdminContactController::class, 'store']);
Route::get('/admin/contacts', [AdminContactController::class, 'index']);
Route::patch('/admin/contacts/{id}/read', [AdminContactController::class, 'markAsRead']);
