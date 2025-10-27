# 🚀 Démarrage - La Terrasse Backend avec MySQL

Guide complet pour installer MySQL et démarrer l'application.

## 📋 Checklist Rapide

- [ ] Node.js 18+ installé
- [ ] MySQL installé
- [ ] MySQL démarré
- [ ] Base de données créée
- [ ] Dépendances installées
- [ ] Variables d'environnement configurées
- [ ] Tables créées

---

## 🔧 Étape 1 : Installer MySQL

### Option A : Avec Homebrew (Recommandé pour macOS)

```bash
# Installer MySQL
brew install mysql

# Démarrer MySQL
brew services start mysql

# Vérifier que MySQL tourne
brew services list
# Devrait afficher "mysql" avec "started" en vert
```

### Option B : Installation manuelle

Téléchargez depuis https://dev.mysql.com/downloads/mysql/

---

## 💾 Étape 2 : Créer la Base de Données

```bash
# Se connecter à MySQL (appuyez sur Entrée pour le mot de passe si vide)
mysql -u root -p

# Dans MySQL, créer la base de données
CREATE DATABASE laterrasse_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

# Vérifier
SHOW DATABASES;
# Vous devriez voir "laterrasse_db" dans la liste

# Quitter
EXIT;
```

✅ Votre base de données est créée !

---

## 📦 Étape 3 : Installer les Dépendances

```bash
cd /Users/garyhaas/Desktop/LaTerrasse/Back
npm install
```

Cela va installer :
- express
- mysql2
- bcryptjs
- jsonwebtoken
- multer
- et autres dépendances...

---

## ⚙️ Étape 4 : Configurer l'Environnement

Le fichier `.env` existe déjà avec ces paramètres par défaut :

```env
PORT=3001
NODE_ENV=development

DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=           # ⚠️ Mettez votre mot de passe MySQL ici (ou laissez vide)
DB_NAME=laterrasse_db

JWT_SECRET=laterrasse_secret_key_change_in_production_2025
FRONTEND_URL=http://localhost:3000
```

**Si vous avez un mot de passe MySQL**, modifiez la ligne `DB_PASSWORD=` :

```bash
# Ouvrir le fichier .env
nano .env

# Ou avec VS Code
code .env
```

---

## 🗄️ Étape 5 : Initialiser la Base de Données

```bash
npm run db:setup
```

Cette commande va :
1. ✅ Créer toutes les tables (users, posts, menu_items, etc.)
2. ✅ Créer les triggers automatiques
3. ✅ Insérer les données de test
4. ✅ Insérer le menu complet du restaurant

Vous devriez voir :
```
🚀 Configuration de la base de données MySQL...
📄 Exécution du schéma SQL...
✅ Schéma créé avec succès !
🌱 Insertion des données initiales...
✅ Données insérées avec succès !
🎉 Base de données configurée avec succès !
```

---

## 🎮 Étape 6 : Démarrer le Serveur

```bash
npm run dev
```

Vous devriez voir :
```
🚀 Serveur démarré avec succès !
📍 URL: http://localhost:3001
🌍 Environnement: development
🔗 Frontend: http://localhost:3000

📚 Routes disponibles:
  - GET  /health
  - POST /api/auth/register
  - POST /api/auth/login
  ...

✨ La Terrasse API est prête !
```

✅ **Le serveur est lancé !**

---

## ✅ Étape 7 : Tester l'API

### Test 1 : Health Check

```bash
curl http://localhost:3001/health
```

Devrait retourner :
```json
{"status":"OK","message":"La Terrasse API is running"}
```

### Test 2 : Récupérer le Menu

```bash
curl http://localhost:3001/api/menu
```

Devrait retourner le menu complet avec toutes les catégories.

### Test 3 : Se Connecter

```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@laterrasse.fr","password":"password123"}'
```

Devrait retourner un token JWT :
```json
{
  "message": "Connexion réussie",
  "user": {...},
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

---

## 🎯 Comptes de Test Disponibles

```
👑 Admin :
  Email    : admin@laterrasse.fr
  Password : password123

👨‍💼 Mehmet :
  Email    : mehmet@laterrasse.fr
  Password : password123

👤 Client :
  Email    : client@example.com
  Password : password123
```

---

## 🐛 Problèmes Courants

### ❌ "Can't connect to MySQL server"

**Solution :**
```bash
# Démarrer MySQL
brew services start mysql

# Vérifier qu'il tourne
brew services list
```

### ❌ "Access denied for user 'root'@'localhost'"

**Solution 1 - Pas de mot de passe :**
```bash
mysql -u root
ALTER USER 'root'@'localhost' IDENTIFIED BY '';
FLUSH PRIVILEGES;
EXIT;
```

Puis dans `.env`, laisser vide : `DB_PASSWORD=`

**Solution 2 - Définir un mot de passe :**
```bash
mysql -u root
ALTER USER 'root'@'localhost' IDENTIFIED BY 'monmotdepasse';
FLUSH PRIVILEGES;
EXIT;
```

Puis dans `.env` : `DB_PASSWORD=monmotdepasse`

### ❌ "Unknown database 'laterrasse_db'"

**Solution :**
```bash
mysql -u root -p
CREATE DATABASE laterrasse_db;
EXIT;
```

Puis réexécutez : `npm run db:setup`

### ❌ "Port 3001 already in use"

**Solution :**

Changez le port dans `.env` :
```env
PORT=3002
```

---

## 🎉 C'est Prêt !

Votre backend est maintenant opérationnel ! 🚀

### Commandes Utiles

```bash
# Démarrer le serveur en développement
npm run dev

# Démarrer en production
npm start

# Réinitialiser la base de données
npm run db:setup

# Arrêter MySQL
brew services stop mysql

# Redémarrer MySQL
brew services restart mysql
```

### Prochaines Étapes

1. ✅ Backend opérationnel
2. 🔄 Connecter le frontend Next.js aux API
3. 🧪 Tester les endpoints avec Postman
4. 🎨 Développer les features

---

## 📚 Documentation

- **[README.md](./README.md)** - Documentation complète
- **[INSTALLATION_MYSQL.md](./INSTALLATION_MYSQL.md)** - Guide MySQL détaillé
- **[API_EXAMPLES.md](./API_EXAMPLES.md)** - Exemples de code
- **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Architecture technique

---

## 💬 Besoin d'Aide ?

Si vous rencontrez des problèmes :

1. Vérifiez que MySQL tourne : `brew services list`
2. Vérifiez la connexion : `mysql -u root -p`
3. Vérifiez le fichier `.env`
4. Consultez les logs du serveur

---

**Bon développement ! 🍔**

