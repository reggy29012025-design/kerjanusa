# 🚀 Cara Menjalankan Pintarnya

Panduan **super sederhana** untuk menjalankan backend dan frontend.

---

## ⚡ CARA TERPENDEK (3 Langkah)

### 1️⃣ Terminal Pertama - Backend

```bash
cd /home/lutfi/Dokumen/lutfi/dani/v3/backend

# Install dependencies (hanya 1x)
composer install

# Jalankan
php -S localhost:8000
```

✅ Backend berjalan di: `http://localhost:8000`

### 2️⃣ Terminal Kedua - Frontend

```bash
cd /home/lutfi/Dokumen/lutfi/dani/v3/frontend

# Install dependencies (hanya 1x)
npm install

# Jalankan
npm run dev
```

✅ Frontend berjalan di: `http://localhost:3001`

### 3️⃣ Buka Browser

Akses: **http://localhost:3001**

✨ **Selesai!** Website sudah jalan.

---

## Penjelasan Detail

### Backend (PHP)

**Apa itu?** Server API yg diakses frontend

**Port:** 8000

**Start command:**
```bash
cd backend
php -S localhost:8000
```

**Henti:** Press `Ctrl+C`

---

### Frontend (React)

**Apa itu?** Website yang dilihat user

**Port:** 3001

**Start command:**
```bash
cd frontend
npm run dev
```

**Henti:** Press `Ctrl+C`

---

## 📋 Checklist Setup Pertama Kali

- [ ] PHP terinstall (`php -v`)
- [ ] Composer terinstall (`composer -v`)
- [ ] Node.js terinstall (`node -v`)
- [ ] Copy file ke folder v3
- [ ] Buka Terminal 1
- [ ] Buka Terminal 2
- [ ] Akses http://localhost:3001

---

## ✅ Apa yang Harus Dilihat

### Terminal Backend
```
[Wed Mar 27 14:23:45 2024] PHP 8.1.0 Development Server started
[Wed Mar 27 14:23:45 2024] Listening on http://localhost:8000
```

### Terminal Frontend
```
  VITE v5.0.0  ready in 250 ms

  ➜  Local:   http://localhost:3001/
  ➜  press h to show help
```

---

## 🧪 Test API (Opsional)

Open Postman atau Terminal baru:

```bash
# Test login
curl -X POST http://localhost:8000/api/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'
```

Jika response berisi "token" → API berjalan ✅

---

## ❌ Troubleshoot

### Backend error "Port 8000 in use"
```bash
php -S localhost:8001
# atau
# Cari tau apa pakai port 8000
lsof -i :8000
# Kill process
kill -9 <PID>
```

### Frontend error "Port 3001 in use"
```bash
npm run dev -- --port 3002
```

### Frontend error "Module not found"
```bash
rm -rf node_modules
npm install
```

### Semua error "cannot connect to backend"
- Pastikan backend running di Terminal 1
- Check port benar (8000)
- Check URL di .env frontend

---

## 🎯 Workflow Development

**Setiap kali mulai coding:**

1. Buka Terminal 1:
```bash
cd v3/backend
php -S localhost:8000
```

2. Buka Terminal 2:
```bash
cd v3/frontend
npm run dev
```

3. Edit file (VSCode akan auto-refresh)

4. Browser auto-update (hot reload)

**Selesai!**

---

## 📚 File Penting

```
v3/
├── backend/              ← API Server
│   ├── public/           ← Web root
│   ├── app/              ← Code
│   └── .env              ← Config
├── frontend/             ← Website
│   ├── src/              ← Code
│   ├── .env              ← Config
│   └── vite.config.js    ← Setup
└── README.md             ← Dokumentasi
```

---

## 🔐 Test Credentials

Setelah frontend jalan, bisa login dengan:

```
Email: recruiter@example.com atau candidate@example.com
Password: password123
```

Atau klik "Daftar" untuk buat akun baru.

---

## 💡 Tips

- Use separate terminals for backend & frontend
- Keep both running during development
- Browser console (F12) untuk error frontend
- Backend terminal untuk error API
- Refresh browser jika UI tidak update

---

## 🚀 Production (Later)

Setelah development selesai:

**Backend:**
```bash
php -S 0.0.0.0:8000  # Akses dari IP lain
```

**Frontend:**
```bash
npm run build  # Generate optimized files
npm run preview  # Test production build
```

---

## ❓ Masih Bingung?

1. Pastikan sudah baca bagian "⚡ CARA TERPENDEK"
2. Follow langkah 1, 2, 3 berurutan
3. Terminal harus tetap running
4. Jangan close console
5. Refresh browser jika perlu

---

**Selamat coding!** 🎉

Jika ada error, kirim screenshot terminal ke developer.
