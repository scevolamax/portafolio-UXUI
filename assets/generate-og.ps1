# Script de generación de Open Graph Preview (1200x630px -> assets/og-preview.webp)
# Paleta: Estética "Horología & Editorial Técnica" (#F6F5F2, #0F172A, #1E40AF, #475569)

Add-Type -AssemblyName System.Drawing

$width = 1200
$height = 630
$bmpPath = Join-Path $PSScriptRoot "og-temp.png"
$webpPath = Join-Path $PSScriptRoot "og-preview.webp"

$bitmap = New-Object System.Drawing.Bitmap($width, $height)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

# Colores del Design System
$bgPrimary = [System.Drawing.ColorTranslator]::FromHtml("#F6F5F2")
$bgCard = [System.Drawing.ColorTranslator]::FromHtml("#FFFFFF")
$textPrimary = [System.Drawing.ColorTranslator]::FromHtml("#0F172A")
$textSecondary = [System.Drawing.ColorTranslator]::FromHtml("#475569")
$accentPrimary = [System.Drawing.ColorTranslator]::FromHtml("#1E40AF")
$borderSubtle = [System.Drawing.ColorTranslator]::FromHtml("#CBD5E1")
$statusSuccess = [System.Drawing.ColorTranslator]::FromHtml("#15803D")

# Fondo base
$graphics.Clear($bgPrimary)

# Tarjeta interior editorial (1104x534)
$cardRect = New-Object System.Drawing.Rectangle(48, 48, 1104, 534)
$cardBrush = New-Object System.Drawing.SolidBrush($bgCard)
$borderPen = New-Object System.Drawing.Pen($borderSubtle, 2)
$graphics.FillRectangle($cardBrush, $cardRect)
$graphics.DrawRectangle($borderPen, $cardRect)

# Barra superior de acento azul cobalto (#1E40AF)
$accentBrush = New-Object System.Drawing.SolidBrush($accentPrimary)
$graphics.FillRectangle($accentBrush, 48, 48, 1104, 10)

# Badge Logo MVS (#1E40AF con letras #FFFFFF)
$graphics.FillRectangle($accentBrush, 104, 108, 68, 68)
$whiteBrush = New-Object System.Drawing.SolidBrush([System.Drawing.Color]::White)
$fontLogo = New-Object System.Drawing.Font("Segoe UI", 22, [System.Drawing.FontStyle]::Bold)
$graphics.DrawString("MVS", $fontLogo, $whiteBrush, 110, 122)

# Indicador de disponibilidad
$successBrush = New-Object System.Drawing.SolidBrush($statusSuccess)
$graphics.FillEllipse($successBrush, 196, 134, 14, 14)
$secBrush = New-Object System.Drawing.SolidBrush($textSecondary)
$fontBadge = New-Object System.Drawing.Font("Segoe UI", 14, [System.Drawing.FontStyle]::Bold)
$graphics.DrawString("PORTFOLIO UX/UI & SOFTWARE ENGINEERING · 2026", $fontBadge, $secBrush, 220, 128)

# Nombre Principal (H1)
$priBrush = New-Object System.Drawing.SolidBrush($textPrimary)
$fontTitle = New-Object System.Drawing.Font("Segoe UI", 44, [System.Drawing.FontStyle]::Bold)
$graphics.DrawString("Máximo Valentino Scévola", $fontTitle, $priBrush, 98, 210)

# Rol Híbrido
$fontRole = New-Object System.Drawing.Font("Segoe UI", 28, [System.Drawing.FontStyle]::Bold)
$graphics.DrawString("Diseñador UX/UI & Desarrollador de Software", $fontRole, $accentBrush, 100, 290)

# Propuesta de valor
$fontDesc = New-Object System.Drawing.Font("Segoe UI", 18, [System.Drawing.FontStyle]::Regular)
$descRect = New-Object System.Drawing.RectangleF(104, 365, 980, 90)
$graphics.DrawString(
  "Interfaces intuitivas y accesibles (WCAG 2.2 AA) respaldadas por arquitecturas limpias en Python, FastAPI y JavaScript.",
  $fontDesc,
  $secBrush,
  $descRect
)

# Pie de tarjeta (Stack & Ubicación)
$fontFooter = New-Object System.Drawing.Font("Segoe UI", 15, [System.Drawing.FontStyle]::Bold)
$graphics.DrawString("Figma · Design Systems · HTML5/CSS3 · Python · FastAPI · UADER FCyT", $fontFooter, $priBrush, 104, 495)

$bitmap.Save($bmpPath, [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()

# Convertir a WebP optimizado con ffmpeg
& ffmpeg -y -i $bmpPath -vframes 1 -lossless 1 $webpPath | Out-Null
Remove-Item $bmpPath -Force
Write-Output "Generated: $webpPath"

