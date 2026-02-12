# Knocker API Testing Guide

## Quick Start

Start the server:
```bash
npm run dev
```

Server runs on: `http://localhost:5001`

## Content Management API

### 1. Get All Content
```bash
curl -X GET http://localhost:5001/api/content
```

### 2. Get Home Page Content
```bash
curl -X GET http://localhost:5001/api/content/home
```

### 3. Update Home Page Content
```bash
curl -X POST http://localhost:5001/api/content/home \
  -H "Content-Type: application/json" \
  -d '{
    "hero": {
      "tagline": "Updated Tagline",
      "heading": "New Amazing Heading",
      "description": "This is an updated description for testing."
    }
  }'
```

### 4. Get About Page Content
```bash
curl -X GET http://localhost:5001/api/content/about
```

### 5. Update Services Page
```bash
curl -X POST http://localhost:5001/api/content/services \
  -H "Content-Type: application/json" \
  -d '{
    "hero": {
      "title": "Our Premium Services",
      "description": "Updated service description"
    },
    "services": [
      {
        "title": "Web Development Pro",
        "description": "Advanced web development services",
        "features": ["React", "TypeScript", "Next.js", "Tailwind"],
        "price": "Starting at $3,999"
      }
    ]
  }'
```

## Messages API

### 1. Submit Contact Message
```bash
curl -X POST http://localhost:5001/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "I am interested in your web development services. Please contact me to discuss my project requirements."
  }'
```

### 2. Get All Messages
```bash
curl -X GET http://localhost:5001/api/messages
```

### 3. Mark Message as Read (replace ID)
```bash
curl -X PUT http://localhost:5001/api/messages/MESSAGE_ID_HERE/read
```

## Error Testing

### 1. Invalid Page Key
```bash
curl -X GET http://localhost:5001/api/content/invalid-page
```

### 2. Invalid Message Data
```bash
curl -X POST http://localhost:5001/api/messages \
  -H "Content-Type: application/json" \
  -d '{
    "name": "A",
    "email": "invalid-email",
    "message": "Short"
  }'
```

### 3. Empty Content Data
```bash
curl -X POST http://localhost:5001/api/content/home \
  -H "Content-Type: application/json" \
  -d '{}'
```

## JavaScript Testing Examples

```javascript
// Test content API
async function testContentAPI() {
  // Get all content
  const allContent = await fetch('http://localhost:5001/api/content');
  console.log('All Content:', await allContent.json());
  
  // Get home page
  const homeContent = await fetch('http://localhost:5001/api/content/home');
  console.log('Home Content:', await homeContent.json());
  
  // Update home page
  const updateResponse = await fetch('http://localhost:5001/api/content/home', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      hero: {
        tagline: 'JavaScript Test Update',
        heading: 'Updated via JavaScript',
        description: 'This was updated using JavaScript fetch API.'
      }
    })
  });
  console.log('Update Response:', await updateResponse.json());
}

// Test messages API
async function testMessagesAPI() {
  // Submit message
  const submitResponse = await fetch('http://localhost:5001/api/messages', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'Test User',
      email: 'test@example.com',
      message: 'This is a test message from JavaScript API testing.'
    })
  });
  console.log('Submit Response:', await submitResponse.json());
  
  // Get all messages
  const messagesResponse = await fetch('http://localhost:5001/api/messages');
  console.log('All Messages:', await messagesResponse.json());
}

// Run tests
testContentAPI();
testMessagesAPI();
```

## Expected Response Formats

### Success Response
```json
{
  "success": true,
  "message": "Operation completed successfully",
  "timestamp": "2024-12-XX T XX:XX:XX.XXXZ"
}
```

### Error Response
```json
{
  "success": false,
  "message": "Error description",
  "error": "ERROR_CODE",
  "timestamp": "2024-12-XX T XX:XX:XX.XXXZ"
}
```

### Validation Error
```json
{
  "success": false,
  "message": "Validation failed",
  "error": "VALIDATION_FAILED",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email",
      "code": "invalid_string"
    }
  ],
  "timestamp": "2024-12-XX T XX:XX:XX.XXXZ"
}
```

## Status Codes

- `200 OK` - Success
- `201 Created` - Resource created
- `400 Bad Request` - Validation error
- `404 Not Found` - Resource not found
- `500 Internal Server Error` - Server error

## API Endpoints Summary

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/content` | Get all page content |
| GET | `/api/content/:pageKey` | Get specific page content |
| POST | `/api/content/:pageKey` | Save page content |
| GET | `/api/messages` | Get all messages |
| POST | `/api/messages` | Submit new message |
| PUT | `/api/messages/:id/read` | Mark message as read |

Valid page keys: `home`, `about`, `services`, `portfolio`, `contact`