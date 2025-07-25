#!/bin/bash

# EventsOS Marketing Page Setup Script
# This script sets up the marketing website with MUI v6 compatibility

set -e  # Exit on error

echo "🚀 Starting EventsOS Marketing Page Setup..."
echo "============================================"

# Set working directory
EVENTOS_ROOT="/home/sk/fx/eventos"
WEBSITE_DIR="$EVENTOS_ROOT/apps/website"

# Check if we're in the right directory
if [ ! -f "$EVENTOS_ROOT/pnpm" ]; then
    echo "❌ Error: pnpm not found at $EVENTOS_ROOT"
    echo "Please ensure you're running this from the EventsOS root directory"
    exit 1
fi

echo "✅ Found EventsOS root at: $EVENTOS_ROOT"

# Create website directory structure
echo ""
echo "📁 Creating website directory structure..."
mkdir -p "$WEBSITE_DIR/src/app/(marketing)"
mkdir -p "$WEBSITE_DIR/src/components"
mkdir -p "$WEBSITE_DIR/src/styles"
mkdir -p "$WEBSITE_DIR/src/hooks"
mkdir -p "$WEBSITE_DIR/src/utils"
mkdir -p "$WEBSITE_DIR/public/images"

# Create package.json with exact versions matching admin
echo ""
echo "📦 Creating package.json with React 18.3.1..."
cat > "$WEBSITE_DIR/package.json" << 'EOF'
{
  "name": "@eventos/website",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev -p 3000",
    "build": "next build",
    "start": "next start -p 3000",
    "lint": "next lint",
    "type-check": "tsc --noEmit"
  }
}
EOF

# Navigate to website directory
cd "$WEBSITE_DIR"

# Install dependencies with exact versions
echo ""
echo "📥 Installing dependencies (this may take a moment)..."
$EVENTOS_ROOT/pnpm add \
  react@18.3.1 \
  react-dom@18.3.1 \
  next@14.2.30 \
  @mui/material@6.5.0 \
  @mui/icons-material@6.5.0 \
  @mui/lab@6.5.0 \
  @mui/material-nextjs@6.5.0 \
  @emotion/react@11.11.4 \
  @emotion/styled@11.11.5 \
  @emotion/cache@11.11.0 \
  -E

# Install dev dependencies
$EVENTOS_ROOT/pnpm add -D \
  @types/node@^18.16.2 \
  @types/react@^18.0.0 \
  @types/react-dom@^18.0.0 \
  typescript@^5.4.2 \
  eslint@^8 \
  eslint-config-next@14.2.30

echo ""
echo "✅ Dependencies installed successfully!"

# Verify React version matches admin
echo ""
echo "🔍 Verifying React version alignment..."
echo "Admin React version:"
cd "$EVENTOS_ROOT/apps/admin" && $EVENTOS_ROOT/pnpm list react | grep "^react "
echo "Website React version:"
cd "$WEBSITE_DIR" && $EVENTOS_ROOT/pnpm list react | grep "^react "

echo ""
echo "✅ Setup complete! Next steps:"
echo "1. Run: cd $WEBSITE_DIR"
echo "2. Run: $EVENTOS_ROOT/pnpm dev"
echo "3. Visit: http://localhost:3000"
