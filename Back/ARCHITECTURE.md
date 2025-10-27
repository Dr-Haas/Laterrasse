# 🏗️ Architecture du Backend La Terrasse

## 📊 Vue d'ensemble

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend (Next.js)                    │
│                     http://localhost:3000                    │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ HTTP/REST API
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    Backend API (Express.js)                  │
│                     http://localhost:3001                    │
├─────────────────────────────────────────────────────────────┤
│  Routes → Controllers → Services → Database                  │
└─────────────────────────────────────────────────────────────┘
                              │
                              │ SQL Queries
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                PostgreSQL Database (Port 5432)               │
│                        laterrasse_db                         │
└─────────────────────────────────────────────────────────────┘
```

## 🗂️ Structure des Dossiers

```
Back/
├── src/                          # Code source
│   ├── config/                   # Configuration
│   │   └── database.js           # Connexion PostgreSQL
│   │
│   ├── controllers/              # Logique métier
│   │   ├── authController.js     # Authentification (register/login)
│   │   ├── postsController.js    # Galerie (CRUD posts)
│   │   ├── commentsController.js # Commentaires
│   │   ├── gameScoresController.js # Scores du jeu
│   │   ├── legendsController.js  # Hall of Fame
│   │   └── menuController.js     # Gestion du menu
│   │
│   ├── routes/                   # Définition des routes
│   │   ├── auth.js              # /api/auth/*
│   │   ├── posts.js             # /api/posts/*
│   │   ├── comments.js          # /api/comments/*
│   │   ├── gameScores.js        # /api/game-scores/*
│   │   ├── legends.js           # /api/legends/*
│   │   └── menu.js              # /api/menu/*
│   │
│   ├── middleware/               # Middlewares personnalisés
│   │   ├── auth.js              # Vérification JWT
│   │   ├── upload.js            # Upload d'images (Multer)
│   │   └── errorHandler.js      # Gestion des erreurs
│   │
│   ├── db/                       # Base de données
│   │   ├── schema.sql           # Structure des tables
│   │   ├── seed.sql             # Données initiales
│   │   └── setup.js             # Script d'initialisation
│   │
│   └── server.js                 # Point d'entrée de l'application
│
├── uploads/                      # Fichiers uploadés
├── .env                          # Variables d'environnement
├── .gitignore
├── package.json
├── README.md                     # Documentation complète
├── QUICKSTART.md                 # Guide de démarrage rapide
├── API_EXAMPLES.md               # Exemples d'utilisation
└── ARCHITECTURE.md               # Ce fichier
```

## 🔄 Flux de Requête

### Exemple : Créer un post

```
1. Client → POST /api/posts
   ↓
2. Express reçoit la requête
   ↓
3. Middleware CORS vérifie l'origine
   ↓
4. Middleware authenticateToken vérifie le JWT
   ↓
5. Middleware upload.single('image') traite l'image
   ↓
6. Route /api/posts → postsController.createPost()
   ↓
7. Controller valide les données
   ↓
8. Controller exécute INSERT INTO posts...
   ↓
9. PostgreSQL retourne le nouveau post
   ↓
10. Controller retourne JSON au client
```

## 🗄️ Schéma de Base de Données

### Tables Principales

#### 👤 users
```sql
id              UUID PRIMARY KEY
email           VARCHAR UNIQUE
password_hash   VARCHAR
username        VARCHAR
role            VARCHAR (user/admin)
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

