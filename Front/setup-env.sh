#!/bin/bash

# Script de configuration des variables d'environnement
# pour La Terrasse Frontend

echo "🔧 Configuration des variables d'environnement"
echo ""

# Créer .env.local pour le développement
if [ ! -f .env.local ]; then
  echo "📝 Création de .env.local..."
  cat > .env.local << 'EOF'
# Variables d'environnement - Développement Local
# URL de l'API Backend en local
NEXT_PUBLIC_API_URL=http://localhost:3001
EOF
  echo "✅ .env.local créé"
else
  echo "ℹ️  .env.local existe déjà"
fi

echo ""

# Créer .env.production pour la production
if [ ! -f .env.production ]; then
  echo "📝 Création de .env.production..."
  cat > .env.production << 'EOF'
# Variables d'environnement - Production
# URL de l'API Backend sur Render
NEXT_PUBLIC_API_URL=https://laterrasse.onrender.com
EOF
  echo "✅ .env.production créé"
else
  echo "ℹ️  .env.production existe déjà"
fi

echo ""
echo "🎉 Configuration terminée !"
echo ""
echo "Pour développer en local :"
echo "  npm run dev"
echo ""
echo "Pour builder pour la production :"
echo "  npm run build"
echo ""

