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
Welcome to the API!
```

## Error Handling

All errors follow this format:

```json
{
  "statusCode": 400,
  "message": "Error description",
  "error": "Bad Request"
}
```

## Authentication

(To be implemented)

## Rate Limiting

(To be implemented)
