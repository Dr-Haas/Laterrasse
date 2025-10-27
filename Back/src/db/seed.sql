-- ========================================
-- Données initiales pour La Terrasse - MySQL
-- ========================================

-- ========================================
-- Utilisateurs de test
-- ========================================
-- Mot de passe pour tous: "password123"
-- Hash bcrypt: $2a$10$rZ5YJZ3YjZ3YjZ3YjZ3YjeX5YJZ3YjZ3YjZ3YjZ3YjZ3YjZ3YjZ

INSERT INTO users (id, email, password_hash, username, role) VALUES
  (UUID(), 'admin@laterrasse.fr', '$2a$10$rZ5YJZ3YjZ3YjZ3YjZ3YjeX5YJZ3YjZ3YjZ3YjZ3YjZ3YjZ3YjZ', 'Admin', 'admin'),
  (UUID(), 'mehmet@laterrasse.fr', '$2a$10$rZ5YJZ3YjZ3YjZ3YjZ3YjeX5YJZ3YjZ3YjZ3YjZ3YjZ3YjZ3YjZ', 'Mehmet', 'admin'),
  (UUID(), 'client@example.com', '$2a$10$rZ5YJZ3YjZ3YjZ3YjZ3YjeX5YJZ3YjZ3YjZ3YjZ3YjZ3YjZ3YjZ', 'Client Test', 'user')
ON DUPLICATE KEY UPDATE email=email;

-- ========================================
-- Catégories du menu
-- ========================================
INSERT INTO menu_categories (id, name, slug, description, icon, display_order) VALUES
  (UUID(), 'Sandwiches', 'sandwiches', 'Nos kebabs et galettes', '🌯', 1),
  (UUID(), 'Burgers', 'burgers', 'Burgers maison gourmands', '🍔', 2),
  (UUID(), 'Assiettes', 'assiettes', 'Assiettes copieuses', '🍽️', 3),
  (UUID(), 'Box & Menus', 'box', 'Nos formules et box', '📦', 4),
  (UUID(), 'Accompagnements', 'accompagnements', 'Frites, nuggets, wings...', '🍟', 5),
  (UUID(), 'Boissons', 'boissons', 'Canettes, bouteilles, café', '🥤', 6)
ON DUPLICATE KEY UPDATE name=name;

-- ========================================
-- Articles du menu - Sandwiches
-- ========================================
INSERT INTO menu_items (id, category_id, name, description, badge, prices, popular, display_order)
SELECT 
  UUID(),
  id,
  'Pain Rond',
  'Le classique kebab en pain moelleux',
  '🔥 TOP',
  '[{"label": "Seul", "price": 6}, {"label": "+ Frites", "price": 7}, {"label": "Menu complet", "price": 8}]',
  true,
  1
FROM menu_categories WHERE slug = 'sandwiches' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Galette',
  'Roulé dans une galette croustillante',
  '[{"label": "Seul", "price": 6}, {"label": "+ Frites", "price": 7}, {"label": "Menu complet", "price": 8}]',
  2
FROM menu_categories WHERE slug = 'sandwiches' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Baguette',
  'Version française du kebab',
  '[{"label": "Seul", "price": 6}, {"label": "+ Frites", "price": 7}, {"label": "Menu complet", "price": 8}]',
  3
FROM menu_categories WHERE slug = 'sandwiches' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, badge, prices, display_order)
SELECT 
  UUID(),
  id,
  'Tacos',
  'Tacos français, grillé et généreux',
  '😋 GOURMAND',
  '[{"label": "Seul", "price": 7}, {"label": "+ Frites", "price": 8}, {"label": "Menu complet", "price": 9}]',
  4
FROM menu_categories WHERE slug = 'sandwiches' LIMIT 1;

-- ========================================
-- Articles du menu - Burgers
-- ========================================
INSERT INTO menu_items (id, category_id, name, description, prices, popular, display_order)
SELECT 
  UUID(),
  id,
  'Cheeseburger',
  'Burger maison avec cheddar fondant',
  '[{"label": "Simple", "price": 8}, {"label": "Menu simple", "price": 10}, {"label": "Double", "price": 10}, {"label": "Menu double", "price": 12}]',
  true,
  1
FROM menu_categories WHERE slug = 'burgers' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Cheese Chicken',
  'Tendre poulet pané et fromage',
  '[{"label": "Simple", "price": 8}, {"label": "Menu simple", "price": 10}, {"label": "Double", "price": 10}, {"label": "Menu double", "price": 12}]',
  2
FROM menu_categories WHERE slug = 'burgers' LIMIT 1;

-- ========================================
-- Articles du menu - Assiettes
-- ========================================
INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Assiette 1 Viande',
  'Viande au choix + frites + salade',
  '[{"label": "L\'assiette", "price": 12}]',
  1
FROM menu_categories WHERE slug = 'assiettes' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, badge, prices, display_order)
SELECT 
  UUID(),
  id,
  'Assiette 2-3 Viandes',
  'Mixez vos viandes préférées',
  '💪 COPIEUX',
  '[{"label": "L\'assiette", "price": 15}]',
  2
FROM menu_categories WHERE slug = 'assiettes' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Salade',
  'Tenders ou Falafel sur lit de salade',
  '[{"label": "Seule", "price": 7}, {"label": "Menu", "price": 8}]',
  3
FROM menu_categories WHERE slug = 'assiettes' LIMIT 1;

