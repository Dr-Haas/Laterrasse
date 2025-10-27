import mysql from 'mysql2/promise';
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';

dotenv.config();

async function insertData() {
  let connection;
  
  try {
    connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    });

    console.log('✅ Connecté à MySQL\n');
    console.log('🌱 Insertion des données initiales...\n');

    // Hash du mot de passe "password123"
    const passwordHash = await bcrypt.hash('password123', 10);

    // Insérer les utilisateurs
    console.log('👥 Création des utilisateurs...');
    await connection.execute(`
      INSERT INTO users (id, email, password_hash, username, role) VALUES
      (UUID(), 'admin@laterrasse.fr', ?, 'Admin', 'admin'),
      (UUID(), 'mehmet@laterrasse.fr', ?, 'Mehmet', 'admin'),
      (UUID(), 'client@example.com', ?, 'Client Test', 'user')
    `, [passwordHash, passwordHash, passwordHash]);
    console.log('✅ 3 utilisateurs créés\n');

    // Insérer les catégories du menu
    console.log('📦 Création des catégories du menu...');
    await connection.execute(`
      INSERT INTO menu_categories (id, name, slug, description, icon, display_order) VALUES
      (UUID(), 'Sandwiches', 'sandwiches', 'Nos kebabs et galettes', '🌯', 1),
      (UUID(), 'Burgers', 'burgers', 'Burgers maison gourmands', '🍔', 2),
      (UUID(), 'Assiettes', 'assiettes', 'Assiettes copieuses', '🍽️', 3),
      (UUID(), 'Box & Menus', 'box', 'Nos formules et box', '📦', 4),
      (UUID(), 'Accompagnements', 'accompagnements', 'Frites, nuggets, wings...', '🍟', 5),
      (UUID(), 'Boissons', 'boissons', 'Canettes, bouteilles, café', '🥤', 6)
    `);
    console.log('✅ 6 catégories créées\n');

    // Récupérer l'ID de la catégorie sandwiches
    const [categories] = await connection.execute('SELECT id, slug FROM menu_categories');
    const categoriesMap = {};
    categories.forEach(cat => {
      categoriesMap[cat.slug] = cat.id;
    });

    // Insérer quelques items du menu
    console.log('🍔 Ajout d\'items au menu...');
    
    // Sandwiches
    await connection.execute(`
      INSERT INTO menu_items (id, category_id, name, description, badge, prices, popular, display_order) VALUES
      (UUID(), ?, 'Pain Rond', 'Le classique kebab en pain moelleux', '🔥 TOP', 
       '[{"label":"Seul","price":6},{"label":"+ Frites","price":7},{"label":"Menu complet","price":8}]', 
       true, 1),
      (UUID(), ?, 'Galette', 'Roulé dans une galette croustillante', NULL,
       '[{"label":"Seul","price":6},{"label":"+ Frites","price":7},{"label":"Menu complet","price":8}]',
       false, 2),
      (UUID(), ?, 'Tacos', 'Tacos français, grillé et généreux', '😋 GOURMAND',
       '[{"label":"Seul","price":7},{"label":"+ Frites","price":8},{"label":"Menu complet","price":9}]',
       false, 3)
    `, [categoriesMap.sandwiches, categoriesMap.sandwiches, categoriesMap.sandwiches]);

    // Burgers
    await connection.execute(`
      INSERT INTO menu_items (id, category_id, name, description, prices, popular, display_order) VALUES
      (UUID(), ?, 'Cheeseburger', 'Burger maison avec cheddar fondant',
       '[{"label":"Simple","price":8},{"label":"Menu simple","price":10},{"label":"Double","price":10},{"label":"Menu double","price":12}]',
       true, 1)
    `, [categoriesMap.burgers]);

    // Boissons
    await connection.execute(`
      INSERT INTO menu_items (id, category_id, name, description, prices, display_order) VALUES
      (UUID(), ?, 'Canettes', 'Coca, Fanta, Sprite, Oasis...',
       '[{"label":"La canette","price":2}]', 1),
      (UUID(), ?, 'Café', 'Expresso ou allongé',
       '[{"label":"La tasse","price":1}]', 2)
    `, [categoriesMap.boissons, categoriesMap.boissons]);

    console.log('✅ Items du menu ajoutés\n');

    // Scores de jeu
    console.log('🎮 Ajout de scores de jeu...');
    await connection.execute(`
      INSERT INTO game_scores (id, player_name, score, difficulty) VALUES
      (UUID(), 'Mehmet', 9999, 'hard'),
      (UUID(), 'Champion', 5000, 'hard'),
      (UUID(), 'ProGamer', 3500, 'medium'),
      (UUID(), 'Débutant', 1200, 'easy')
    `);
    console.log('✅ 4 scores ajoutés\n');

    // Légendes
    console.log('🏆 Ajout de légendes...');
    await connection.execute(`
      INSERT INTO legends (id, name, anecdote, category, approved) VALUES
      (UUID(), ?, ?, 'mangeur', true),
      (UUID(), ?, ?, 'fidele', true),
      (UUID(), ?, ?, 'drole', true)
    `, [
      'Jean-Claude', 'A mangé 15 kebabs en une semaine. Une vraie légende !',
      'Marie', 'Cliente fidèle depuis 10 ans, vient tous les jours !',
      'Ahmed', 'Toujours une blague à raconter, l\'ambiance c\'est lui !'
    ]);
    console.log('✅ 3 légendes ajoutées\n');

    console.log('🎉 Toutes les données initiales ont été insérées avec succès !\n');

    // Afficher un résumé
    const [userCount] = await connection.execute('SELECT COUNT(*) as count FROM users');
    const [categoryCount] = await connection.execute('SELECT COUNT(*) as count FROM menu_categories');
    const [itemCount] = await connection.execute('SELECT COUNT(*) as count FROM menu_items');
    const [scoresCount] = await connection.execute('SELECT COUNT(*) as count FROM game_scores');
    const [legendsCount] = await connection.execute('SELECT COUNT(*) as count FROM legends');

    console.log('📊 Résumé :');
    console.log(`  - ${userCount[0].count} utilisateurs`);
    console.log(`  - ${categoryCount[0].count} catégories de menu`);
    console.log(`  - ${itemCount[0].count} items au menu`);
    console.log(`  - ${scoresCount[0].count} scores de jeu`);
    console.log(`  - ${legendsCount[0].count} légendes`);

    console.log('\n✨ Base de données prête à l\'emploi !\n');
    console.log('🎯 Vous pouvez maintenant démarrer le serveur :');
    console.log('   npm run dev\n');

    await connection.end();
  } catch (error) {
    console.error('❌ Erreur:', error.message);
    process.exit(1);
  }
}

insertData();

