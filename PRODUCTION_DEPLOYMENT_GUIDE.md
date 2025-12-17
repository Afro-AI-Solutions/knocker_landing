# Production Deployment Guide

## Prerequisites
- VPS/Server with Ubuntu/CentOS
- Domain name
- SSL certificate
- Production MySQL database

## Deployment Options

### Option 1: VPS Deployment (Recommended)

#### 1. Server Setup
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install MySQL
sudo apt install mysql-server -y
sudo mysql_secure_installation

# Install PM2 (Process Manager)
sudo npm install -g pm2

# Install Nginx (Reverse Proxy)
sudo apt install nginx -y
```

#### 2. Database Setup
```bash
# Login to MySQL
sudo mysql -u root -p

# Create production database
CREATE DATABASE knocker_db_prod;
CREATE USER 'knocker_user'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON knocker_db_prod.* TO 'knocker_user'@'localhost';
FLUSH PRIVILEGES;
EXIT;
```

#### 3. Deploy Application
```bash
# Clone/Upload your project
git clone <your-repo> /var/www/knocker-app
cd /var/www/knocker-app

# Install dependencies
npm install

# Create production .env
sudo nano .env.production
```

#### 4. Production Environment Variables
```env
# Database Configuration
DB_HOST=localhost
DB_PORT=3306
DB_USER=knocker_user
DB_PASSWORD=your_secure_password
DB_NAME=knocker_db_prod

# Server Configuration
PORT=3000
NODE_ENV=production

# Security
JWT_SECRET=your_jwt_secret_key
SESSION_SECRET=your_session_secret
```

#### 5. Build and Deploy
```bash
# Build the application
npm run build

# Setup database
npm run db:push
npm run db:init
npm run db:seed

# Start with PM2
pm2 start npm --name "knocker-app" -- start
pm2 save
pm2 startup
```

#### 6. Nginx Configuration
```bash
sudo nano /etc/nginx/sites-available/knocker-app
```

```nginx
server {
    listen 80;
    server_name yourdomain.com www.yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Enable site
sudo ln -s /etc/nginx/sites-available/knocker-app /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 7. SSL Certificate (Let's Encrypt)
```bash
sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
```

---

### Option 2: Docker Deployment

#### 1. Create Dockerfile
```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

#### 2. Create docker-compose.yml
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DB_HOST=mysql
      - DB_USER=knocker_user
      - DB_PASSWORD=secure_password
      - DB_NAME=knocker_db
    depends_on:
      - mysql
    volumes:
      - ./uploads:/app/uploads

  mysql:
    image: mysql:8.0
    environment:
      MYSQL_ROOT_PASSWORD: root_password
      MYSQL_DATABASE: knocker_db
      MYSQL_USER: knocker_user
      MYSQL_PASSWORD: secure_password
    volumes:
      - mysql_data:/var/lib/mysql
    ports:
      - "3306:3306"

  nginx:
    image: nginx:alpine
    ports:
      - "80:80"
      - "443:443"
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf
      - ./ssl:/etc/nginx/ssl
    depends_on:
      - app

volumes:
  mysql_data:
```

#### 3. Deploy with Docker
```bash
docker-compose up -d
```

---

### Option 3: Cloud Deployment

#### Vercel (Frontend + Serverless Functions)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

#### Railway (Full-stack)
```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

#### DigitalOcean App Platform
1. Connect GitHub repository
2. Configure build settings
3. Add environment variables
4. Deploy

---

## Production Optimizations

### 1. Update package.json
```json
{
  "scripts": {
    "start": "cross-env NODE_ENV=production node dist/index.js",
    "build:prod": "npm run build && npm run db:push",
    "deploy": "npm run build:prod && pm2 restart knocker-app"
  }
}
```

### 2. Add Production Middleware
```javascript
// server/index.ts
if (process.env.NODE_ENV === 'production') {
  app.use(helmet()); // Security headers
  app.use(compression()); // Gzip compression
  app.use(rateLimit({ // Rate limiting
    windowMs: 15 * 60 * 1000,
    max: 100
  }));
}
```

### 3. Environment-specific Database Config
```javascript
// drizzle.config.ts
export default defineConfig({
  out: "./migrations",
  schema: "./shared/schema.ts",
  dialect: "mysql",
  dbCredentials: process.env.NODE_ENV === 'production' ? {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || "3306"),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false } // For cloud databases
  } : {
    host: "localhost",
    port: 3306,
    user: "root",
    password: "0924475152@os",
    database: "knocker_db"
  }
});
```

---

## Security Checklist

### ✅ Required for Production
- [ ] Change default passwords
- [ ] Use environment variables for secrets
- [ ] Enable HTTPS/SSL
- [ ] Configure firewall
- [ ] Set up database backups
- [ ] Enable rate limiting
- [ ] Add security headers
- [ ] Validate all inputs
- [ ] Use CORS properly
- [ ] Monitor logs

### Production .env Template
```env
# Database
DB_HOST=your_db_host
DB_PORT=3306
DB_USER=your_db_user
DB_PASSWORD=your_secure_password
DB_NAME=your_db_name

# Server
PORT=3000
NODE_ENV=production

# Security
JWT_SECRET=your_jwt_secret_minimum_32_characters
SESSION_SECRET=your_session_secret_minimum_32_characters

# Optional: External Services
SMTP_HOST=your_smtp_host
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

---

## Monitoring & Maintenance

### 1. PM2 Monitoring
```bash
pm2 monit
pm2 logs knocker-app
pm2 restart knocker-app
```

### 2. Database Backups
```bash
# Create backup script
#!/bin/bash
mysqldump -u knocker_user -p knocker_db_prod > backup_$(date +%Y%m%d_%H%M%S).sql

# Add to crontab for daily backups
0 2 * * * /path/to/backup-script.sh
```

### 3. Log Rotation
```bash
sudo nano /etc/logrotate.d/knocker-app
```

---

## Quick Deployment Commands

### For VPS:
```bash
# One-time setup
npm run build
npm run db:push
npm run db:init
npm run db:seed
pm2 start npm --name "knocker-app" -- start

# Updates
git pull
npm install
npm run build
npm run db:push
pm2 restart knocker-app
```

### For Docker:
```bash
docker-compose down
docker-compose up -d --build
```

Your backend is production-ready! Choose the deployment option that best fits your needs and budget.