#### 📸 posts (Galerie)
```sql
id              UUID PRIMARY KEY
user_id         UUID → users(id)
message         TEXT
image_url       VARCHAR
likes_count     INTEGER (auto)
comments_count  INTEGER (auto)
approved        BOOLEAN
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

#### ❤️ likes
```sql
id              UUID PRIMARY KEY
user_id         UUID → users(id)
post_id         UUID → posts(id)
created_at      TIMESTAMP
UNIQUE(user_id, post_id)
```

#### 💬 comments
```sql
id              UUID PRIMARY KEY
user_id         UUID → users(id)
post_id         UUID → posts(id)
content         TEXT
created_at      TIMESTAMP
```

#### 🎮 game_scores
```sql
id              UUID PRIMARY KEY
player_name     VARCHAR
score           INTEGER
difficulty      VARCHAR (easy/medium/hard)
game_duration   INTEGER
created_at      TIMESTAMP
```

#### 🏆 legends (Hall of Fame)
```sql
id              UUID PRIMARY KEY
name            VARCHAR
anecdote        TEXT
category        VARCHAR (mangeur/fidele/drole/ambassadeur/autre)
image_url       VARCHAR
approved        BOOLEAN
votes_count     INTEGER
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

#### 📦 menu_categories
```sql
id              UUID PRIMARY KEY
name            VARCHAR UNIQUE
slug            VARCHAR UNIQUE
description     TEXT
icon            VARCHAR
display_order   INTEGER
visible         BOOLEAN
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

#### 🍔 menu_items
```sql
id              UUID PRIMARY KEY
category_id     UUID → menu_categories(id)
name            VARCHAR
description     TEXT
image_url       VARCHAR
badge           VARCHAR
prices          JSONB
available       BOOLEAN
popular         BOOLEAN
display_order   INTEGER
allergens       VARCHAR
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

### Triggers Automatiques

- **updated_at** : Mis à jour automatiquement à chaque modification
- **likes_count** : Incrémenté/décrémenté automatiquement lors de likes
- **comments_count** : Incrémenté/décrémenté automatiquement lors de commentaires

## 🔐 Authentification JWT

### Processus

```
1. Inscription/Connexion
   ↓
2. Serveur génère un JWT
   {
     userId: "uuid",
     email: "user@example.com",
     role: "user"
   }
   ↓
3. Client stocke le token (localStorage)
   ↓
4. Requêtes suivantes : Header "Authorization: Bearer TOKEN"
   ↓
5. Middleware authenticateToken décode et vérifie
   ↓
6. req.user = { id, email, username, role }
```

### Types d'Accès

| Route | Accès |
|-------|-------|
| GET /api/menu | 🌍 Public |
| GET /api/posts | 🌍 Public |
| POST /api/auth/register | 🌍 Public |
| POST /api/posts | 🔒 Authentifié |
| DELETE /api/posts/:id | 🔒 Auteur ou Admin |
| PATCH /api/posts/:id/approve | 👑 Admin uniquement |

## 📡 Routes API Détaillées

### Auth (`/api/auth/`)

| Méthode | Route | Description | Auth |
|---------|-------|-------------|------|
| POST | /register | Inscription | 🌍 |
| POST | /login | Connexion | 🌍 |
| GET | /me | Utilisateur actuel | 🔒 |

### Posts (`/api/posts/`)

| Méthode | Route | Description | Auth |
|---------|-------|-------------|------|
| GET | / | Liste des posts | 🌍 |
| GET | /:id | Un post | 🌍 |
| POST | / | Créer un post | 🔒 |
| PUT | /:id | Modifier un post | 🔒 |
| DELETE | /:id | Supprimer un post | 🔒 |
| PATCH | /:id/approve | Approuver | 👑 |
| POST | /:id/like | Liker | 🔒 |
| DELETE | /:id/like | Unliker | 🔒 |

### Comments (`/api/comments/`)

| Méthode | Route | Description | Auth |
|---------|-------|-------------|------|
| GET | /:postId | Commentaires d'un post | 🌍 |
| POST | /:postId | Ajouter un commentaire | 🔒 |
| DELETE | /:id | Supprimer | 🔒 |

### Game Scores (`/api/game-scores/`)

| Méthode | Route | Description | Auth |
|---------|-------|-------------|------|
| GET | / | Tous les scores | 🌍 |
| GET | /top | Top scores | 🌍 |
| GET | /stats | Statistiques | 🌍 |
| POST | / | Enregistrer un score | 🌍 |

