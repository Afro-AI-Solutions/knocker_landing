# MySQL Setup Guide

## Prerequisites

1. **Install MySQL Server**
   - Download from: https://dev.mysql.com/downloads/mysql/
   - Or use XAMPP/WAMP for Windows

2. **Create Database**
   ```sql
   CREATE DATABASE knocker_db;
   ```

## Configuration

1. **Copy environment file**
   ```bash
   copy .env.example .env
   ```

2. **Update .env with your MySQL credentials**
   ```env
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=your_mysql_password
   DB_NAME=knocker_db
   ```

## Installation & Migration

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Run migrations**
   ```bash
   npm run db:push
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

## Verification

1. **Check database connection**
   ```sql
   mysql -u root -p
   USE knocker_db;
   SHOW TABLES;
   ```

2. **Expected tables:**
   - `users`
   - `messages` 
   - `content`

## Troubleshooting

- **Connection refused**: Check if MySQL server is running
- **Access denied**: Verify username/password in .env
- **Database not found**: Create database manually first