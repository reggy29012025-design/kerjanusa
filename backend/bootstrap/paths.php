<?php

/*
|--------------------------------------------------------------------------
| Bind The Application In The Container
|--------------------------------------------------------------------------
|
| This may be the most important line in the entire application. The
| application now owns itself in the container and can be bound in
| containerized classes and returned back out to the developers.
|
*/

$app->bind('path.base', fn() => __DIR__ . '/..');
$app->bind('path.app', fn() => app('path.base') . '/app');
$app->bind('path.config', fn() => app('path.base') . '/config');
$app->bind('path.storage', fn() => app('path.base') . '/storage');
$app->bind('path.database', fn() => app('path.base') . '/database');
$app->bind('path.resources', fn() => app('path.base') . '/resources');
$app->bind('path.bootstrap', fn() => app('path.base') . '/bootstrap');

/*
|--------------------------------------------------------------------------
| Return The Application
|--------------------------------------------------------------------------
|
| This script returns the application instance. The instance is given to
| the calling script so we can separate the building of the instances
| from the actual running of the application and sending responses.
|
*/

return $app;
