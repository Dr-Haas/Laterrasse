// Script de test de connexion à la base de données
import mysql from 'mysql2/promise';

const config = {
  host: 'hg101756-001.eu.clouddb.ovh.net',
  port: 35419,
  user: 'admin',
  password: 'laterrass',
  database: 'Laterrasse2025'
};

async function testConnection() {
  console.log('🔌 Test de connexion à la base de données...\n');
  console.log('📍 Serveur:', config.host);
  console.log('🔢 Port:', config.port);
  console.log('👤 Utilisateur:', config.user);
  console.log('🗄️  Base de données:', config.database);
  console.log('\n⏳ Connexion en cours...\n');

  try {
    const connection = await mysql.createConnection(config);
    
    console.log('✅ Connexion réussie !\n');
    
    // Tester une requête simple
    const [rows] = await connection.execute('SELECT DATABASE() as db, VERSION() as version');
    console.log('📊 Informations de la base :');
    console.log('  - Base de données:', rows[0].db);
    console.log('  - Version MySQL:', rows[0].version);
    console.log('\n');
    
    // Lister les tables existantes
    const [tables] = await connection.execute('SHOW TABLES');
    console.log('📋 Tables existantes:', tables.length > 0 ? tables.length : '0 (vide)');
    if (tables.length > 0) {
      tables.forEach(table => {
        console.log('  -', Object.values(table)[0]);
      });
    }
    
    await connection.end();
    console.log('\n✨ Test terminé avec succès !');
    console.log('\n🎯 Vous pouvez maintenant exécuter :');
    console.log('   npm run db:setup');
    
  } catch (error) {
    console.error('❌ Erreur de connexion:', error.message);
    console.error('\n🔍 Vérifiez :');
    console.error('  - Que votre IP est autorisée dans OVH CloudDB');
    console.error('  - Que les identifiants sont corrects');
    console.error('  - Que le serveur est accessible depuis votre réseau');
    process.exit(1);
  }
}

testConnection();

