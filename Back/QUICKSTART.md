# 🚀 Démarrage Rapide - Backend La Terrasse

## Installation en 3 étapes

### 1️⃣ Installer les dépendances

```bash
cd Back
npm install
```

### 2️⃣ Configurer MySQL

**Installer MySQL (si pas déjà fait) :**

```bash
brew install mysql
brew services start mysql
```

**Créer la base de données :**

```bash
# Se connecter à MySQL
mysql -u root -p
# (Appuyez sur Entrée si pas de mot de passe)

# Dans MySQL :
CREATE DATABASE laterrasse_db;
EXIT;
```

**Modifier le fichier `.env` si nécessaire :**

Le fichier `.env` existe déjà avec les paramètres par défaut :

```env
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=        # Votre mot de passe MySQL (ou vide)
DB_NAME=laterrasse_db
```

📚 **Guide complet** : Voir [INSTALLATION_MYSQL.md](./INSTALLATION_MYSQL.md)

### 3️⃣ Initialiser et démarrer

```bash
# Créer les tables et insérer les données
npm run db:setup

# Démarrer le serveur
npm run dev
```

Le serveur démarre sur **http://localhost:3001** 🎉

## ✅ Vérifier que ça fonctionne

```bash
# Test simple
curl http://localhost:3001/health

# Devrait retourner :
# {"status":"OK","message":"La Terrasse API is running"}
```

## 🔑 Comptes de test

```
Admin :
- Email : admin@laterrasse.fr
- Password : password123

Client :
- Email : client@example.com  
- Password : password123
```

## 📡 Tester les endpoints

### Récupérer le menu

```bash
curl http://localhost:3001/api/menu
```

### S'inscrire

```bash
curl -X POST http://localhost:3001/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.com","password":"test123","username":"Test User"}'
```

### Se connecter

```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@laterrasse.fr","password":"password123"}'
```

## 🐛 Problèmes courants

### MySQL n'est pas démarré

```bash
# macOS avec Homebrew
brew services start mysql

# Vérifier le statut
brew services list
```

### Le port 3001 est déjà utilisé

Changez le port dans `.env` :
```env
PORT=3002
```

### Erreur de connexion à la base de données

Vérifiez que :
- MySQL est démarré : `brew services list`
- Le mot de passe dans `.env` est correct
- La base de données `laterrasse_db` existe

```bash
# Vérifier les bases de données
mysql -u root -p -e "SHOW DATABASES;"
```

## 📚 Documentation complète

Consultez [README.md](./README.md) pour la documentation complète.

## 🎯 Prochaines étapes

1. ✅ Backend fonctionnel
2. 🔄 Connecter le frontend aux API
3. 🎨 Tester les endpoints avec Postman
4. 🚀 Déployer sur un serveur

---

**Bon développement ! 🍔**

