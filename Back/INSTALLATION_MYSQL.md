# 🐬 Installation de MySQL pour La Terrasse

Guide complet pour installer et configurer MySQL sur macOS.

## 📦 Option 1 : Installation avec Homebrew (Recommandé)

### 1. Installer MySQL

```bash
brew install mysql
```

### 2. Démarrer MySQL

```bash
# Démarrer maintenant
brew services start mysql

# Ou démarrer automatiquement au démarrage
brew services start mysql
```

### 3. Sécuriser l'installation (Recommandé)

```bash
mysql_secure_installation
```

Répondez aux questions :
- **Mot de passe root** : Créez un mot de passe (ou laissez vide pour les tests locaux)
- **Remove anonymous users?** : Y
- **Disallow root login remotely?** : Y
- **Remove test database?** : Y
- **Reload privilege tables?** : Y

### 4. Se connecter à MySQL

```bash
mysql -u root -p
# Entrez votre mot de passe (ou appuyez sur Entrée si vide)
```

### 5. Créer la base de données

```sql
CREATE DATABASE laterrasse_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
SHOW DATABASES;
EXIT;
```

---

## 📦 Option 2 : Installation avec l'installeur officiel

### 1. Télécharger MySQL

Allez sur : https://dev.mysql.com/downloads/mysql/

Téléchargez le package DMG pour macOS.

### 2. Installer

- Ouvrez le fichier `.dmg`
- Suivez l'assistant d'installation
- **Notez bien le mot de passe root temporaire** affiché à la fin !

### 3. Démarrer MySQL

**Avec les Préférences Système :**
1. Ouvrez **Préférences Système**
2. Cliquez sur **MySQL**
3. Cliquez sur **Start MySQL Server**

**Ou en ligne de commande :**
```bash
sudo /usr/local/mysql/support-files/mysql.server start
```

### 4. Ajouter MySQL au PATH

Ajoutez à votre `~/.zshrc` :

```bash
echo 'export PATH="/usr/local/mysql/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### 5. Changer le mot de passe temporaire

```bash
mysql -u root -p
# Entrez le mot de passe temporaire

# Dans MySQL :
ALTER USER 'root'@'localhost' IDENTIFIED BY 'votre_nouveau_mot_de_passe';
# Ou pour pas de mot de passe (tests locaux uniquement) :
ALTER USER 'root'@'localhost' IDENTIFIED BY '';
FLUSH PRIVILEGES;
EXIT;
```

### 6. Créer la base de données

```bash
mysql -u root -p

# Dans MySQL :
CREATE DATABASE laterrasse_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
SHOW DATABASES;
EXIT;
```

---

## 📦 Option 3 : Docker (Alternative)

Si vous préférez utiliser Docker :

```bash
docker run --name laterrasse-mysql \
  -e MYSQL_ROOT_PASSWORD=root \
  -e MYSQL_DATABASE=laterrasse_db \
  -p 3306:3306 \
  -d mysql:8.0 \
  --character-set-server=utf8mb4 \
  --collation-server=utf8mb4_unicode_ci
```

Se connecter :
```bash
docker exec -it laterrasse-mysql mysql -u root -p
# Mot de passe : root
```

---

## ✅ Vérifier l'installation

### Tester la connexion

```bash
mysql -u root -p
```

Vous devriez voir :
```
Welcome to the MySQL monitor.
mysql>
```

### Vérifier la version

```sql
SELECT VERSION();
```

### Lister les bases de données

```sql
SHOW DATABASES;
```

Vous devriez voir `laterrasse_db` dans la liste.

---

## ⚙️ Configurer le Backend

### 1. Modifier le fichier `.env`

Le fichier `/Users/garyhaas/Desktop/LaTerrasse/Back/.env` doit contenir :

```env
# Base de données MySQL
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=             # Votre mot de passe (ou vide si pas de mot de passe)
DB_NAME=laterrasse_db
```

### 2. Installer les dépendances

```bash
cd /Users/garyhaas/Desktop/LaTerrasse/Back
npm install
```

### 3. Initialiser la base de données

```bash
npm run db:setup
```

Cette commande va :
- ✅ Créer toutes les tables
- ✅ Créer les triggers
- ✅ Insérer les données de test
- ✅ Insérer le menu complet

### 4. Démarrer le serveur

```bash
npm run dev
```

Le serveur démarre sur **http://localhost:3001** 🎉

---

## 🧪 Tester

### 1. Health Check

```bash
curl http://localhost:3001/health
```

### 2. Récupérer le menu

```bash
curl http://localhost:3001/api/menu
```

### 3. Se connecter

```bash
curl -X POST http://localhost:3001/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@laterrasse.fr","password":"password123"}'
```

---

## 🔧 Commandes MySQL Utiles

### Arrêter MySQL

```bash
# Avec Homebrew
brew services stop mysql

