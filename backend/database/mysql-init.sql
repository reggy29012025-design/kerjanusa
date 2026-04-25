CREATE DATABASE IF NOT EXISTS pintarnya_db
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_unicode_ci;

CREATE USER IF NOT EXISTS 'pintarnya'@'localhost' IDENTIFIED BY 'pintarnya123';
CREATE USER IF NOT EXISTS 'pintarnya'@'127.0.0.1' IDENTIFIED BY 'pintarnya123';
GRANT ALL PRIVILEGES ON pintarnya_db.* TO 'pintarnya'@'localhost';
GRANT ALL PRIVILEGES ON pintarnya_db.* TO 'pintarnya'@'127.0.0.1';
FLUSH PRIVILEGES;
