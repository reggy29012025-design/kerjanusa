<?php

namespace App\Http\Middleware;

use Illuminate\Auth\Middleware\RequirePassword as Middleware;

class RequirePassword extends Middleware
{
    /**
     * How many seconds before requiring a fresh password.
     *
     * @var int|null
     */
    protected $passwordTimeoutSeconds = 3600;
}