# Avec l'installeur officiel
sudo /usr/local/mysql/support-files/mysql.server stop

# Avec les Préférences Système
# Ouvrir Préférences Système > MySQL > Stop
```

### Redémarrer MySQL

```bash
# Avec Homebrew
brew services restart mysql

# Avec l'installeur officiel
sudo /usr/local/mysql/support-files/mysql.server restart
```

### Vérifier le statut

```bash
# Avec Homebrew
brew services list

# Avec l'installeur officiel
sudo /usr/local/mysql/support-files/mysql.server status
```

### Se connecter à la base de données

```bash
mysql -u root -p laterrasse_db
```

### Afficher les tables

```sql
SHOW TABLES;
```

### Décrire une table

```sql
DESCRIBE users;
```

### Compter les enregistrements

```sql
SELECT COUNT(*) FROM menu_items;
```

### Supprimer la base de données (⚠️ Danger)

```sql
DROP DATABASE laterrasse_db;
```

---

## 🐛 Problèmes Courants

### "Can't connect to MySQL server"

**Solution :**
1. Vérifiez que MySQL est démarré : `brew services list`
2. Vérifiez le port : `lsof -i :3306`
3. Redémarrez MySQL : `brew services restart mysql`

### "Access denied for user 'root'@'localhost'"

**Solution :**
1. Vérifiez votre mot de passe dans `.env`
2. Réinitialisez le mot de passe :
   ```bash
   mysql -u root
   ALTER USER 'root'@'localhost' IDENTIFIED BY '';
   FLUSH PRIVILEGES;
   ```

### "Unknown database 'laterrasse_db'"

**Solution :**
```bash
mysql -u root -p -e "CREATE DATABASE laterrasse_db;"
```

### "Table doesn't exist"

**Solution :**
Réexécutez le setup :
```bash
npm run db:setup
```

### Port 3306 déjà utilisé

**Solution :**
1. Trouvez le processus : `lsof -i :3306`
2. Tuez-le : `kill -9 <PID>`
3. Ou changez le port dans `.env`

---

## 📊 Interface Graphique (Optionnel)

### MySQL Workbench (Officiel)

Téléchargez : https://dev.mysql.com/downloads/workbench/

### Sequel Ace (macOS, Gratuit)

Téléchargez : https://sequel-ace.com/

Connexion :
- **Host** : localhost
- **Username** : root
- **Password** : (votre mot de passe)
- **Database** : laterrasse_db
- **Port** : 3306

### TablePlus (Payant mais excellent)

Téléchargez : https://tableplus.com/

---

## ✨ Prêt !

Votre base de données MySQL est configurée ! 🎉

**Commandes de base :**

```bash
# Démarrer le serveur
cd /Users/garyhaas/Desktop/LaTerrasse/Back
npm run dev

# Tester l'API
curl http://localhost:3001/health
```

**Comptes de test :**

```
Admin :
  Email: admin@laterrasse.fr
  Password: password123

Client :
  Email: client@example.com
  Password: password123
```

---

**📚 Documentation complète : [README.md](./README.md)**

