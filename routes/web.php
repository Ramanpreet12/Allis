<?php

use App\Http\Controllers\HomeController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', HomeController::class);

// Auth pages are shared by every workspace.
Route::inertia('/login', 'Auth/Login')->name('login');
Route::inertia('/forgot-password', 'Auth/ForgotPassword')->name('password.request');
Route::get('/check-email', fn (Request $request) => Inertia::render('Auth/CheckEmail', [
    'email' => $request->query('email'),
]))->name('password.sent');
Route::inertia('/reset-password', 'Auth/ResetPassword')->name('password.reset');

// Landing page after login.
Route::inertia('/workspaces', 'ChooseWorkspace')->name('workspaces');


