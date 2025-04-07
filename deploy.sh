#!/bin/bash

echo "📥 Pulling latest code..."
git pull

echo "📦 Installing dependencies..."
npm install

echo "🏗️ Building the Next.js app..."
npm run build

echo "🔁 Restarting PM2 app..."
pm2 restart stockey-app

echo "✅ Deployment complete. Check https://www.stockey.io"
