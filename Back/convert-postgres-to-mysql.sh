#!/bin/bash

# Script pour convertir la syntaxe PostgreSQL vers MySQL dans les controllers

cd /Users/garyhaas/Desktop/LaTerrasse/Back/src/controllers

echo "🔧 Conversion PostgreSQL → MySQL"
echo ""

for file in *.js; do
  if [ -f "$file" ]; then
    echo "📝 Conversion de $file..."
    
    # Sauvegarder l'original
    cp "$file" "$file.bak"
    
    # Convertir $1, $2, $3, etc. en ?
    # Note: Cette commande est simplifiée, il faudra vérifier manuellement
    sed -i '' 's/\$[0-9]\+/?/g' "$file"
    
    # Convertir ::INTEGER en CAST(...AS SIGNED)
    # Cette conversion est plus complexe et nécessite un traitement manuel
    
    echo "✅ $file converti (backup: $file.bak)"
  fi
done

echo ""
echo "⚠️  ATTENTION : Vérifiez manuellement les fichiers !"
echo "   Les backups sont dans *.bak"