### Legends (`/api/legends/`)

| Méthode | Route | Description | Auth |
|---------|-------|-------------|------|
| GET | / | Liste des légendes | 🌍 |
| GET | /:id | Une légende | 🌍 |
| POST | / | Créer une légende | 🌍 |
| PUT | /:id | Modifier | 👑 |
| DELETE | /:id | Supprimer | 👑 |
| PATCH | /:id/approve | Approuver | 👑 |
| POST | /:id/vote | Voter | 🌍 |

### Menu (`/api/menu/`)

| Méthode | Route | Description | Auth |
|---------|-------|-------------|------|
| GET | / | Menu complet | 🌍 |
| GET | /categories | Catégories | 🌍 |
| GET | /category/:id | Items d'une catégorie | 🌍 |
| GET | /item/:id | Un item | 🌍 |
| POST | /categories | Créer catégorie | 👑 |
| POST | /items | Créer item | 👑 |
| PUT | /items/:id | Modifier item | 👑 |
| DELETE | /items/:id | Supprimer item | 👑 |

## 🛡️ Sécurité

### Mesures Implémentées

✅ **Mots de passe hashés** avec bcrypt (10 rounds)
✅ **JWT** pour l'authentification stateless
✅ **CORS** configuré pour le frontend
✅ **Parameterized queries** (protection SQL injection)
✅ **Validation des entrées** côté serveur
✅ **Limitation des uploads** (5MB max, images uniquement)
✅ **Tokens expirables** (7 jours par défaut)

### À Ajouter en Production

- [ ] Rate limiting (express-rate-limit)
- [ ] Helmet.js pour headers de sécurité
- [ ] Validation avancée avec Zod
- [ ] HTTPS obligatoire
- [ ] Variables d'environnement sécurisées
- [ ] Logging avancé (Winston)
- [ ] Monitoring (Sentry)

## 🚀 Optimisations

### Index PostgreSQL

Des index sont créés automatiquement pour :
- Emails et usernames (recherche rapide)
- Clés étrangères (joins optimisés)
- Dates de création (tri chronologique)
- Champs approved (filtrage rapide)

### Connection Pooling

Le pool PostgreSQL est configuré avec :
- 20 connexions maximum
- Timeout de 30s pour les connexions inactives
- Timeout de 2s pour établir une connexion

## 📊 Monitoring

### Health Check

```bash
GET /health

Response:
{
  "status": "OK",
  "message": "La Terrasse API is running",
  "timestamp": "2025-10-27T12:00:00.000Z",
  "environment": "development"
}
```

### Logs

En mode développement, toutes les requêtes sont loggées :
```
GET /api/menu
Requête exécutée { text: 'SELECT * FROM menu_categories...', duration: 12, rows: 6 }
```

## 🔄 Évolution Future

### Features Prévues

1. **WebSockets** pour les notifications en temps réel
2. **Pagination cursor-based** pour de meilleures performances
3. **Cache Redis** pour les requêtes fréquentes
4. **Upload sur CDN** (Cloudinary) au lieu du serveur local
5. **API versioning** (/api/v1, /api/v2)
6. **Rate limiting** par utilisateur
7. **Tests automatisés** (Jest + Supertest)
8. **Documentation OpenAPI/Swagger**

### Migrations

Pour ajouter/modifier le schéma, créez un fichier de migration :

```sql
-- migrations/001_add_avatar_to_users.sql
ALTER TABLE users ADD COLUMN avatar_url VARCHAR(500);
```

## 📚 Ressources

- [Express.js Documentation](https://expressjs.com/)
- [PostgreSQL Documentation](https://www.postgresql.org/docs/)
- [JWT.io](https://jwt.io/)
- [Multer Documentation](https://github.com/expressjs/multer)

---

**Architecture conçue pour La Terrasse 🍔**

