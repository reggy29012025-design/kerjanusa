# 🚀 Quick Start Guide

## Prerequisites
- PHP 8.1+
- Node.js 18+
- MySQL/MariaDB
- Composer
- Git

---

## Backend Setup (Laravel)

### 1. Masuk ke folder backend
```bash
cd backend
```

### 2. Install dependencies
```bash
composer install
```

### 3. Setup environment file
```bash
cp .env.example .env
```

Edit `.env` dan sesuaikan:
```env
APP_NAME="Pintarnya"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pintarnya_db
DB_USERNAME=root
DB_PASSWORD=
```

### 4. Generate app key
```bash
php artisan key:generate
```

### 5. Create database
Buat database MySQL dengan nama `pintarnya_db`

### 6. Run migrations
```bash
php artisan migrate
```

### 7. (Optional) Seed data
```bash
php artisan db:seed
```

### 8. Start Laravel server
```bash
php artisan serve
```

Server akan berjalan di: **http://localhost:8000**

---

## Frontend Setup (React)

### 1. Masuk ke folder frontend
```bash
cd frontend
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create .env file
```bash
cp .env.example .env
```

Edit `.env`:
```env
VITE_API_URL=http://localhost:8000/api
```

### 4. Start development server
```bash
npm run dev
```

Server akan berjalan di: **http://localhost:3001**

### 5. Build for production
```bash
npm run build
```

---

## Testing API dengan Postman

### 1. Setup di Postman

**Create new request:**
- URL: `http://localhost:8000/api/login`
- Method: POST
- Headers: `Content-Type: application/json`
- Body:
```json
{
  "email": "recruiter@example.com",
  "password": "password123"
}
```

### 2. Gunakan token di request lain

Setelah login sukses, copy token dari response, kemudian:
- Go ke request protected
- Headers → Authorization
- Type: Bearer Token
- Token: paste token yang di-copy

Atau gunakan Postman Environment:
```javascript
// Di folder "Tests" tab request login:
pm.environment.set("token", pm.response.json().token);
```

---

## Struktur Database (Opsional dibuat manual)

### Users Table
```sql
CREATE TABLE users (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  role ENUM('candidate', 'recruiter') DEFAULT 'candidate',
  phone VARCHAR(20),
  profile_picture VARCHAR(255),
  email_verified_at TIMESTAMP NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### Jobs Table
```sql
CREATE TABLE jobs (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  recruiter_id BIGINT NOT NULL,
  title VARCHAR(255) NOT NULL,
  description LONGTEXT NOT NULL,
  category VARCHAR(100),
  salary_min INT,
  salary_max INT,
  location VARCHAR(255),
  job_type ENUM('full-time', 'part-time', 'contract', 'freelance'),
  experience_level ENUM('entry', 'mid', 'senior'),
  status ENUM('active', 'inactive') DEFAULT 'active',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (recruiter_id) REFERENCES users(id) ON DELETE CASCADE
);
```

### Applications Table
```sql
CREATE TABLE applications (
  id BIGINT PRIMARY KEY AUTO_INCREMENT,
  job_id BIGINT NOT NULL,
  candidate_id BIGINT NOT NULL,
  status ENUM('pending', 'accepted', 'rejected', 'withdrawn') DEFAULT 'pending',
  cover_letter LONGTEXT,
  applied_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE CASCADE,
  FOREIGN KEY (candidate_id) REFERENCES users(id) ON DELETE CASCADE
);
```

---

## Default Test Credentials

Setelah migration & seeding:

**Recruiter:**
```
Email: recruiter@example.com
Password: password123
```

**Candidate:**
```
Email: candidate@example.com
Password: password123
```

---

## Common Issues & Solutions

### Backend

**Error: "SQLSTATE[HY000]: General error: 1030"**
- Pastikan MySQL running
- Check database credentials di `.env`

**Error: "Class not found"**
```bash
composer dump-autoload
```

**Port 8000 sudah terpakai:**
```bash
php artisan serve --port=8001
```

### Frontend

**Module not found error:**
```bash
rm -rf node_modules
npm install
```

**API call gagal (CORS):**
- Backend: Pastikan request headers support CORS
- Frontend: Check proxy di vite.config.js

**Port 3001 sudah terpakai:**
```bash
npm run dev -- --port 3001
```

---

## Next Steps

1. ✅ Setup Backend & Frontend
2. ✅ Test API dengan Postman
3. 📝 Explore API documentation: [API_DOCUMENTATION.md](API_DOCUMENTATION.md)
4. 🏗️ Understand architecture: [PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)
5. 🎨 Start building features!

---

## Useful Commands

### Backend
```bash
# Create model dengan migration
php artisan make:model ModelName -m

# Create controller
php artisan make:controller ControllerName

# Rollback migrations
php artisan migrate:rollback

# Check routes
php artisan route:list
```

### Frontend
```bash
# Install package
npm install package-name

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## Folder Structure Reminder

```
v3/
├── backend/          # Laravel API
├── frontend/         # React App
├── PROJECT_STRUCTURE.md
├── API_DOCUMENTATION.md
└── QUICK_START.md
```

---

**Happy Coding!** 🚀
