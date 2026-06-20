$ErrorActionPreference = "Stop"
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$Output = Join-Path $Root "deploy\output"
$LaravelOut = Join-Path $Output "knocker_landing"
$PublicOut = Join-Path $Output "public_html"

Write-Host "==> Building React frontend..." -ForegroundColor Cyan
Set-Location $Root
npm run build

Write-Host "==> Installing production PHP dependencies..." -ForegroundColor Cyan
composer install --no-dev --optimize-autoloader --no-interaction

Write-Host "==> Preparing deploy folders..." -ForegroundColor Cyan
if (Test-Path $Output) { Remove-Item -Recurse -Force $Output }
New-Item -ItemType Directory -Path $LaravelOut -Force | Out-Null
New-Item -ItemType Directory -Path $PublicOut -Force | Out-Null

$LaravelDirs = @("app", "bootstrap", "config", "database", "resources", "routes", "storage", "vendor")
foreach ($dir in $LaravelDirs) {
    Copy-Item -Recurse (Join-Path $Root $dir) (Join-Path $LaravelOut $dir)
}

$LaravelFiles = @("artisan", "composer.json", "composer.lock")
foreach ($file in $LaravelFiles) {
    Copy-Item (Join-Path $Root $file) (Join-Path $LaravelOut $file)
}

Copy-Item (Join-Path $Root "deploy\.env.production.example") (Join-Path $LaravelOut ".env.example")

Write-Host "==> Copying built frontend to public_html..." -ForegroundColor Cyan
$PublicSrc = Join-Path $Root "public"
Get-ChildItem $PublicSrc | ForEach-Object {
    Copy-Item $_.FullName (Join-Path $PublicOut $_.Name) -Recurse -Force
}

Copy-Item (Join-Path $Root "deploy\public_html\index.php") (Join-Path $PublicOut "index.php") -Force
Copy-Item (Join-Path $Root "deploy\public_html\.htaccess") (Join-Path $PublicOut ".htaccess") -Force

Write-Host ""
Write-Host "Deploy package ready!" -ForegroundColor Green
Write-Host "  Laravel app : deploy\output\knocker_landing\"
Write-Host "  Web root    : deploy\output\public_html\"
Write-Host ""
Write-Host "Upload knocker_landing/ and public_html/ to your server." -ForegroundColor Yellow
Write-Host "See DEPLOY.md for full instructions."
