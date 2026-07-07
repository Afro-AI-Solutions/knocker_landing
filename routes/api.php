<?php

use App\Http\Controllers\Api\AdminContactController;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ContentController;
use App\Http\Controllers\Api\MessageController;
use App\Http\Middleware\AdminTokenAuth;
use Illuminate\Support\Facades\Route;

// Public — read-only content
Route::get('/content', [ContentController::class, 'index']);
Route::get('/content/{pageKey}', [ContentController::class, 'show']);

// Public — contact form submission
Route::post('/messages', [MessageController::class, 'store']);
Route::post('/contact', [AdminContactController::class, 'store']);

// Auth
Route::post('/auth/login', [AuthController::class, 'login'])->middleware('throttle:5,1');
Route::post('/auth/logout', [AuthController::class, 'logout']);
Route::get('/auth/verify', [AuthController::class, 'verify']);

// Protected — requires admin token
Route::middleware(AdminTokenAuth::class)->group(function () {
    Route::post('/content/{pageKey}', [ContentController::class, 'store']);

    Route::get('/messages', [MessageController::class, 'index']);
    Route::put('/messages/{id}/read', [MessageController::class, 'markAsRead']);

    Route::get('/admin/contacts', [AdminContactController::class, 'index']);
    Route::patch('/admin/contacts/{id}/read', [AdminContactController::class, 'markAsRead']);
});
