/**
 * Script pour remplir la base de données de production avec des données de test
 * Usage: node seed-database.js
 */

import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

async function seedDatabase() {
  console.log('🌱 Démarrage du seed de la base de données...\n');

  let connection;

  try {
    // Connexion à la base de données
    console.log('📡 Connexion à la base de données OVH...');
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT || '3306'),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      multipleStatements: true, // Important pour exécuter plusieurs requêtes
      ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
    });

    console.log('✅ Connecté à la base de données\n');

    // Lire le fichier SQL
    console.log('📖 Lecture du fichier seed-production.sql...');
    const sqlFile = path.join(__dirname, 'seed-production.sql');
    const sql = fs.readFileSync(sqlFile, 'utf8');

    console.log('✅ Fichier SQL chargé\n');

    // Exécuter le SQL
    console.log('🚀 Exécution des requêtes SQL...');
    console.log('⏳ Cela peut prendre quelques secondes...\n');

    const [results] = await connection.query(sql);

    console.log('✅ Requêtes exécutées avec succès !\n');

    // Afficher les résultats
    console.log('📊 Résumé :');
    console.log('═══════════════════════════════════════');

    // Compter les enregistrements
    const [users] = await connection.query('SELECT COUNT(*) as count FROM users');
    const [posts] = await connection.query('SELECT COUNT(*) as count FROM posts');
    const [categories] = await connection.query('SELECT COUNT(*) as count FROM menu_categories');
    const [items] = await connection.query('SELECT COUNT(*) as count FROM menu_items');
    const [scores] = await connection.query('SELECT COUNT(*) as count FROM game_scores');
    const [legends] = await connection.query('SELECT COUNT(*) as count FROM legends');

    console.log(`✓ Utilisateurs créés      : ${users[0].count}`);
    console.log(`✓ Posts (avis) créés      : ${posts[0].count}`);
    console.log(`✓ Catégories menu créées  : ${categories[0].count}`);
    console.log(`✓ Items menu créés        : ${items[0].count}`);
    console.log(`✓ Scores de jeu créés     : ${scores[0].count}`);
    console.log(`✓ Légendes créées         : ${legends[0].count}`);
    console.log('═══════════════════════════════════════\n');

    console.log('🎉 Base de données remplie avec succès !');
    console.log('👉 Votre site peut maintenant afficher des données réelles\n');

  } catch (error) {
    console.error('❌ Erreur lors du seed de la base de données :');
    console.error(error.message);
    
    if (error.code === 'ECONNREFUSED') {
      console.error('\n💡 La connexion a été refusée. Vérifiez :');
      console.error('   - Que les variables DB_HOST, DB_PORT, DB_USER, DB_PASSWORD sont correctes');
      console.error('   - Que votre IP est autorisée sur OVH');
    } else if (error.code === 'ER_ACCESS_DENIED_ERROR') {
      console.error('\n💡 Accès refusé. Vérifiez vos identifiants DB_USER et DB_PASSWORD');
    } else if (error.code === 'ER_BAD_DB_ERROR') {
      console.error('\n💡 Base de données introuvable. Vérifiez DB_NAME');
    }

    process.exit(1);
  } finally {
    if (connection) {
      await connection.end();
      console.log('🔌 Connexion fermée');
    }
  }
}

// Exécuter le script
seedDatabase();

