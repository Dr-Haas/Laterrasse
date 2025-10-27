-- ========================================
-- Base de données La Terrasse - MySQL
-- ========================================

SET FOREIGN_KEY_CHECKS = 0;

-- Suppression des tables existantes (attention en production!)
DROP TABLE IF EXISTS comments;
DROP TABLE IF EXISTS likes;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS game_scores;
DROP TABLE IF EXISTS legends;
DROP TABLE IF EXISTS menu_items;
DROP TABLE IF EXISTS menu_categories;
DROP TABLE IF EXISTS users;

SET FOREIGN_KEY_CHECKS = 1;

-- ========================================
-- Table: users
-- ========================================
CREATE TABLE users (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  email VARCHAR(255) UNIQUE NOT NULL,
  password_hash VARCHAR(255) NOT NULL,
  username VARCHAR(100) UNIQUE,
  avatar_url VARCHAR(500),
  role ENUM('user', 'admin') DEFAULT 'user',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_users_email (email),
  INDEX idx_users_username (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- Table: posts (Galerie)
-- ========================================
CREATE TABLE posts (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  user_id CHAR(36) NOT NULL,
  message TEXT NOT NULL,
  image_url VARCHAR(500),
  likes_count INT DEFAULT 0,
  comments_count INT DEFAULT 0,
  approved BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  INDEX idx_posts_user_id (user_id),
  INDEX idx_posts_created_at (created_at DESC),
  INDEX idx_posts_approved (approved)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- Table: likes
-- ========================================
CREATE TABLE likes (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  user_id CHAR(36) NOT NULL,
  post_id CHAR(36) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  UNIQUE KEY unique_user_post (user_id, post_id),
  INDEX idx_likes_post_id (post_id),
  INDEX idx_likes_user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- Table: comments
-- ========================================
CREATE TABLE comments (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  user_id CHAR(36) NOT NULL,
  post_id CHAR(36) NOT NULL,
  content TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  INDEX idx_comments_post_id (post_id),
  INDEX idx_comments_user_id (user_id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- Table: game_scores
-- ========================================
CREATE TABLE game_scores (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  player_name VARCHAR(100) NOT NULL,
  score INT NOT NULL CHECK (score >= 0),
  difficulty ENUM('easy', 'medium', 'hard') NOT NULL,
  game_duration INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  INDEX idx_game_scores_score (score DESC),
  INDEX idx_game_scores_difficulty (difficulty),
  INDEX idx_game_scores_created_at (created_at DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- Table: legends (Hall of Fame)
-- ========================================
CREATE TABLE legends (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(150) NOT NULL,
  anecdote TEXT NOT NULL,
  category ENUM('mangeur', 'fidele', 'drole', 'ambassadeur', 'autre') NOT NULL,
  image_url VARCHAR(500),
  approved BOOLEAN DEFAULT FALSE,
  votes_count INT DEFAULT 0,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_legends_category (category),
  INDEX idx_legends_approved (approved),
  INDEX idx_legends_votes (votes_count DESC)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- Table: menu_categories
-- ========================================
CREATE TABLE menu_categories (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  icon VARCHAR(50),
  display_order INT DEFAULT 0,
  visible BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_menu_categories_slug (slug),
  INDEX idx_menu_categories_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- Table: menu_items
-- ========================================
CREATE TABLE menu_items (
  id CHAR(36) PRIMARY KEY DEFAULT (UUID()),
  category_id CHAR(36) NOT NULL,
  name VARCHAR(150) NOT NULL,
  description TEXT,
  image_url VARCHAR(500),
  badge VARCHAR(50),
  prices JSON NOT NULL,
  available BOOLEAN DEFAULT TRUE,
  popular BOOLEAN DEFAULT FALSE,
  display_order INT DEFAULT 0,
  allergens VARCHAR(255),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (category_id) REFERENCES menu_categories(id) ON DELETE CASCADE,
  INDEX idx_menu_items_category (category_id),
  INDEX idx_menu_items_popular (popular),
  INDEX idx_menu_items_order (display_order)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ========================================
-- Triggers pour compteurs automatiques
-- ========================================

-- Trigger pour likes_count sur posts (INSERT)
DELIMITER //
CREATE TRIGGER update_post_likes_count_insert
AFTER INSERT ON likes
FOR EACH ROW
BEGIN
  UPDATE posts SET likes_count = likes_count + 1 WHERE id = NEW.post_id;
END//
DELIMITER ;

-- Trigger pour likes_count sur posts (DELETE)
DELIMITER //
CREATE TRIGGER update_post_likes_count_delete
AFTER DELETE ON likes
FOR EACH ROW
BEGIN
  UPDATE posts SET likes_count = likes_count - 1 WHERE id = OLD.post_id;
END//
DELIMITER ;

-- Trigger pour comments_count sur posts (INSERT)
DELIMITER //
CREATE TRIGGER update_post_comments_count_insert
AFTER INSERT ON comments
FOR EACH ROW
BEGIN
  UPDATE posts SET comments_count = comments_count + 1 WHERE id = NEW.post_id;
END//
DELIMITER ;

-- Trigger pour comments_count sur posts (DELETE)
DELIMITER //
CREATE TRIGGER update_post_comments_count_delete
AFTER DELETE ON comments
FOR EACH ROW
BEGIN
  UPDATE posts SET comments_count = comments_count - 1 WHERE id = OLD.post_id;
END//
DELIMITER ;

-- ========================================
-- Fin du schéma
-- ========================================
