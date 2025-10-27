#!/bin/bash

# Script de configuration de l'environnement
# Usage: chmod +x configure-env.sh && ./configure-env.sh

echo "🔧 Configuration de l'environnement pour La Terrasse"
echo "=================================================="
echo ""

# Créer le fichier .env avec les paramètres OVH
cat > .env << 'EOF'
# Configuration du serveur
PORT=3001
NODE_ENV=development

# Base de données MySQL - OVH CloudDB
DB_HOST=hg101756-001.eu.clouddb.ovh.net
DB_PORT=35419
DB_USER=admin
DB_PASSWORD=laterrass
DB_NAME=Laterrasse2025

# JWT Secret
JWT_SECRET=laterrasse_secret_key_change_in_production_2025_ovh_clouddb
JWT_EXPIRES_IN=7d

# CORS - URL du frontend
FRONTEND_URL=http://localhost:3000

# Upload d'images
UPLOAD_DIR=./uploads
MAX_FILE_SIZE=5242880

# URLs
BASE_URL=http://localhost:3001
EOF

echo "✅ Fichier .env créé avec succès !"
echo ""
echo "📝 Paramètres configurés :"
echo "  - Host: hg101756-001.eu.clouddb.ovh.net"
echo "  - Port: 35419"
echo "  - User: admin"
echo "  - Database: Laterrasse2025"
echo ""
echo "🎯 Prochaines étapes :"
echo "  1. npm install"
echo "  2. npm run db:setup"
echo "  3. npm run dev"
echo ""

