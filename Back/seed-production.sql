-- ========================================
-- Script de remplissage pour La Terrasse - PRODUCTION
-- ========================================

-- Désactiver temporairement les checks de clés étrangères
SET FOREIGN_KEY_CHECKS = 0;

-- ========================================
-- 1. UTILISATEURS (pour les posts)
-- ========================================

INSERT INTO users (id, email, password_hash, username, role, created_at) VALUES
(UUID(), 'mehmet@laterrasse.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456', 'Mehmet', 'admin', NOW()),
(UUID(), 'client1@email.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456', 'Sophie', 'user', NOW()),
(UUID(), 'client2@email.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456', 'Thomas', 'user', NOW()),
(UUID(), 'client3@email.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456', 'Marie', 'user', NOW()),
(UUID(), 'client4@email.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456', 'Alexandre', 'user', NOW()),
(UUID(), 'client5@email.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456', 'Camille', 'user', NOW()),
(UUID(), 'client6@email.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456', 'Lucas', 'user', NOW()),
(UUID(), 'client7@email.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456', 'Emma', 'user', NOW()),
(UUID(), 'client8@email.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456', 'Hugo', 'user', NOW()),
(UUID(), 'client9@email.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456', 'Léa', 'user', NOW()),
(UUID(), 'client10@email.com', '$2a$10$abcdefghijklmnopqrstuvwxyz123456', 'Nathan', 'user', NOW());

