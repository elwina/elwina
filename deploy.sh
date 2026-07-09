#!/bin/bash
set -e

SERVER="ubuntu@101.43.29.222"

deploy_to() {
    local domain=$1
    local path=$2

    echo "🚀 Deploying to $domain ($path)..."

    # Build with correct BASE_PATH and SITE_URL
    echo "📦 Building with SITE_URL=https://$domain ..."
    SITE_URL="https://$domain" npm run build

    # Clear remote directory
    echo "🗑️  Clearing remote directory..."
    ssh $SERVER "rm -rf $path/*"

    # Upload
    echo "📤 Uploading..."
    scp -r dist/* $SERVER:$path/

    # Verify
    echo "🔍 Verifying..."
    status=$(curl -sI -o /dev/null -w "%{http_code}" "https://$domain")
    if [ "$status" = "200" ]; then
        echo "✅ $domain deployed successfully (HTTP $status)"
    else
        echo "❌ $domain failed (HTTP $status)"
    fi
    echo ""
}

echo "=============================="
echo "  Deploy to www & about"
echo "=============================="
echo ""

# Deploy to both domains (root domains use base path /)
deploy_to "www.elwina.work" "/srv/www"
deploy_to "about.elwina.work" "/srv/about"

echo "=============================="
echo "  All deployments complete!"
echo "=============================="
