import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import pool from '../config/database.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function setupDatabase() {
  console.log('🚀 Configuration de la base de données MySQL...\n');
  
  let connection;
  
  try {
    connection = await pool.getConnection();
    
    // Lire le fichier schema.sql
    const schemaPath = path.join(__dirname, 'schema.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    console.log('📄 Exécution du schéma SQL...');
    
    // Diviser les commandes SQL (gérer les DELIMITER)
    const commands = schema.split(/;\s*$/gm).filter(cmd => cmd.trim());
    
    for (const command of commands) {
      const trimmedCommand = command.trim();
      if (trimmedCommand && !trimmedCommand.startsWith('--')) {
        try {
          await connection.query(trimmedCommand);
        } catch (err) {
          // Ignorer certaines erreurs non critiques
          if (!err.message.includes('already exists') && !err.message.includes('DELIMITER')) {
            console.warn('⚠️  Avertissement:', err.message);
          }
        }
      }
    }
    
    console.log('✅ Schéma créé avec succès !\n');
    
    // Lire le fichier seed.sql
    const seedPath = path.join(__dirname, 'seed.sql');
    const seed = fs.readFileSync(seedPath, 'utf8');
    
    console.log('🌱 Insertion des données initiales...');
    
    const seedCommands = seed.split(/;\s*$/gm).filter(cmd => cmd.trim());
    
    for (const command of seedCommands) {
      const trimmedCommand = command.trim();
      if (trimmedCommand && !trimmedCommand.startsWith('--')) {
        try {
          await connection.query(trimmedCommand);
        } catch (err) {
          if (!err.message.includes('Duplicate entry')) {
            console.warn('⚠️  Avertissement:', err.message);
          }
        }
      }
    }
    
    console.log('✅ Données insérées avec succès !\n');
    
    console.log('🎉 Base de données configurée avec succès !');
    
  } catch (error) {
    console.error('❌ Erreur lors de la configuration:', error.message);
    process.exit(1);
  } finally {
    if (connection) {
      connection.release();
    }
    await pool.end();
  }
}

setupDatabase();
