# Pintarnya API Documentation

## Base URL
```
http://localhost:8000/api
```

## Authentication
Semua endpoint yang diberi tanda `[Protected]` memerlukan Bearer token di header:
```
Authorization: Bearer {token}
```

---

## 🔐 Authentication Endpoints

### Register
```http
POST /register
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "password_confirmation": "password123",
  "role": "candidate",
  "phone": "08123456789"
}
```

**Response (201):**
```json
{
  "message": "User registered successfully",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "candidate",
    "phone": "08123456789"
  },
  "token": "token_string_here"
}
```

---

### Login
```http
POST /login
```

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "message": "Login successful",
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "candidate"
  },
  "token": "token_string_here"
}
```

---

### Logout [Protected]
```http
POST /logout
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "message": "Logout successful"
}
```

---

### Get Current User [Protected]
```http
GET /me
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "user": {
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com",
    "role": "candidate",
    "phone": "08123456789",
    "profile_picture": null
  }
}
```

---

### Update Profile [Protected]
```http
PUT /profile
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "name": "John Doe Updated",
  "phone": "08987654321",
  "profile_picture": "image_file"
}
```

**Response (200):**
```json
{
  "message": "Profile updated successfully",
  "user": { ... }
}
```

---

### Change Password [Protected]
```http
PUT /change-password
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "old_password": "password123",
  "new_password": "newpassword123",
  "new_password_confirmation": "newpassword123"
}
```

**Response (200):**
```json
{
  "message": "Password changed successfully"
}
```

---

## 💼 Job Endpoints

### Get All Jobs
```http
GET /jobs?page=1&per_page=15&search=&category=&location=&job_type=&experience_level=
```

**Query Parameters:**
- `page` (int) - Page number (default: 1)
- `per_page` (int) - Items per page (default: 15)
- `search` (string) - Search in title & description
- `category` (string) - Filter by category
- `location` (string) - Filter by location
- `job_type` (string) - Filter by job type (full-time, part-time, contract, freelance)
- `experience_level` (string) - Filter by level (entry, mid, senior)

**Response (200):**
```json
{
  "data": [
    {
      "id": 1,
      "recruiter_id": 1,
      "title": "Backend Developer",
      "description": "Dicari backend developer dengan pengalaman Laravel",
      "category": "Technology",
      "salary_min": 5000000,
      "salary_max": 10000000,
      "location": "Jakarta",
      "job_type": "full-time",
      "experience_level": "mid",
      "status": "active",
      "recruiter": {
        "id": 1,
        "name": "PT Example",
        "email": "company@example.com"
      }
    }
  ],
  "pagination": {
    "total": 50,
    "per_page": 15,
    "current_page": 1,
    "last_page": 4
  }
}
```

---

### Get Job Detail
```http
GET /jobs/{id}
```

**Response (200):**
```json
{
  "data": {
    "id": 1,
    "recruiter_id": 1,
    "title": "Backend Developer",
    "description": "Dicari backend developer dengan pengalaman Laravel",
    "category": "Technology",
    "salary_min": 5000000,
    "salary_max": 10000000,
    "location": "Jakarta",
    "job_type": "full-time",
    "experience_level": "mid",
    "status": "active",
    "recruiter": { ... },
    "applications": [...]
  }
}
```

---

### Create Job [Protected - Recruiter]
```http
POST /jobs
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "title": "Backend Developer",
  "description": "Dicari backend developer dengan pengalaman Laravel...",
  "category": "Technology",
  "salary_min": 5000000,
  "salary_max": 10000000,
  "location": "Jakarta",
  "job_type": "full-time",
  "experience_level": "mid"
}
```

**Response (201):**
```json
{
  "message": "Job created successfully",
  "data": { ... }
}
```

---

### Update Job [Protected]
```http
PUT /jobs/{id}
Authorization: Bearer {token}
```

**Request Body:** (Same as create, semua fields optional)

**Response (200):**
```json
{
  "message": "Job updated successfully"
}
```

---

### Delete Job [Protected]
```http
DELETE /jobs/{id}
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "message": "Job deleted successfully"
}
```

---

### Get My Jobs [Protected - Recruiter]
```http
GET /my-jobs?page=1&per_page=15
Authorization: Bearer {token}
```

**Response (200):** Same as get all jobs

---

### Get Job Statistics [Protected - Recruiter]
```http
GET /jobs/{id}/statistics
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "data": {
    "total_applications": 25,
    "pending_applications": 10,
    "accepted_applications": 5,
    "rejected_applications": 10
  }
}
```

---

## 📋 Application Endpoints

### Apply for Job [Protected - Candidate]
```http
POST /apply
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "job_id": 1,
  "cover_letter": "Saya tertarik untuk posisi ini karena..."
}
```

**Response (201):**
```json
{
  "message": "Application submitted successfully",
  "data": {
    "id": 1,
    "job_id": 1,
    "candidate_id": 1,
    "status": "pending",
    "cover_letter": "...",
    "applied_at": "2024-03-27T10:00:00Z"
  }
}
```

---

### Get My Applications [Protected - Candidate]
```http
GET /my-applications?page=1&per_page=15
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "data": [
    {
      "id": 1,
      "job_id": 1,
      "candidate_id": 1,
      "status": "pending",
      "cover_letter": "...",
      "applied_at": "2024-03-27T10:00:00Z",
      "job": {
        "id": 1,
        "title": "Backend Developer",
        "location": "Jakarta",
        "salary_min": 5000000,
        "salary_max": 10000000
      }
    }
  ],
  "pagination": { ... }
}
```

---

### Get Job Applications [Protected - Recruiter]
```http
GET /jobs/{jobId}/applications?page=1&per_page=15
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "data": [
    {
      "id": 1,
      "job_id": 1,
      "candidate_id": 1,
      "status": "pending",
      "cover_letter": "...",
      "applied_at": "2024-03-27T10:00:00Z",
      "candidate": {
        "id": 1,
        "name": "John Doe",
        "email": "john@example.com",
        "phone": "08123456789"
      }
    }
  ],
  "pagination": { ... }
}
```

---

### Update Application Status [Protected - Recruiter]
```http
PUT /applications/{applicationId}/status
Authorization: Bearer {token}
```

**Request Body:**
```json
{
  "status": "accepted"
}
```

**Status values:** `pending`, `accepted`, `rejected`, `withdrawn`

**Response (200):**
```json
{
  "message": "Application status updated successfully"
}
```

---

### Get Application Detail [Protected]
```http
GET /applications/{applicationId}
Authorization: Bearer {token}
```

**Response (200):**
```json
{
  "data": {
    "id": 1,
    "job_id": 1,
    "candidate_id": 1,
    "status": "pending",
    "cover_letter": "...",
    "applied_at": "2024-03-27T10:00:00Z",
    "job": { ... },
    "candidate": { ... }
  }
}
```

---

## ❌ Error Responses

### Validation Error (422)
```json
{
  "message": "The given data was invalid.",
  "errors": {
    "email": ["The email has already been taken."],
    "password": ["The password must be at least 8 characters."]
  }
}
```

### Unauthorized (401)
```json
{
  "message": "Invalid credentials"
}
```

### Not Found (404)
```json
{
  "message": "Job not found"
}
```

### Bad Request (400)
```json
{
  "message": "Failed to apply for job or already applied"
}
```

---

## 🔗 Testing dengan Postman

1. Import collection dari `/docs/Pintarnya.postman_collection.json`
2. Set environment variable: `base_url=http://localhost:8000/api`
3. Setelah login, token otomatis disimpan di environment
4. Gunakan `{{token}}` di Authorization header untuk protected routes
