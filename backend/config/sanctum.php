<?php

use Laravel\Sanctum\Sanctum;

$statefulDomains = array_filter([
    'localhost',
    'localhost:3001',
    'localhost:8000',
    'localhost:8080',
    '127.0.0.1',
    '127.0.0.1:3001',
    '127.0.0.1:8000',
    '127.0.0.1:8080',
    '::1',
    Sanctum::currentApplicationUrlWithPort(),
]);

return [

    'stateful' => explode(',', env('SANCTUM_STATEFUL_DOMAINS', implode(',', $statefulDomains))),

    'guard' => ['web'],

    'expiration' => null,

    'token_prefix' => env('SANCTUM_TOKEN_PREFIX', ''),

    'middleware' => [
        'authenticate_session' => Illuminate\Session\Middleware\AuthenticateSession::class,
        'encrypt_cookies' => Illuminate\Cookie\Middleware\EncryptCookies::class,
        'verify_csrf_token' => App\Http\Middleware\VerifyCsrfToken::class,
    ],

];
