#!/bin/bash

set -euo pipefail

BASE_DIR="$(cd "$(dirname "$0")" && pwd)"

echo "==> Initializing MySQL database and user"
mysql -uroot < "$BASE_DIR/database/mysql-init.sql"

echo "==> Running Laravel migrations"
php "$BASE_DIR/artisan" migrate --force

echo "==> Seeding demo data"
php "$BASE_DIR/artisan" db:seed --force

echo "==> Done"
