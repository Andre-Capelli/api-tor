# Authentication Testing Guide

This guide shows how to test all authentication endpoints with success and error scenarios.

## Table of Contents
1. [Setup](#setup)
2. [Authentication Endpoints](#authentication-endpoints)
3. [Test Endpoints](#test-endpoints)
4. [Testing Scenarios](#testing-scenarios)

---

## Setup

Base URL: `http://localhost:7500`

### Tools
You can use any of these tools to test:
- **cURL** (command line)
- **Postman** (GUI)
- **Thunder Client** (VS Code extension)
- **REST Client** (VS Code extension)

---

## Authentication Endpoints

### 1. Register New User

**Endpoint:** `POST /auth/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securePassword123",
  "role": "user"
}
```

**Success Response (201):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Error Response (400):**
```json
{
  "error": {
    "message": "User with this email already exists",
    "status": 400
  }
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:7500/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "password": "securePassword123",
    "role": "user"
  }'
```

---

### 2. Login

**Endpoint:** `POST /auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Success Response (200):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

**Error Response (401) - Invalid credentials:**
```json
{
  "error": {
    "message": "Invalid email or password",
    "status": 401
  }
}
```

**Error Response (401) - Inactive account:**
```json
{
  "error": {
    "message": "Account is inactive",
    "status": 401
  }
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:7500/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "john@example.com",
    "password": "securePassword123"
  }'
```

---

### 3. Refresh Token

**Endpoint:** `POST /auth/refresh`

**Request Body:**
```json
{
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Success Response (200):**
```json
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

**Error Response (401) - Invalid token:**
```json
{
  "error": {
    "message": "Invalid refresh token",
    "status": 401
  }
}
```

**Error Response (401) - Expired token:**
```json
{
  "error": {
    "message": "Refresh token has expired",
    "status": 401
  }
}
```

**cURL Example:**
```bash
curl -X POST http://localhost:7500/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "your-refresh-token-here"
  }'
```

---

## Test Endpoints

### 1. Public Endpoint (No Auth Required)

**Endpoint:** `GET /test/public`

**Headers:** None required

**Success Response (200):**
```json
{
  "success": true,
  "message": "Public endpoint - No authentication required",
  "timestamp": "2026-01-02T10:30:00.000Z"
}
```

**cURL Example:**
```bash
curl http://localhost:7500/test/public
```

---

### 2. Protected Endpoint (Auth Required)

**Endpoint:** `GET /test/protected`

**Headers:**
```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Protected endpoint - Authentication successful",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "name": "John Doe",
    "role": "user"
  },
  "timestamp": "2026-01-02T10:30:00.000Z"
}
```

**Error Response (401) - No token:**
```json
{
  "error": {
    "message": "No authentication token provided",
    "status": 401
  }
}
```

**Error Response (401) - Invalid token:**
```json
{
  "error": {
    "message": "Invalid token",
    "status": 401
  }
}
```

**Error Response (401) - Expired token:**
```json
{
  "error": {
    "message": "Token has expired",
    "status": 401
  }
}
```

**cURL Example:**
```bash
curl http://localhost:7500/test/protected \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

### 3. Admin Endpoint (Admin Role Required)

**Endpoint:** `GET /test/admin`

**Headers:**
```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Admin endpoint - You have admin access",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "admin@example.com",
    "name": "Admin User",
    "role": "admin"
  },
  "timestamp": "2026-01-02T10:30:00.000Z"
}
```

**Error Response (403) - Insufficient permissions:**
```json
{
  "error": {
    "message": "Insufficient permissions. Required roles: admin",
    "status": 403
  }
}
```

**cURL Example:**
```bash
curl http://localhost:7500/test/admin \
  -H "Authorization: Bearer YOUR_ADMIN_ACCESS_TOKEN"
```

---

### 4. Moderator Endpoint (Moderator or Admin Role Required)

**Endpoint:** `GET /test/moderator`

**Headers:**
```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Moderator endpoint - You have moderator or admin access",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "email": "moderator@example.com",
    "name": "Moderator User",
    "role": "moderator"
  },
  "timestamp": "2026-01-02T10:30:00.000Z"
}
```

**Error Response (403) - Insufficient permissions:**
```json
{
  "error": {
    "message": "Insufficient permissions. Required roles: moderator, admin",
    "status": 403
  }
}
```

**cURL Example:**
```bash
curl http://localhost:7500/test/moderator \
  -H "Authorization: Bearer YOUR_MODERATOR_ACCESS_TOKEN"
```

---

### 5. Validate Token

**Endpoint:** `GET /test/validate-token`

**Headers:**
```
Authorization: Bearer YOUR_ACCESS_TOKEN
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Token is valid",
  "tokenInfo": {
    "userId": "507f1f77bcf86cd799439011",
    "email": "john@example.com",
    "name": "John Doe",
    "role": "user",
    "issuedAt": 1704192600,
    "expiresAt": 1704193500,
    "issuer": "api-tor",
    "audience": "api-tor-users"
  }
}
```

**cURL Example:**
```bash
curl http://localhost:7500/test/validate-token \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

## Testing Scenarios

### Scenario 1: Complete Success Flow

1. **Register a new user**
```bash
curl -X POST http://localhost:7500/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "password": "testPassword123",
    "role": "user"
  }'
```

2. **Save the accessToken from response**

3. **Test public endpoint (no auth needed)**
```bash
curl http://localhost:7500/test/public
```

4. **Test protected endpoint with token**
```bash
curl http://localhost:7500/test/protected \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

5. **Validate your token**
```bash
curl http://localhost:7500/test/validate-token \
  -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
```

---

### Scenario 2: Error - No Token

**Test protected endpoint without token:**
```bash
curl http://localhost:7500/test/protected
```

**Expected Response (401):**
```json
{
  "error": {
    "message": "No authentication token provided",
    "status": 401
  }
}
```

---

### Scenario 3: Error - Invalid Token

**Test with invalid token:**
```bash
curl http://localhost:7500/test/protected \
  -H "Authorization: Bearer invalid.token.here"
```

**Expected Response (401):**
```json
{
  "error": {
    "message": "Invalid token",
    "status": 401
  }
}
```

---

### Scenario 4: Error - Insufficient Permissions

1. **Register/Login as regular user**
2. **Try to access admin endpoint with user token:**
```bash
curl http://localhost:7500/test/admin \
  -H "Authorization: Bearer YOUR_USER_ACCESS_TOKEN"
```

**Expected Response (403):**
```json
{
  "error": {
    "message": "Insufficient permissions. Required roles: admin",
    "status": 403
  }
}
```

---

### Scenario 5: Error - Expired Token

Wait for access token to expire (15 minutes by default), then:

```bash
curl http://localhost:7500/test/protected \
  -H "Authorization: Bearer YOUR_EXPIRED_TOKEN"
```

**Expected Response (401):**
```json
{
  "error": {
    "message": "Token has expired",
    "status": 401
  }
}
```

**Solution:** Use refresh token to get new access token:
```bash
curl -X POST http://localhost:7500/auth/refresh \
  -H "Content-Type: application/json" \
  -d '{
    "refreshToken": "YOUR_REFRESH_TOKEN"
  }'
```

---

### Scenario 6: Error - Duplicate Registration

1. **Register a user**
2. **Try to register with same email again:**
```bash
curl -X POST http://localhost:7500/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Another User",
    "email": "test@example.com",
    "password": "anotherPassword123"
  }'
```

**Expected Response (400):**
```json
{
  "error": {
    "message": "User with this email already exists",
    "status": 400
  }
}
```

---

### Scenario 7: Error - Invalid Credentials

**Login with wrong password:**
```bash
curl -X POST http://localhost:7500/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "password": "wrongPassword"
  }'
```

**Expected Response (401):**
```json
{
  "error": {
    "message": "Invalid email or password",
    "status": 401
  }
}
```

---

## Creating Admin and Moderator Users

To test admin and moderator endpoints, you need to create users with those roles:

### Create Admin User
```bash
curl -X POST http://localhost:7500/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Admin User",
    "email": "admin@example.com",
    "password": "adminPassword123",
    "role": "admin"
  }'
```

### Create Moderator User
```bash
curl -X POST http://localhost:7500/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Moderator User",
    "email": "moderator@example.com",
    "password": "moderatorPassword123",
    "role": "moderator"
  }'
```

---

## Quick Test Script

Save this as `test-auth.sh`:

```bash
#!/bin/bash

BASE_URL="http://localhost:7500"

echo "=== 1. Testing Public Endpoint (No Auth) ==="
curl -s $BASE_URL/test/public | jq
echo ""

echo "=== 2. Registering New User ==="
REGISTER_RESPONSE=$(curl -s -X POST $BASE_URL/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "testuser'$(date +%s)'@example.com",
    "password": "testPassword123",
    "role": "user"
  }')

echo $REGISTER_RESPONSE | jq
ACCESS_TOKEN=$(echo $REGISTER_RESPONSE | jq -r '.accessToken')
echo ""

echo "=== 3. Testing Protected Endpoint (With Valid Token) ==="
curl -s $BASE_URL/test/protected \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq
echo ""

echo "=== 4. Testing Protected Endpoint (Without Token) - Should Fail ==="
curl -s $BASE_URL/test/protected | jq
echo ""

echo "=== 5. Testing Protected Endpoint (Invalid Token) - Should Fail ==="
curl -s $BASE_URL/test/protected \
  -H "Authorization: Bearer invalid.token.here" | jq
echo ""

echo "=== 6. Validating Token ==="
curl -s $BASE_URL/test/validate-token \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq
echo ""

echo "=== 7. Testing Admin Endpoint (With User Token) - Should Fail ==="
curl -s $BASE_URL/test/admin \
  -H "Authorization: Bearer $ACCESS_TOKEN" | jq
echo ""

echo "=== All Tests Complete ==="
```

Make it executable and run:
```bash
chmod +x test-auth.sh
./test-auth.sh
```

---

## Swagger Documentation

After starting the server, you can also test all endpoints via Swagger UI:

**URL:** `http://localhost:7500/docs`

1. Register or login to get a token
2. Click the "Authorize" button at the top
3. Enter: `Bearer YOUR_ACCESS_TOKEN`
4. Test all endpoints through the Swagger interface
