<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

/*
| Shared hosting entry point for public_html.
| Laravel app lives in ../knocker_landing (sibling folder).
| Adjust $laravelRoot if your folder name differs.
*/
$laravelRoot = dirname(__DIR__) . DIRECTORY_SEPARATOR . 'knocker_landing';

if (file_exists($maintenance = $laravelRoot . '/storage/framework/maintenance.php')) {
    require $maintenance;
}

require $laravelRoot . '/vendor/autoload.php';

/** @var Application $app */
$app = require_once $laravelRoot . '/bootstrap/app.php';

$app->handleRequest(Request::capture());
