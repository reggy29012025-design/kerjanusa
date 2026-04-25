# Pintarnya - Project Structure Documentation

## 📁 Folder Structure

### Backend (Laravel)
```
backend/
├── app/
│   ├── Http/
│   │   └── Controllers/          # Controller hanya untuk CRUD & routing
│   │       ├── AuthController.php
│   │       ├── JobController.php
│   │       └── ApplicationController.php
│   ├── Services/                 # Business Logic di sini!
│   │   ├── AuthService.php
│   │   ├── JobService.php
│   │   └── ApplicationService.php
│   ├── Models/                   # Database Models
│   │   ├── User.php
│   │   ├── Job.php
│   │   └── Application.php
│   ├── Requests/                 # Form Request Validation
│   └── Resources/                # API Response Resources
├── routes/
│   └── api.php                   # API Routes
├── database/
│   └── migrations/               # Database Migrations
├── config/
├── composer.json
└── .env.example
```

### Frontend (React)
```
frontend/
├── src/
│   ├── components/               # Reusable React Components
│   │   ├── JobCard.jsx
│   │   ├── Navbar.jsx
│   │   ├── LoginForm.jsx
│   │   └── ...
│   ├── pages/                    # Page Components
│   │   ├── JobListPage.jsx
│   │   ├── LoginPage.jsx
│   │   └── ...
│   ├── services/                 # API Service Classes
│   │   ├── authService.js
│   │   ├── jobService.js
│   │   └── applicationService.js
│   ├── hooks/                    # Custom React Hooks
│   │   ├── useAuth.js
│   │   ├── useJobs.js
│   │   └── useApplications.js
│   ├── utils/                    # Utility Functions
│   │   ├── apiClient.js
│   │   └── ...
│   ├── styles/                   # CSS Files
│   ├── App.jsx
│   └── main.jsx
├── package.json
└── vite.config.js
```

## 🏗️ Architecture Pattern

### Backend Architecture

#### 1. **Controller Layer**
Controller hanya menangani:
- Validasi input dari request
- Memanggil Service untuk business logic
- Return HTTP response

```php
public function store(Request $request): JsonResponse
{
    $validated = $request->validate([...]);
    $job = $this->jobService->createJob($request->user()->id, $validated);
    return response()->json([...], 201);
}
```

#### 2. **Service Layer** ⭐ (Penting!)
Service menangani SEMUA business logic:
- CRUD operations
- Complex calculations
- Business rules
- Data transformations

```php
public function createJob(int $recruiterId, array $data): Job
{
    $data['recruiter_id'] = $recruiterId;
    $data['status'] = 'active';
    return Job::create($data);
}
```

#### 3. **Model Layer**
Model untuk:
- Database relationships
- Query scopes
- Attribute casting

### Frontend Architecture

#### 1. **Service Classes**
Menghandle API calls dengan axios

```javascript
static async getJobs(filters = {}) {
    const response = await apiClient.get('/jobs', { params: filters });
    return response.data;
}
```

#### 2. **Custom Hooks** (useAuth, useJobs, useApplications)
Reusable logic untuk:
- State management
- Loading & error handling
- API calls

```javascript
const useJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // ... logic
};
```

#### 3. **Zustand Store**
Global state management untuk auth

```javascript
const useAuthStore = create((set) => ({
  user: null,
  token: null,
  login: async (email, password) => { ... }
}));
```

#### 4. **Components**
Components hanya untuk UI rendering dengan props

#### 5. **Pages**
Page components yang menggabungkan beberapa components

## 🔄 Data Flow

### Backend Request Flow
```
Request
  ↓
Controller (validation)
  ↓
Service (business logic)
  ↓
Model (database)
  ↓
Service (transforms response)
  ↓
Controller (return JSON)
  ↓
Response
```

### Frontend Request Flow
```
Component (user interaction)
  ↓
Hook (useState, useEffect)
  ↓
Service (axios call)
  ↓
apiClient (with interceptors)
  ↓
API Response
  ↓
Hook (setState)
  ↓
Component (re-render)
```

## 📝 Key Points

### ✅ Backend Best Practices
1. **Controller** = Routing + Validation only
2. **Service** = ALL business logic
3. **Model** = Database schema + relationships
4. **DI (Dependency Injection)** = `public function __construct(private JobService $jobService)`

### ✅ Frontend Best Practices
1. **Service Classes** = API communication
2. **Hooks** = Reusable logic (state + effects)
3. **Zustand** = Global state (auth)
4. **Components** = Pure UI (props only)
5. **Pages** = Route handlers

## 🚀 Setup Instructions

### Backend Setup
```bash
cd backend

# Install dependencies
composer install

# Setup env
cp .env.example .env
php artisan key:generate

# Setup database
php artisan migrate

# Run server
php artisan serve
```

### Frontend Setup
```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## 📚 API Endpoints

### Authentication
- `POST /api/register` - Register user
- `POST /api/login` - Login
- `POST /api/logout` - Logout (requires auth)
- `GET /api/me` - Get current user (requires auth)

### Jobs
- `GET /api/jobs` - Get all jobs
- `GET /api/jobs/{id}` - Get job detail
- `POST /api/jobs` - Create job (requires auth)
- `PUT /api/jobs/{id}` - Update job (requires auth)
- `DELETE /api/jobs/{id}` - Delete job (requires auth)
- `GET /api/my-jobs` - Get recruiter's jobs (requires auth)

### Applications
- `POST /api/apply` - Apply for job (requires auth)
- `GET /api/my-applications` - Get candidate's applications (requires auth)
- `GET /api/jobs/{id}/applications` - Get job applications (requires auth)
- `PUT /api/applications/{id}/status` - Update application status (requires auth)

## 🔐 Authentication Flow

1. User registers/login via LoginForm
2. Backend returns token
3. Token stored in localStorage
4. axiios interceptor adds token to all requests
5. Protected routes require token
6. Zustand store manages auth state

## 🎨 Styling Structure

Semua CSS files disimpan di `src/styles/`:
- `jobCard.css`
- `jobList.css`
- `navbar.css`
- `auth.css`
- `App.css`

## 💡 Adding New Features

### Contoh: Menambah fitur "Company Profile"

#### Backend
1. Create migration: `php artisan make:migration create_companies_table`
2. Create model: `php artisan make:model Company`
3. Create service: `app/Services/CompanyService.php`
4. Create controller: `php artisan make:controller CompanyController`
5. Add routes di `routes/api.php`

#### Frontend
1. Create service: `src/services/companyService.js`
2. Create hook: `src/hooks/useCompanies.js`
3. Create component: `src/components/CompanyCard.jsx`
4. Create page: `src/pages/CompanyListPage.jsx`
5. Add route di `App.jsx`

## 🐛 Debugging Tips

- Backend: Gunakan `Log::debug()` atau dd()
- Frontend: Gunakan console.log() atau DevTools
- API: Test dengan Postman atau Thunder Client
- Database: Gunakan `php artisan tinker`
