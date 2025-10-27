# 🍔 La Terrasse - Backend API

Backend Node.js/Express avec PostgreSQL pour le site web de La Terrasse.

## 🛠️ Stack Technique

- **Runtime** : Node.js (ES Modules)
- **Framework** : Express.js
- **Base de données** : MySQL
- **Authentification** : JWT (JSON Web Tokens)
- **Upload** : Multer
- **Hashing** : bcryptjs

## 📋 Prérequis

- Node.js 18+
- MySQL 8.0+
- npm ou yarn

## 🚀 Installation

### 1. Installer les dépendances

```bash
cd Back
npm install
```

### 2. Configurer MySQL

Assurez-vous que MySQL est installé et démarré sur votre machine.

**macOS (avec Homebrew):**
```bash
brew install mysql
brew services start mysql
```

**Linux:**
```bash
sudo apt install mysql-server
sudo systemctl start mysql
```

**Windows:**
Téléchargez l'installateur depuis [mysql.com](https://dev.mysql.com/downloads/installer/)

📚 **Guide détaillé** : Consultez [INSTALLATION_MYSQL.md](./INSTALLATION_MYSQL.md)

### 3. Créer la base de données

```bash
# Se connecter à MySQL
mysql -u root -p
# (Appuyez sur Entrée si pas de mot de passe configuré)

# Créer la base de données
CREATE DATABASE laterrasse_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Vérifier
SHOW DATABASES;

# Quitter
EXIT;
```

### 4. Configurer les variables d'environnement

Copiez le fichier `.env.example` en `.env` et modifiez les valeurs :

```bash
cp .env.example .env
```

Éditez `.env` avec vos paramètres :

```env
PORT=3001
NODE_ENV=development

# Ajustez ces valeurs selon votre configuration MySQL
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=        # Votre mot de passe MySQL (ou vide)
DB_NAME=laterrasse_db

# Générez une clé secrète sécurisée
JWT_SECRET=votre_clé_secrète_très_longue_et_aléatoire
```

### 5. Initialiser la base de données

```bash
# Créer les tables et insérer les données initiales
npm run db:setup
```

Cette commande va :
- ✅ Créer toutes les tables
- ✅ Créer les triggers et fonctions
- ✅ Insérer les données de test
- ✅ Insérer le menu complet

## 🎮 Scripts Disponibles

```bash
# Développement avec hot-reload
npm run dev

# Production
npm start

# Configurer la base de données (tables + seed)
npm run db:setup

# Migrations (si ajoutées ultérieurement)
npm run db:migrate

# Seed uniquement
npm run db:seed
```

## 📂 Structure du Projet

```
Back/
├── src/
│   ├── config/
│   │   └── database.js         # Configuration MySQL
│   ├── controllers/
│   │   ├── authController.js   # Authentification
│   │   ├── postsController.js  # Galerie
│   │   ├── commentsController.js
│   │   ├── gameScoresController.js
│   │   ├── legendsController.js
│   │   └── menuController.js
│   ├── middleware/
│   │   ├── auth.js             # JWT middleware
│   │   ├── upload.js           # Multer config
│   │   └── errorHandler.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── posts.js
│   │   ├── comments.js
│   │   ├── gameScores.js
│   │   ├── legends.js
│   │   └── menu.js
│   ├── db/
│   │   ├── schema.sql          # Schéma de la BDD
│   │   ├── seed.sql            # Données initiales
│   │   └── setup.js            # Script d'initialisation
│   └── server.js               # Point d'entrée
├── uploads/                    # Fichiers uploadés
├── .env                        # Variables d'environnement
├── .env.example
├── .gitignore
├── package.json
└── README.md
```

## 🔌 API Endpoints

### Authentification

```
POST   /api/auth/register        Inscription
POST   /api/auth/login           Connexion
GET    /api/auth/me              Utilisateur actuel (🔒)
```

### Posts (Galerie)

```
GET    /api/posts                Liste des posts
GET    /api/posts/:id            Un post
POST   /api/posts                Créer un post (🔒)
PUT    /api/posts/:id            Modifier un post (🔒)
DELETE /api/posts/:id            Supprimer un post (🔒)
PATCH  /api/posts/:id/approve    Approuver un post (👑)
POST   /api/posts/:id/like       Liker un post (🔒)
DELETE /api/posts/:id/like       Unliker un post (🔒)
```

### Commentaires

```
GET    /api/comments/:postId     Commentaires d'un post
POST   /api/comments/:postId     Créer un commentaire (🔒)
DELETE /api/comments/:id         Supprimer un commentaire (🔒)
```

### Scores de Jeu

```
GET    /api/game-scores          Tous les scores
GET    /api/game-scores/top      Top scores
GET    /api/game-scores/stats    Statistiques
POST   /api/game-scores          Enregistrer un score
```

### Légendes (Hall of Fame)

