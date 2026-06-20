# Deploy to Shared Hosting (no npm on server)

Build everything on your **local machine**, then upload two folders to the server.

## Server layout

```
/home/youruser/
├── knocker_landing/     ← Laravel app (NOT web-accessible)
│   ├── app/
│   ├── bootstrap/
│   ├── config/
│   ├── database/
│   ├── routes/
│   ├── storage/
│   ├── vendor/
│   ├── artisan
│   └── .env
│
└── public_html/         ← Document root (web-accessible)
    ├── index.php        ← Laravel entry (points to ../knocker_landing)
    ├── .htaccess
    ├── index.html       ← Built React app
    ├── assets/
    └── figmaAssets/
```

---

## Step 1 — Build locally (Windows)

From the project root:

```powershell
.\scripts\deploy-build.ps1
```

This will:
1. Build the React frontend (`npm run build`)
2. Install production PHP dependencies (`composer install --no-dev`)
3. Create `deploy/output/knocker_landing/` and `deploy/output/public_html/`

---

## Step 2 — Upload to server

Upload via FTP/SFTP or cPanel File Manager:

| Local folder | Upload to server |
|---|---|
| `deploy/output/knocker_landing/` | `/home/youruser/knocker_landing/` |
| `deploy/output/public_html/` | `/home/youruser/public_html/` |

**Do not upload:** `client/`, `node_modules/`, `server/`, `.git/`

---

## Step 3 — Configure `.env` on server

1. Copy `deploy/.env.production.example` to `knocker_landing/.env` on the server
2. Set these values:

```env
APP_KEY=base64:...          # generate locally: php artisan key:generate --show
APP_URL=https://yourdomain.com
APP_PUBLIC_PATH=/home/youruser/public_html
DB_DATABASE=...
DB_USERNAME=...
DB_PASSWORD=...
```

Generate an app key locally:

```bash
php artisan key:generate --show
```

Copy the output into the server `.env`.

---

## Step 4 — Database setup

### Option A — SSH (if available)

```bash
cd ~/knocker_landing
php artisan migrate --force
php artisan db:seed --force
php artisan config:cache
php artisan route:cache
```

### Option B — phpMyAdmin (no SSH)

Import `deploy/database/mysql-schema.sql` into your MySQL database via phpMyAdmin.

---

## Step 5 — File permissions

Set writable permissions on the server:

```
knocker_landing/storage/          → 775
knocker_landing/bootstrap/cache/  → 775
```

In cPanel File Manager: right-click folder → Change Permissions → `775`.

---

## Step 6 — Verify

| URL | Expected |
|---|---|
| `https://yourdomain.com/` | React landing page |
| `https://yourdomain.com/admin` | Admin panel |
| `https://yourdomain.com/api/content/home` | JSON content |

---

## Updating the site later

When you change frontend or backend code:

1. Run `.\scripts\deploy-build.ps1` locally
2. Re-upload changed files:
   - Frontend changes → `public_html/` (index.html, assets/)
   - Backend changes → `knocker_landing/` (app/, routes/, etc.)
3. If routes/config changed and you have SSH: `php artisan config:cache && php artisan route:cache`

---

## Troubleshooting

**500 error**
- Check `knocker_landing/storage/logs/laravel.log`
- Confirm `APP_KEY` is set
- Confirm `vendor/` was uploaded

**Blank page / "Frontend not built"**
- Confirm `index.html` exists in `public_html/`
- Confirm `APP_PUBLIC_PATH` points to `public_html` in `.env`

**API works but pages 404 or 500 on `/admin`, `/about`, etc.**
- Replace `public_html/.htaccess` with the SPA version from `deploy/public_html/.htaccess`
- Only `/api/*` should go through Laravel `index.php`; all other routes should fall back to `index.html`

**500 error on non-home pages**
- Homepage works because Apache serves `index.html` directly
- Other routes were hitting Laravel and failing — the updated `.htaccess` fixes this
- Also confirm in `.env`: `APP_PUBLIC_PATH=/home/knockenq/public_html`
- Check `knocker_landing/storage/logs/laravel.log` for API errors

**Database connection error**
- Use `localhost` as `DB_HOST` on shared hosting (not `127.0.0.1` on some hosts)
