<?php

namespace App\Providers;

use Illuminate\Support\Facades\Schema;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        if ($publicPath = env('APP_PUBLIC_PATH')) {
            $this->app->usePublicPath($publicPath);
        }
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Shared hosting MySQL often limits index length with utf8mb4
        Schema::defaultStringLength(191);
    }
}