-- ========================================
-- Articles du menu - Box & Menus
-- ========================================
INSERT INTO menu_items (id, category_id, name, description, badge, prices, popular, display_order)
SELECT 
  UUID(),
  id,
  'Box Kebab Poulet',
  'Kebab poulet + frites avec cheddar fondu',
  '🧀 CHEDDAR',
  '[{"label": "Seule", "price": 8}, {"label": "Menu", "price": 10}]',
  true,
  1
FROM menu_categories WHERE slug = 'box' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Box 15 Pièces',
  '4 tenders + 6 nuggets + 5 wings',
  '[{"label": "Box seule", "price": 15}, {"label": "Menu (+2 frites +2 boissons)", "price": 20}]',
  2
FROM menu_categories WHERE slug = 'box' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, badge, prices, display_order)
SELECT 
  UUID(),
  id,
  'Box 20 Pièces',
  '6 tenders + 7 nuggets + 7 wings',
  '👨‍👩‍👧‍👦 PARTAGE',
  '[{"label": "Box seule", "price": 17}, {"label": "Menu (+3 frites +3 boissons)", "price": 25}]',
  3
FROM menu_categories WHERE slug = 'box' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, badge, prices, display_order)
SELECT 
  UUID(),
  id,
  'Menu Étudiant',
  'Sandwich + frites + boisson',
  '💰 BON PLAN',
  '[{"label": "Le menu", "price": 7.5}]',
  4
FROM menu_categories WHERE slug = 'box' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Menu Enfant',
  '4 nuggets ou petit burger + frites + Capri-Sun',
  '[{"label": "Le menu", "price": 7}]',
  5
FROM menu_categories WHERE slug = 'box' LIMIT 1;

-- ========================================
-- Articles du menu - Accompagnements
-- ========================================
INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Frites',
  'Croustillantes et dorées',
  '[{"label": "Petite", "price": 2}, {"label": "Moyenne", "price": 3}, {"label": "Grande", "price": 4}]',
  1
FROM menu_categories WHERE slug = 'accompagnements' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Nuggets',
  'Poulet pané croustillant',
  '[{"label": "5 pièces", "price": 4}, {"label": "7 pièces", "price": 5}, {"label": "10 pièces", "price": 8}]',
  2
FROM menu_categories WHERE slug = 'accompagnements' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Tenders',
  'Filets de poulet panés',
  '[{"label": "5 pièces", "price": 6}, {"label": "7 pièces", "price": 9}, {"label": "10 pièces", "price": 12}]',
  3
FROM menu_categories WHERE slug = 'accompagnements' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Wings',
  'Ailes de poulet épicées',
  '[{"label": "5 pièces", "price": 4}, {"label": "7 pièces", "price": 5}, {"label": "10 pièces", "price": 8}]',
  4
FROM menu_categories WHERE slug = 'accompagnements' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Supplément Viande',
  'Viande au choix en extra',
  '[{"label": "Petite", "price": 4}, {"label": "Moyenne", "price": 6}, {"label": "Grande", "price": 9}]',
  5
FROM menu_categories WHERE slug = 'accompagnements' LIMIT 1;

-- ========================================
-- Articles du menu - Boissons
-- ========================================
INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Canettes',
  'Coca, Fanta, Sprite, Oasis...',
  '[{"label": "La canette", "price": 2}]',
  1
FROM menu_categories WHERE slug = 'boissons' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Bouteilles',
  'Eau, jus, Ice Tea...',
  '[{"label": "La bouteille", "price": 2}]',
  2
FROM menu_categories WHERE slug = 'boissons' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Energy Drinks',
  'Monster, Red Bull',
  '[{"label": "La canette", "price": 3}]',
  3
FROM menu_categories WHERE slug = 'boissons' LIMIT 1;

INSERT INTO menu_items (id, category_id, name, description, prices, display_order)
SELECT 
  UUID(),
  id,
  'Café',
  'Expresso ou allongé',
  '[{"label": "La tasse", "price": 1}]',
  4
FROM menu_categories WHERE slug = 'boissons' LIMIT 1;

-- ========================================
-- Posts de test pour la galerie
-- ========================================
INSERT INTO posts (id, user_id, message, approved)
SELECT 
  UUID(),
  id,
  'Premier post de test ! La Terrasse c\'est la vie 🔥',
  true
FROM users WHERE email = 'admin@laterrasse.fr' LIMIT 1;

-- ========================================
-- Scores de jeu de test
-- ========================================
INSERT INTO game_scores (id, player_name, score, difficulty) VALUES
  (UUID(), 'Mehmet', 9999, 'hard'),
  (UUID(), 'Champion', 5000, 'hard'),
  (UUID(), 'ProGamer', 3500, 'medium'),
  (UUID(), 'Débutant', 1200, 'easy');

-- ========================================
-- Légendes du Hall of Fame
-- ========================================
INSERT INTO legends (id, name, anecdote, category, approved) VALUES
  (UUID(), 'Jean-Claude', 'A mangé 15 kebabs en une semaine. Une vraie légende !', 'mangeur', true),
  (UUID(), 'Marie', 'Cliente fidèle depuis 10 ans, vient tous les jours !', 'fidele', true),
  (UUID(), 'Ahmed', 'Toujours une blague à raconter, l\'ambiance c\'est lui !', 'drole', true);

-- ========================================
-- Fin du seed
-- ========================================
