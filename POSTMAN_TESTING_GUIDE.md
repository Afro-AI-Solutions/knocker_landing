# Complete Backend API Testing Guide for Postman

## Setup Instructions

### 1. Start the Backend Server
```bash
cd C:\Users\Administrator\Desktop\Knocker1
npm run dev
```
Server runs on: `http://localhost:5002`

### 2. Initialize Database (First Time Only)
```bash
npm run db:push
npm run db:init
npm run db:seed
```

## API Endpoints for Postman Testing

### Base URL: `http://localhost:5002/api`

---

## 1. CONTACT SYSTEM

### Submit Contact Form
- **Method:** POST
- **URL:** `http://localhost:5002/api/contact`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Test Message",
  "message": "This is a test message from Postman"
}
```

### Get All Messages (Admin)
- **Method:** GET
- **URL:** `http://localhost:5002/api/admin/contacts`

### Mark Message as Read
- **Method:** PATCH
- **URL:** `http://localhost:5002/api/admin/contacts/1/read`

---

## 2. SERVICES MANAGEMENT

### Get All Services
- **Method:** GET
- **URL:** `http://localhost:5002/api/services`

### Create New Service
- **Method:** POST
- **URL:** `http://localhost:5002/api/admin/services`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "title": "Mobile App Development",
  "description": "Custom mobile applications for iOS and Android",
  "features": "[\"React Native\", \"Flutter\", \"Native iOS/Android\", \"Cross-platform\"]",
  "icon": "📱",
  "price": "Starting at $5,999"
}
```

### Update Service
- **Method:** PUT
- **URL:** `http://localhost:5002/api/admin/services/1`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "title": "Updated Service Title",
  "price": "Starting at $3,999"
}
```

### Delete Service
- **Method:** DELETE
- **URL:** `http://localhost:5002/api/admin/services/1`

---

## 3. PROJECTS MANAGEMENT

### Get All Projects
- **Method:** GET
- **URL:** `http://localhost:5002/api/projects`

### Create New Project
- **Method:** POST
- **URL:** `http://localhost:5002/api/admin/projects`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "title": "Social Media Dashboard",
  "description": "Real-time social media analytics and management platform",
  "image": "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80",
  "category": "Web Development",
  "tags": "[\"React\", \"Node.js\", \"MongoDB\", \"Socket.io\"]",
  "projectUrl": "https://socialdash.example.com",
  "githubUrl": "https://github.com/example/social-dashboard"
}
```

### Update Project
- **Method:** PUT
- **URL:** `http://localhost:5002/api/admin/projects/1`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "title": "Updated Project Title",
  "category": "AI Solutions"
}
```

### Delete Project
- **Method:** DELETE
- **URL:** `http://localhost:5002/api/admin/projects/1`

---

## 4. TEAM MANAGEMENT

### Get All Team Members
- **Method:** GET
- **URL:** `http://localhost:5002/api/team`

### Create New Team Member
- **Method:** POST
- **URL:** `http://localhost:5002/api/admin/team`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "name": "Alex Johnson",
  "position": "Senior Frontend Developer",
  "bio": "Expert in React, Vue.js, and modern frontend technologies with 8+ years experience",
  "image": "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&q=80",
  "email": "alex@knocker.ai",
  "linkedin": "https://linkedin.com/in/alexjohnson",
  "twitter": "https://twitter.com/alexjohnson"
}
```

### Update Team Member
- **Method:** PUT
- **URL:** `http://localhost:5002/api/admin/team/1`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "position": "Lead Frontend Developer",
  "bio": "Updated bio with new achievements"
}
```

### Delete Team Member
- **Method:** DELETE
- **URL:** `http://localhost:5002/api/admin/team/1`

---

## 5. TESTIMONIALS MANAGEMENT

### Get All Testimonials
- **Method:** GET
- **URL:** `http://localhost:5002/api/testimonials`

### Create New Testimonial
- **Method:** POST
- **URL:** `http://localhost:5002/api/admin/testimonials`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "name": "Maria Garcia",
  "position": "CEO",
  "company": "TechStart Inc.",
  "testimonial": "Knocker AI exceeded our expectations. Their AI solutions transformed our business operations completely.",
  "rating": 5,
  "image": "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&q=80"
}
```

### Update Testimonial
- **Method:** PUT
- **URL:** `http://localhost:5002/api/admin/testimonials/1`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "testimonial": "Updated testimonial text with more details",
  "rating": 5
}
```

### Delete Testimonial
- **Method:** DELETE
- **URL:** `http://localhost:5002/api/admin/testimonials/1`

---

## 6. PAGE CONTENT MANAGEMENT

### Get Page Content
- **Method:** GET
- **URL:** `http://localhost:5002/api/content/home`
- **URL:** `http://localhost:5002/api/content/about`
- **URL:** `http://localhost:5002/api/content/services`
- **URL:** `http://localhost:5002/api/content/portfolio`
- **URL:** `http://localhost:5002/api/content/contact`

### Update Page Content
- **Method:** PUT
- **URL:** `http://localhost:5002/api/admin/content/home`
- **Headers:** `Content-Type: application/json`
- **Body (JSON):**
```json
{
  "content": "{\"hero\":{\"title\":\"Updated Title\",\"subtitle\":\"Updated Subtitle\",\"description\":\"Updated description\"},\"stats\":[{\"label\":\"Projects\",\"value\":\"150+\"},{\"label\":\"Clients\",\"value\":\"75+\"}]}"
}
```

---

## Testing Workflow

### 1. Test Database Connection
```bash
node test-db.js
```

### 2. Start Server
```bash
npm run dev
```

### 3. Test in Postman (Recommended Order)

1. **GET** `/api/services` - Should return seeded services
2. **POST** `/api/contact` - Submit a test contact form
3. **GET** `/api/admin/contacts` - View submitted messages
4. **POST** `/api/admin/services` - Create a new service
5. **GET** `/api/services` - Verify new service appears
6. **PUT** `/api/admin/services/4` - Update the new service
7. **DELETE** `/api/admin/services/4` - Soft delete the service
8. **GET** `/api/projects` - View projects
9. **GET** `/api/team` - View team members
10. **GET** `/api/testimonials` - View testimonials
11. **GET** `/api/content/home` - View home page content

---

## Expected Response Formats

### Success Response
```json
{
  "id": 1,
  "title": "Service Title",
  "description": "Service description",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "isActive": true
}
```

### Error Response
```json
{
  "error": "Error message description",
  "success": false
}
```

### List Response
```json
[
  {
    "id": 1,
    "title": "Item 1"
  },
  {
    "id": 2,
    "title": "Item 2"
  }
]
```

---

## Troubleshooting

### Server Not Starting
- Check if port 5002 is available
- Verify MySQL is running
- Check .env file configuration

### Database Errors
- Run `npm run db:push` to sync schema
- Verify MySQL credentials in .env
- Check database exists: `knocker_db`

### API Errors
- Verify Content-Type header for POST/PUT requests
- Check JSON syntax in request body
- Ensure required fields are included

---

## Quick Test Collection for Postman

Import this collection to test all endpoints quickly:

1. Create new collection "Knocker Backend API"
2. Add requests for each endpoint above
3. Set base URL variable: `{{baseUrl}}` = `http://localhost:5002/api`
4. Test in the recommended order

The backend is fully functional and ready for testing!