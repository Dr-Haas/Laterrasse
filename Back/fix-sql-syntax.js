import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const controllersDir = path.join(__dirname, 'src/controllers');

// Fonction pour convertir $1, $2, etc. en ?
function convertPostgresToMySQL(content) {
  // Remplacer $1, $2, $3, etc. par ?
  let result = content;
  
  // Trouver toutes les requêtes SQL
  const sqlRegex = /`([^`]*\$\d+[^`]*)`/g;
  
  result = result.replace(sqlRegex, (match) => {
    // Remplacer $1, $2, $3, etc. par ?
    let converted = match;
    // On remplace dans l'ordre décroissant pour éviter les problèmes ($10 avant $1)
    for (let i = 20; i >= 1; i--) {
      converted = converted.replace(new RegExp(`\\$${i}\\b`, 'g'), '?');
    }
    return converted;
  });
  
  // Aussi remplacer les $1, $2 dans les strings simples
  result = result.replace(/(['"])([^'"]*\$\d+[^'"]*)\1/g, (match, quote, content) => {
    let converted = content;
    for (let i = 20; i >= 1; i--) {
      converted = converted.replace(new RegExp(`\\$${i}\\b`, 'g'), '?');
    }
    return quote + converted + quote;
  });
  
  return result;
}

// Lire et convertir tous les fichiers controllers
const files = fs.readdirSync(controllersDir);

console.log('🔄 Conversion de la syntaxe PostgreSQL vers MySQL...\n');

files.forEach(file => {
  if (file.endsWith('.js')) {
    const filePath = path.join(controllersDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    
    if (content.includes('$1') || content.includes('$2')) {
      console.log(`📝 Conversion de ${file}...`);
      const converted = convertPostgresToMySQL(content);
      fs.writeFileSync(filePath, converted, 'utf8');
      console.log(`✅ ${file} converti\n`);
    } else {
      console.log(`⏭️  ${file} - Déjà OK\n`);
    }
  }
});

console.log('🎉 Conversion terminée !');