```
GET    /api/legends              Liste des légendes
GET    /api/legends/:id          Une légende
POST   /api/legends              Créer une légende
PUT    /api/legends/:id          Modifier une légende (👑)
DELETE /api/legends/:id          Supprimer une légende (👑)
PATCH  /api/legends/:id/approve  Approuver une légende (👑)
POST   /api/legends/:id/vote     Voter pour une légende
```

### Menu

```
GET    /api/menu                 Menu complet
GET    /api/menu/categories      Catégories
GET    /api/menu/category/:id    Items d'une catégorie
GET    /api/menu/item/:id        Un item
POST   /api/menu/categories      Créer une catégorie (👑)
POST   /api/menu/items           Créer un item (👑)
PUT    /api/menu/items/:id       Modifier un item (👑)
DELETE /api/menu/items/:id       Supprimer un item (👑)
```

**Légende :**
- 🔒 = Authentification requise
- 👑 = Admin uniquement

## 🔐 Authentification

L'API utilise JWT (JSON Web Tokens) pour l'authentification.

### Inscription/Connexion

```javascript
// Inscription
POST /api/auth/register
{
  "email": "user@example.com",
  "password": "password123",
  "username": "MonPseudo"
}

// Connexion
POST /api/auth/login
{
  "email": "user@example.com",
  "password": "password123"
}

// Réponse
{
  "user": { ... },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Utiliser le Token

Pour les routes protégées, incluez le token dans le header :

```
Authorization: Bearer <votre_token>
```

Exemple avec fetch :

```javascript
fetch('http://localhost:3001/api/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({ message: 'Mon post' })
})
```

## 📤 Upload d'Images

Les routes qui acceptent des images utilisent `multipart/form-data`.

**Exemple :**

```javascript
const formData = new FormData();
formData.append('message', 'Mon post avec image');
formData.append('image', fileInput.files[0]);

fetch('http://localhost:3001/api/posts', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  body: formData
});
```

**Limites :**
- Taille max : 5MB
- Formats : jpeg, jpg, png, gif, webp

## 🗃️ Schéma de la Base de Données

### Tables Principales

**users**
- id (UUID)
- email (unique)
- password_hash
- username
- role (user/admin)

**posts**
- id (UUID)
- user_id
- message
- image_url
- likes_count
- comments_count
- approved

**likes**
- id (UUID)
- user_id
- post_id

**comments**
- id (UUID)
- user_id
- post_id
- content

**game_scores**
- id (UUID)
- player_name
- score
- difficulty (easy/medium/hard)

**legends**
- id (UUID)
- name
- anecdote
- category
- votes_count
- approved

**menu_categories**
- id (UUID)
- name
- slug
- description

**menu_items**
- id (UUID)
- category_id
- name
- description
- prices (JSONB)
- badge

## 🧪 Tester l'API

### Avec curl

```bash
# Health check
curl http://localhost:3001/health

# Inscription
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com","password":"password123"}'

# Menu
curl http://localhost:3001/api/menu
```

### Avec un client HTTP

- [Postman](https://www.postman.com/)
- [Insomnia](https://insomnia.rest/)
- [Thunder Client](https://www.thunderclient.com/) (extension VS Code)

## 👥 Comptes de Test

Après `npm run db:setup`, ces comptes sont disponibles :

```
Admin :
  Email: admin@laterrasse.fr
  Mot de passe: password123

Mehmet :
  Email: mehmet@laterrasse.fr
  Mot de passe: password123
  
Client :
  Email: client@example.com
  Mot de passe: password123
```

## 🐛 Dépannage

### Erreur de connexion PostgreSQL

```
❌ Error: connect ECONNREFUSED 127.0.0.1:5432
```

**Solution :**
- Vérifiez que PostgreSQL est démarré
- Vérifiez vos identifiants dans `.env`
- Assurez-vous que la base de données existe

### Port déjà utilisé

```
❌ Error: listen EADDRINUSE: address already in use :::3001
```

**Solution :**
- Changez le port dans `.env`
- Ou tuez le processus qui utilise le port 3001

### Erreur JWT

```
❌ Token invalide
```

**Solution :**
- Vérifiez que `JWT_SECRET` est défini dans `.env`
- Le token a peut-être expiré, reconnectez-vous

## 📝 Notes de Développement

### Sécurité

- ✅ Mots de passe hashés avec bcrypt
- ✅ JWT pour l'authentification
- ✅ Validation des entrées
- ✅ Protection CORS
- ✅ Sanitization SQL (parameterized queries)

### À Améliorer (Production)

- [ ] Rate limiting
- [ ] Validation avancée avec Zod
- [ ] Tests unitaires et intégration
- [ ] Logging avancé (Winston)
- [ ] Monitoring (Sentry)
- [ ] Cache (Redis)
- [ ] CDN pour les images (Cloudinary)

## 📞 Support

Pour toute question, consultez la documentation ou contactez l'équipe de développement.

---

**© 2025 La Terrasse - Backend API**

