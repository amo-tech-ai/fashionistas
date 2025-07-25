#!/bin/bash

# EventsOS Marketing Page Implementation Script
# Sets up the marketing website components

set -e

echo "🎨 Creating EventsOS Marketing Page Components..."
echo "==============================================="

WEBSITE_DIR="/home/sk/fx/eventos/apps/website"
cd "$WEBSITE_DIR"

# Create next.config.mjs
echo "⚙️ Creating Next.js configuration..."
cat > next.config.mjs << 'EOF'
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  modularizeImports: {
    '@mui/icons-material': {
      transform: '@mui/icons-material/{{member}}',
    },
    '@mui/material': {
      transform: '@mui/material/{{member}}',
    },
  },
}

export default nextConfig
EOF

# Create tsconfig.json
echo "📝 Creating TypeScript configuration..."
cat > tsconfig.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "forceConsistentCasingInFileNames": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
EOF

# Create .eslintrc.json
echo "🔍 Creating ESLint configuration..."
cat > .eslintrc.json << 'EOF'
{
  "extends": "next/core-web-vitals"
}
EOF

echo "✅ Configuration files created!"
echo ""
echo "📦 Installing correct MUI Lab version..."

# Get the exact MUI Lab version from admin
ADMIN_DIR="/home/sk/fx/eventos/apps/admin"
MUI_LAB_VERSION=$(cd "$ADMIN_DIR" && ../../pnpm list @mui/lab --json | grep -o '"version":"[^"]*"' | cut -d'"' -f4 | head -1)

echo "Found MUI Lab version in admin: $MUI_LAB_VERSION"

# Install with correct version
cd "$WEBSITE_DIR"
/home/sk/fx/eventos/pnpm add @mui/lab@"$MUI_LAB_VERSION" -E

echo ""
echo "✅ Marketing page setup complete!"
echo ""
echo "To continue with component creation, run:"
echo "cd $WEBSITE_DIR"
echo "/home/sk/fx/eventos/pnpm dev"
