$src = Join-Path $PSScriptRoot '..\src\assets\bknd-logo.png'
$destDir = Join-Path $PSScriptRoot '..\public'
$dest = Join-Path $destDir 'bknd-logo.png'

if (-not (Test-Path $src)) {
    Write-Error "Source file not found: $src"
    exit 1
}

if (-not (Test-Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir | Out-Null
}

Copy-Item -Path $src -Destination $dest -Force
Write-Host "Copied $src to $dest"