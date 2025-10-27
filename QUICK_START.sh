#!/bin/bash

echo "🚀 Démarrage de La Terrasse en mode développement"
echo ""
echo "⚠️  Vous allez avoir besoin de 2 terminaux :"
echo ""
echo "📍 Terminal actuel : Backend API"
echo "   cd Back && npm start"
echo ""
echo "📍 Terminal 2 (à ouvrir) : Frontend"
echo "   cd Front && npm run dev"
echo ""
read -p "Appuyez sur Entrée pour démarrer le BACKEND dans ce terminal..."

cd Back
npm start
