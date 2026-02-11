# API Reference

## Base URL

```
http://localhost:4000/api
```

## Endpoints

### Health Check

#### GET /api/health

Check if the API server is running.

**Response:**
```json
{
  "status": "ok",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "uptime": 123.456
}
```

### Root

#### GET /api

Returns a welcome message.

**Response:**
```
Welcome to nene.js API!
```

---

### Authentication

#### POST /api/auth/register

Register a new user.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123",
  "name": "John Doe"
}
```

| Field | Type | Required | Validation |
|-------|------|----------|------------|
| email | string | Yes | Valid email |
| password | string | Yes | Min 8 characters |
| name | string | No | - |

**Response (201):**
```json
{
  "user": {
    "id": "clxyz...",
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Errors:**
- `409 Conflict` — Email already registered

---

#### POST /api/auth/login

Login with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response (200):**
```json
{
  "user": {
    "id": "clxyz...",
    "email": "user@example.com",
    "name": "John Doe",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  },
  "accessToken": "eyJhbGciOiJIUzI1NiIs..."
}
```

**Errors:**
- `401 Unauthorized` — Invalid email or password

---

#### POST /api/auth/logout

Logout current user (stateless — client discards token).

**Response (200):**
```json
{
  "message": "Logged out successfully"
}
```

---

#### GET /api/auth/me

Get current authenticated user info.

**Headers:**
```
Authorization: Bearer <accessToken>
```

**Response (200):**
```json
{
  "id": "clxyz...",
  "email": "user@example.com",
  "name": "John Doe",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Errors:**
- `401 Unauthorized` — Missing or invalid token

---

### Users

All user endpoints require `Authorization: Bearer <accessToken>` header.

#### GET /api/users

List all users (paginated).

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| page | number | 1 | Page number |
| limit | number | 10 | Items per page (max 100) |

**Response (200):**
```json
{
  "items": [
    {
      "id": "clxyz...",
      "email": "user@example.com",
      "name": "John Doe",
      "createdAt": "2024-01-01T00:00:00.000Z",
      "updatedAt": "2024-01-01T00:00:00.000Z"
    }
  ],
  "total": 1,
  "page": 1,
  "limit": 10,
  "totalPages": 1
}
```

---

#### GET /api/users/:id

Get user by ID.

**Response (200):**
```json
{
  "id": "clxyz...",
  "email": "user@example.com",
  "name": "John Doe",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

**Errors:**
- `404 Not Found` — User not found

---

#### PATCH /api/users/:id

Update user. Users can only update their own profile.

**Request Body:**
```json
{
  "name": "New Name",
  "email": "new@example.com"
}
```

| Field | Type | Required |
|-------|------|----------|
| name | string | No |
| email | string | No |

**Response (200):** Updated user object.

**Errors:**
- `403 Forbidden` — Cannot update another user's profile
- `404 Not Found` — User not found

---

#### DELETE /api/users/:id

Delete user. Users can only delete their own account.

**Response:** `204 No Content`

**Errors:**
- `403 Forbidden` — Cannot delete another user's account
- `404 Not Found` — User not found

---

## Error Handling

All errors follow this format:

```json
{
  "statusCode": 400,
  "message": "Error description",
  "error": "Bad Request"
}
```

### Common Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request - validation failed |
| 401 | Unauthorized - not logged in |
| 403 | Forbidden - no permission |
| 404 | Not Found |
| 500 | Internal Server Error |

## Validation

Request bodies are validated using class-validator. Invalid requests return 400 with details:

```json
{
  "statusCode": 400,
  "message": [
    "email must be an email",
    "password must be longer than or equal to 8 characters"
  ],
  "error": "Bad Request"
}
```

## CORS

CORS is enabled for the frontend URL (default: http://localhost:3000).

Configure via `FRONTEND_URL` environment variable.
