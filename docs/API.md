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
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "a1b2c3d4e5f6..."
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
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "a1b2c3d4e5f6..."
}
```

**Errors:**
- `401 Unauthorized` — Invalid email or password

---

#### POST /api/auth/refresh

Exchange a valid refresh token for a new access token + refresh token pair (token rotation).

**Request Body:**
```json
{
  "refreshToken": "a1b2c3d4e5f6..."
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
  "accessToken": "eyJhbGciOiJIUzI1NiIs...",
  "refreshToken": "f6e5d4c3b2a1..."
}
```

**Errors:**
- `401 Unauthorized` — Invalid, expired, or revoked refresh token. Reuse of a revoked token revokes ALL user sessions (theft detection).

---

#### POST /api/auth/logout

Logout current user. Revokes the provided refresh token.

**Request Body (optional):**
```json
{
  "refreshToken": "a1b2c3d4e5f6..."
}
```

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

### Blog

#### GET /api/blog/posts

List blog posts (paginated, with optional category filter).

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| page | number | 1 | Page number |
| limit | number | 10 | Items per page |
| category | string | - | Filter by category (announcement, tutorial, engineering, community) |

**Response (200):**
```json
{
  "items": [
    {
      "id": "clxyz...",
      "slug": "introducing-nenejs",
      "title": "Introducing nene.js",
      "excerpt": "A brief description...",
      "content": "# Full markdown content...",
      "coverImage": null,
      "category": "announcement",
      "tags": ["framework", "launch"],
      "readingTime": 5,
      "published": true,
      "publishedAt": "2024-01-01T00:00:00.000Z",
      "author": {
        "id": "clxyz...",
        "name": "Author Name",
        "role": "Creator",
        "avatar": "/avatars/author.jpg"
      }
    }
  ],
  "total": 5,
  "page": 1,
  "limit": 10,
  "totalPages": 1
}
```

---

#### GET /api/blog/posts/:slug

Get a single blog post by slug.

**Response (200):** Single post object (same structure as items above).

**Errors:**
- `404 Not Found` — Post not found

---

#### GET /api/blog/authors

List all authors.

**Response (200):**
```json
[
  {
    "id": "clxyz...",
    "name": "Author Name",
    "role": "Creator",
    "avatar": "/avatars/author.jpg",
    "bio": null,
    "email": null
  }
]
```

---

### Showcase

#### GET /api/showcase/projects

List showcase projects (with optional category/featured filter).

**Query Parameters:**

| Param | Type | Default | Description |
|-------|------|---------|-------------|
| category | string | - | Filter by category (ai, saas, ecommerce, opensource, devtools, creative) |
| featured | boolean | - | Filter featured projects only |

**Response (200):**
```json
[
  {
    "id": "clxyz...",
    "slug": "project-name",
    "name": "Project Name",
    "description": "A cool project...",
    "image": null,
    "category": "ai",
    "tags": ["nextjs", "ai"],
    "url": "https://example.com",
    "github": "https://github.com/example",
    "featured": true,
    "createdAt": "2024-01-01T00:00:00.000Z"
  }
]
```

---

#### GET /api/showcase/projects/:slug

Get a single project by slug.

**Response (200):** Single project object.

**Errors:**
- `404 Not Found` — Project not found

---

#### GET /api/showcase/categories

Get project counts per category.

**Response (200):**
```json
[
  { "category": "ai", "count": 3 },
  { "category": "saas", "count": 2 }
]
```

---

#### POST /api/showcase/submit

Submit a community project for review.

**Request Body:**
```json
{
  "name": "My Project",
  "description": "A description of my project",
  "url": "https://myproject.com",
  "category": "ai",
  "github": "https://github.com/me/project",
  "tags": ["tag1", "tag2"]
}
```

**Response (201):** Created project object (with `approved: false`).

---

### Features

#### GET /api/features

List all features (ordered by `order` field).

**Response (200):**
```json
[
  {
    "id": "clxyz...",
    "title": "Feature Title",
    "description": "Feature description...",
    "bullets": ["Bullet 1", "Bullet 2"],
    "codeExample": "const app = nene();",
    "codeFilename": "app.ts",
    "accentColor": "#0667EF",
    "reversed": false,
    "order": 0
  }
]
```

---

#### GET /api/features/comparison

Get framework comparison table data.

**Response (200):**
```json
[
  {
    "id": "clxyz...",
    "feature": "Type Safety",
    "neneValue": "Full-stack",
    "othersValue": "Partial",
    "hasNeneCheck": true,
    "hasOthersCheck": false,
    "order": 0
  }
]
```

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
