<?php

use Illuminate\Support\Facades\Route;

Route::get('/{any?}', function () {
    $indexPath = public_path('index.html');

    if (! file_exists($indexPath)) {
        return response(
            'Frontend not built. Run: npm install && npm run build',
            503,
        );
    }

    return file_get_contents($indexPath);
})->where('any', '^(?!api|up).*$');