-- ========================================
-- 2. POSTS (Livre d'or / Galerie)
-- ========================================

-- Récupérer quelques IDs d'utilisateurs pour les posts
SET @user1 = (SELECT id FROM users WHERE username = 'Sophie');
SET @user2 = (SELECT id FROM users WHERE username = 'Thomas');
SET @user3 = (SELECT id FROM users WHERE username = 'Marie');
SET @user4 = (SELECT id FROM users WHERE username = 'Alexandre');
SET @user5 = (SELECT id FROM users WHERE username = 'Camille');
SET @user6 = (SELECT id FROM users WHERE username = 'Lucas');
SET @user7 = (SELECT id FROM users WHERE username = 'Emma');
SET @user8 = (SELECT id FROM users WHERE username = 'Hugo');
SET @user9 = (SELECT id FROM users WHERE username = 'Léa');
SET @user10 = (SELECT id FROM users WHERE username = 'Nathan');

INSERT INTO posts (id, user_id, message, likes_count, comments_count, approved, created_at) VALUES
(UUID(), @user1, 'Meilleur kebab de Paris sans hésiter ! L\'accueil est toujours au top et les portions sont généreuses 🌯❤️', 15, 3, TRUE, DATE_SUB(NOW(), INTERVAL 7 DAY)),
(UUID(), @user2, 'Ambiance incroyable, on se sent comme à la maison ! Mehmet est un vrai personnage, toujours de bonne humeur 😄', 23, 5, TRUE, DATE_SUB(NOW(), INTERVAL 6 DAY)),
(UUID(), @user3, 'La sauce blanche est légendaire ! Je viens exprès de l\'autre bout de Paris pour ça 🔥', 31, 2, TRUE, DATE_SUB(NOW(), INTERVAL 5 DAY)),
(UUID(), @user4, 'Mon QG du vendredi soir depuis 3 ans ! Toujours aussi bon, jamais déçu 👌', 19, 4, TRUE, DATE_SUB(NOW(), INTERVAL 4 DAY)),
(UUID(), @user5, 'Les tacos sont une tuerie ! Et mention spéciale pour les frites maison 🍟', 27, 6, TRUE, DATE_SUB(NOW(), INTERVAL 3 DAY)),
(UUID(), @user6, 'Rapport qualité-prix imbattable. En plus ils sont hyper sympas ! Je recommande à 200% 💯', 42, 8, TRUE, DATE_SUB(NOW(), INTERVAL 2 DAY)),
(UUID(), @user7, 'Première fois et certainement pas la dernière ! Tout était parfait du début à la fin 🌟', 18, 2, TRUE, DATE_SUB(NOW(), INTERVAL 1 DAY)),
(UUID(), @user8, 'Le pain rond est juste magique, jamais mangé un kebab aussi bon ! Mehmet tu gères 🙌', 35, 7, TRUE, DATE_SUB(NOW(), INTERVAL 12 HOUR)),
(UUID(), @user9, 'Ambiance familiale, produits frais, service rapide... Que demander de plus ? 😍', 29, 5, TRUE, DATE_SUB(NOW(), INTERVAL 6 HOUR)),
(UUID(), @user10, 'La Terrasse c\'est plus qu\'un resto, c\'est une expérience ! À faire absolument ⭐⭐⭐⭐⭐', 51, 9, TRUE, DATE_SUB(NOW(), INTERVAL 2 HOUR));

-- ========================================
-- 3. CATÉGORIES DU MENU
-- ========================================

INSERT INTO menu_categories (id, name, slug, description, icon, display_order, visible, created_at) VALUES
(UUID(), 'Sandwiches', 'sandwiches', 'Nos délicieux kebabs et sandwiches', '🌯', 1, TRUE, NOW()),
(UUID(), 'Burgers', 'burgers', 'Burgers gourmands fait maison', '🍔', 2, TRUE, NOW()),
(UUID(), 'Assiettes', 'assiettes', 'Assiettes complètes et copieuses', '🍽️', 3, TRUE, NOW()),
(UUID(), 'Box', 'box', 'Nos box à partager', '📦', 4, TRUE, NOW()),
(UUID(), 'Accompagnements', 'accompagnements', 'Frites, salades et plus', '🍟', 5, TRUE, NOW()),
(UUID(), 'Boissons', 'boissons', 'Boissons fraîches', '🥤', 6, TRUE, NOW());

-- ========================================
-- 4. ITEMS DU MENU
-- ========================================

-- Sandwiches
SET @cat_sandwiches = (SELECT id FROM menu_categories WHERE slug = 'sandwiches');

INSERT INTO menu_items (id, category_id, name, description, prices, badge, available, popular, display_order, created_at) VALUES
(UUID(), @cat_sandwiches, 'Pain Rond', 'Le classique kebab en pain moelleux', '{"seul": 6, "frites": 7, "menu": 8}', '🔥 TOP', TRUE, TRUE, 1, NOW()),
(UUID(), @cat_sandwiches, 'Galette', 'Roulé dans une galette croustillante', '{"seul": 6, "frites": 7, "menu": 8}', NULL, TRUE, TRUE, 2, NOW()),
(UUID(), @cat_sandwiches, 'Baguette', 'Version française du kebab', '{"seul": 6, "frites": 7, "menu": 8}', NULL, TRUE, FALSE, 3, NOW()),
(UUID(), @cat_sandwiches, 'Tacos', 'L\'incontournable tacos', '{"1 viande": 7, "2 viandes": 8, "3 viandes": 9}', '🌟 POPULAIRE', TRUE, TRUE, 4, NOW());

-- Burgers
SET @cat_burgers = (SELECT id FROM menu_categories WHERE slug = 'burgers');

INSERT INTO menu_items (id, category_id, name, description, prices, badge, available, popular, display_order, created_at) VALUES
(UUID(), @cat_burgers, 'Burger Classique', 'Steak haché, salade, tomate, oignons', '{"seul": 7, "menu": 9}', NULL, TRUE, FALSE, 1, NOW()),
(UUID(), @cat_burgers, 'Burger Cheese', 'Avec double cheddar fondu', '{"seul": 8, "menu": 10}', NULL, TRUE, TRUE, 2, NOW()),
(UUID(), @cat_burgers, 'Burger Poulet', 'Filet de poulet pané croustillant', '{"seul": 8, "menu": 10}', NULL, TRUE, FALSE, 3, NOW()),
(UUID(), @cat_burgers, 'Burger XXL', 'Double viande, double fromage', '{"seul": 10, "menu": 12}', '💪 XXL', TRUE, TRUE, 4, NOW());

-- Assiettes
SET @cat_assiettes = (SELECT id FROM menu_categories WHERE slug = 'assiettes');

INSERT INTO menu_items (id, category_id, name, description, prices, badge, available, popular, display_order, created_at) VALUES
(UUID(), @cat_assiettes, 'Assiette Kebab', 'Viande, frites, salade, sauce', '{"normale": 10, "grande": 12}', NULL, TRUE, TRUE, 1, NOW()),
(UUID(), @cat_assiettes, 'Assiette Mix', 'Kebab + poulet, frites, salade', '{"normale": 11, "grande": 13}', '🔥 BEST', TRUE, TRUE, 2, NOW()),
(UUID(), @cat_assiettes, 'Assiette Végé', 'Falafels, frites, salade, houmous', '{"normale": 9, "grande": 11}', '🌱 VEGGIE', TRUE, FALSE, 3, NOW());

-- Box
SET @cat_box = (SELECT id FROM menu_categories WHERE slug = 'box');

INSERT INTO menu_items (id, category_id, name, description, prices, badge, available, popular, display_order, created_at) VALUES
(UUID(), @cat_box, 'Box Duo', '2 sandwiches + 2 frites + 2 boissons', '{"prix": 18}', NULL, TRUE, TRUE, 1, NOW()),
(UUID(), @cat_box, 'Box Famille', '4 sandwiches + 4 frites + 4 boissons', '{"prix": 35}', '👨‍👩‍👧‍👦 FAMILLE', TRUE, TRUE, 2, NOW());

-- Accompagnements
SET @cat_accompagnements = (SELECT id FROM menu_categories WHERE slug = 'accompagnements');

INSERT INTO menu_items (id, category_id, name, description, prices, badge, available, popular, display_order, created_at) VALUES
(UUID(), @cat_accompagnements, 'Frites Maison', 'Frites fraîches et croustillantes', '{"normale": 3, "grande": 4}', NULL, TRUE, TRUE, 1, NOW()),
(UUID(), @cat_accompagnements, 'Frites Cheddar', 'Frites avec sauce cheddar', '{"prix": 5}', NULL, TRUE, FALSE, 2, NOW()),
(UUID(), @cat_accompagnements, 'Salade Verte', 'Salade fraîche du jour', '{"prix": 4}', NULL, TRUE, FALSE, 3, NOW()),
(UUID(), @cat_accompagnements, 'Nuggets (6pc)', 'Nuggets de poulet croustillants', '{"prix": 5}', NULL, TRUE, FALSE, 4, NOW());

-- Boissons
SET @cat_boissons = (SELECT id FROM menu_categories WHERE slug = 'boissons');

INSERT INTO menu_items (id, category_id, name, description, prices, badge, available, popular, display_order, created_at) VALUES
(UUID(), @cat_boissons, 'Coca-Cola', 'Canette 33cl', '{"prix": 2}', NULL, TRUE, TRUE, 1, NOW()),
(UUID(), @cat_boissons, 'Fanta', 'Canette 33cl', '{"prix": 2}', NULL, TRUE, FALSE, 2, NOW()),
(UUID(), @cat_boissons, 'Sprite', 'Canette 33cl', '{"prix": 2}', NULL, TRUE, FALSE, 3, NOW()),
(UUID(), @cat_boissons, 'Eau', 'Bouteille 50cl', '{"prix": 1.5}', NULL, TRUE, FALSE, 4, NOW()),
(UUID(), @cat_boissons, 'Perrier', 'Bouteille 33cl', '{"prix": 2.5}', NULL, TRUE, FALSE, 5, NOW());

-- ========================================
-- 5. SCORES DE JEU
-- ========================================

INSERT INTO game_scores (id, player_name, score, difficulty, game_duration, created_at) VALUES
(UUID(), 'Mehmet', 15000, 'hard', 300, DATE_SUB(NOW(), INTERVAL 10 DAY)),
(UUID(), 'Sophie', 12500, 'hard', 280, DATE_SUB(NOW(), INTERVAL 9 DAY)),
(UUID(), 'Thomas', 11000, 'medium', 250, DATE_SUB(NOW(), INTERVAL 8 DAY)),
(UUID(), 'Marie', 9800, 'medium', 220, DATE_SUB(NOW(), INTERVAL 7 DAY)),
(UUID(), 'Alex', 8500, 'medium', 200, DATE_SUB(NOW(), INTERVAL 6 DAY)),
(UUID(), 'Lucas', 7200, 'easy', 180, DATE_SUB(NOW(), INTERVAL 5 DAY)),
(UUID(), 'Emma', 6500, 'easy', 160, DATE_SUB(NOW(), INTERVAL 4 DAY)),
(UUID(), 'Hugo', 5800, 'easy', 140, DATE_SUB(NOW(), INTERVAL 3 DAY)),
(UUID(), 'Léa', 5200, 'easy', 120, DATE_SUB(NOW(), INTERVAL 2 DAY)),
(UUID(), 'Nathan', 4500, 'easy', 100, DATE_SUB(NOW(), INTERVAL 1 DAY));

-- ========================================
-- 6. LÉGENDES (Hall of Fame)
-- ========================================

INSERT INTO legends (id, name, anecdote, category, approved, votes_count, created_at) VALUES
(UUID(), 'Mehmet le Boss', 'Le patron légendaire qui connaît tous ses clients par leur prénom et leur commande préférée !', 'ambassadeur', TRUE, 156, DATE_SUB(NOW(), INTERVAL 30 DAY)),
(UUID(), 'Sophie la Fidèle', 'Vient tous les vendredis depuis 5 ans sans exception. Record absolu de fidélité !', 'fidele', TRUE, 89, DATE_SUB(NOW(), INTERVAL 25 DAY)),
(UUID(), 'Big Thomas', 'A mangé 3 tacos XXL en une seule fois. Légende vivante !', 'mangeur', TRUE, 234, DATE_SUB(NOW(), INTERVAL 20 DAY)),
(UUID(), 'Marie la Rigolote', 'Toujours une blague à raconter, l\'ambiance s\'illumine quand elle arrive !', 'drole', TRUE, 67, DATE_SUB(NOW(), INTERVAL 15 DAY)),
(UUID(), 'Alex l\'Influenceur', 'A ramené plus de 50 nouveaux clients grâce à ses posts Instagram !', 'ambassadeur', TRUE, 123, DATE_SUB(NOW(), INTERVAL 10 DAY));

-- Réactiver les checks de clés étrangères
SET FOREIGN_KEY_CHECKS = 1;

-- ========================================
-- Fin du script
-- ========================================

SELECT 'Base de données remplie avec succès ! 🎉' AS Message;
SELECT COUNT(*) AS 'Nombre d\'utilisateurs' FROM users;
SELECT COUNT(*) AS 'Nombre de posts' FROM posts;
SELECT COUNT(*) AS 'Nombre de catégories menu' FROM menu_categories;
SELECT COUNT(*) AS 'Nombre d\'items menu' FROM menu_items;
SELECT COUNT(*) AS 'Nombre de scores' FROM game_scores;
SELECT COUNT(*) AS 'Nombre de légendes' FROM legends;

