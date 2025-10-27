/**
 * Script pour convertir automatiquement PostgreSQL → MySQL dans tous les controllers
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const controllersDir = path.join(__dirname, 'src/controllers');

// Liste des fichiers à convertir (gameScoresController déjà fait)
const filesToFix = [
  'postsController.js',
  'legendsController.js',
  'menuController.js',
  'authController.js',
  'commentsController.js'
];

function convertPostgresToMySQL(content) {
  let fixed = content;
  
  // 1. Convertir ::INTEGER en CAST(...AS SIGNED)
  fixed = fixed.replace(/::INTEGER/g, ''); // MySQL convertit automatiquement
  
  // 2. Convertir RETURNING * (ne fonctionne pas en MySQL)
  fixed = fixed.replace(/RETURNING \*/g, '');
  
  // 3. Convertir COUNT(*) FILTER en SUM(CASE WHEN...)
  fixed = fixed.replace(/COUNT\(\*\) FILTER \(WHERE ([^)]+)\)/g, 'SUM(CASE WHEN $1 THEN 1 ELSE 0 END)');
  
  // 4. Ajouter AS count pour les COUNT(*)
  fixed = fixed.replace(/SELECT COUNT\(\*\)/g, 'SELECT COUNT(*) AS count');
  
  return fixed;
}

function convertParametersManually(content, filename) {
  // Cette fonction est complexe car elle doit réécrire l'ordre des paramètres
  // Pour l'instant, on fait juste un remplacement simple
  let fixed = content;
  
  // Remplacer tous les $N par ? (attention, cela peut casser l'ordre!)
  fixed = fixed.replace(/\$(\d+)/g, '?');
  
  console.warn(`⚠️  ${filename}: Les paramètres ont été convertis automatiquement.`);
  console.warn(`    Vérifiez manuellement l'ordre des paramètres dans le code!`);
  
  return fixed;
}

console.log('🔧 Conversion automatique PostgreSQL → MySQL\n');

filesToFix.forEach(filename => {
  const filePath = path.join(controllersDir, filename);
  
  if (!fs.existsSync(filePath)) {
    console.log(`⏭️  ${filename} n'existe pas, ignoré`);
    return;
  }
  
  console.log(`📝 Traitement de ${filename}...`);
  
  // Lire le fichier
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Sauvegarder l'original
  fs.writeFileSync(filePath + '.backup', content);
  
  // Convertir
  content = convertPostgresToMySQL(content);
  content = convertParametersManually(content, filename);
  
  // Écrire le fichier
  fs.writeFileSync(filePath, content);
  
  console.log(`✅ ${filename} converti (backup: ${filename}.backup)\n`);
});

console.log('✨ Conversion terminée!');
console.log('⚠️  IMPORTANT : Vérifiez les fichiers manuellement avant de commit!');

