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

## Planned Endpoints

### Authentication

#### POST /api/auth/register
Register a new user.

#### POST /api/auth/login
Login with email and password.

#### POST /api/auth/logout
Logout current user.

#### GET /api/auth/me
Get current user info.

### Users

#### GET /api/users
List all users (paginated).

#### GET /api/users/:id
Get user by ID.

#### PATCH /api/users/:id
Update user.

#### DELETE /api/users/:id
Delete user.

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
