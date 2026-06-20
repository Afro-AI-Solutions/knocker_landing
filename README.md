# Knocker Landing - Laravel + React Application

A modern landing page with admin panel and MySQL database, built with **React** (frontend) and **Laravel** (backend API).

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 18, TypeScript, Tailwind CSS, Vite |
| Backend | Laravel 13, PHP 8.3+ |
| Database | MySQL |

---

## Project Structure

```
knocker_landing/
├── app/                    # Laravel application code
│   ├── Http/Controllers/Api/
│   └── Models/
├── client/                 # React frontend source
│   └── src/
├── database/
│   ├── migrations/
│   └── seeders/
├── public/                 # Web root (Laravel + built React assets)
├── routes/
│   ├── api.php             # REST API routes
│   └── web.php             # SPA fallback route
├── composer.json           # PHP dependencies
└── package.json            # Frontend build dependencies
```

---

## Quick Start

### Prerequisites

- PHP 8.2+ with extensions: `mbstring`, `pdo_mysql`, `openssl`, `tokenizer`, `xml`, `ctype`, `json`
- Composer
- Node.js 18+ (for building the frontend)
- MySQL server

### 1. Install dependencies

```bash
composer install
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
php artisan key:generate
```

**Local PostgreSQL (Docker):** the default `.env.example` targets Postgres on port `5454`:

```env
DB_CONNECTION=pgsql
DB_HOST=127.0.0.1
DB_PORT=5454
DB_DATABASE=nova_appdb
DB_USERNAME=nova_admin
DB_PASSWORD=ultra_secure_2025
```

Start your Postgres container first, then migrate:

```bash
docker compose up -d postgres_db
php artisan migrate
php artisan db:seed
```

**MySQL (production hosting):** switch `DB_CONNECTION=mysql` and set your MySQL credentials.

### 3. Set up the database

```bash
php artisan migrate
php artisan db:seed
```

### 4. Build the frontend

```bash
npm run build
```

### 5. Start the server

```bash
php artisan serve
```

Open **http://localhost:8000** — the app serves both the React frontend and the API.

### Development mode

Run Laravel and Vite in separate terminals:

```bash
# Terminal 1 — Laravel API
php artisan serve

# Terminal 2 — React dev server with hot reload
npm run dev
```

Vite proxies `/api` requests to `http://localhost:8000`.

---

## Deployment (shared hosting — no npm on server)

Build locally, upload to `public_html` + `knocker_landing`. Full guide: **[DEPLOY.md](DEPLOY.md)**

```powershell
.\scripts\deploy-build.ps1
```

This creates:
- `deploy/output/knocker_landing/` → upload to `/home/youruser/knocker_landing/`
- `deploy/output/public_html/` → upload to `/home/youruser/public_html/`

Set on the server `.env`:
```env
APP_PUBLIC_PATH=/home/youruser/public_html
APP_URL=https://yourdomain.com
DB_CONNECTION=mysql
```

No npm or composer needed on the server — everything is pre-built locally.

---

## API Endpoints

All endpoints are prefixed with `/api`.

### Content Management

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/content` | Get all page content |
| GET | `/api/content/{pageKey}` | Get page content (`home`, `about`, `services`, `portfolio`, `contact`) |
| POST | `/api/content/{pageKey}` | Save page content |

### Contact Messages

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/messages` | Get all messages |
| POST | `/api/messages` | Submit new message |
| PUT | `/api/messages/{id}/read` | Mark message as read |
| POST | `/api/contact` | Legacy contact form endpoint |
| GET | `/api/admin/contacts` | Admin: messages + stats |
| PATCH | `/api/admin/contacts/{id}/read` | Admin: mark as read |

---

## Admin Panel

Visit `/admin` after starting the app. The admin panel loads and saves content via the Laravel API.

---

## Migration from Node.js

The previous Express.js backend (`server/`) has been replaced by Laravel. The React frontend is unchanged; all `/api/*` routes are now handled by Laravel controllers in `app/Http/Controllers/Api/`.

Legacy Node server files remain in `server/` for reference but are no longer used.
