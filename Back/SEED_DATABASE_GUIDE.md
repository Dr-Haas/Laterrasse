# 🌱 Guide de remplissage de la base de données

## 📝 Contenu du seed

Ce script va créer dans votre base de données OVH :

### 👥 Utilisateurs (11)
- 1 admin (Mehmet)
- 10 clients (Sophie, Thomas, Marie, etc.)

### 💬 Posts / Avis (10)
- 10 avis clients pour le livre d'or
- Tous **approuvés** et prêts à s'afficher
- Avec likes et commentaires variés
- Messages réalistes et positifs

### 🍽️ Menu Complet
- **6 catégories** : Sandwiches, Burgers, Assiettes, Box, Accompagnements, Boissons
- **27 items au total** :
  - 4 sandwiches (Pain rond, Galette, Baguette, Tacos)
  - 4 burgers (Classique, Cheese, Poulet, XXL)
  - 3 assiettes (Kebab, Mix, Végé)
  - 2 box (Duo, Famille)
  - 4 accompagnements (Frites, Cheddar, Salade, Nuggets)
  - 5 boissons (Coca, Fanta, Sprite, Eau, Perrier)

### 🎮 Scores de jeu (10)
- 10 scores pour le Hall of Fame du jeu
- Difficultés variées (easy, medium, hard)

### 🏆 Légendes / Hall of Fame (5)
- 5 légendes approuvées avec anecdotes
- Catégories variées

---

## 🚀 Comment utiliser

### Méthode 1 : Via Node.js (Recommandé)

#### 1. Assurez-vous que vos variables d'environnement sont configurées

Vérifiez votre fichier `.env` dans `/Back/` :

```bash
DB_HOST=votre-host-mysql-ovh.mysql.db
DB_PORT=3306
DB_USER=votre_username
DB_PASSWORD=votre_password
DB_NAME=laterrasse_db
DB_SSL=false  # ou true si nécessaire
```

#### 2. Exécutez le script

```bash
cd /Users/garyhaas/Desktop/LaTerrasse/Back
node seed-database.js
```

#### 3. Résultat attendu

```
🌱 Démarrage du seed de la base de données...

📡 Connexion à la base de données OVH...
✅ Connecté à la base de données

📖 Lecture du fichier seed-production.sql...
✅ Fichier SQL chargé

🚀 Exécution des requêtes SQL...
⏳ Cela peut prendre quelques secondes...

✅ Requêtes exécutées avec succès !

📊 Résumé :
═══════════════════════════════════════
✓ Utilisateurs créés      : 11
✓ Posts (avis) créés      : 10
✓ Catégories menu créées  : 6
✓ Items menu créés        : 27
✓ Scores de jeu créés     : 10
✓ Légendes créées         : 5
═══════════════════════════════════════

🎉 Base de données remplie avec succès !
👉 Votre site peut maintenant afficher des données réelles

🔌 Connexion fermée
```

---

### Méthode 2 : Via PhpMyAdmin (OVH)

Si vous préférez utiliser l'interface OVH :

1. **Connectez-vous à PhpMyAdmin** sur votre espace OVH
2. **Sélectionnez votre base** `laterrasse_db`
3. **Allez dans l'onglet "SQL"**
4. **Copiez-collez** le contenu de `seed-production.sql`
5. **Cliquez sur "Exécuter"**

---

## ⚠️ Important

### Données existantes

- **Le script ne supprime PAS les données existantes**
- Il **ajoute** de nouvelles données
- Si vous voulez repartir de zéro, utilisez d'abord `schema.sql`

### Sécurité

- Les mots de passe des utilisateurs sont des hashs de test
- Ce sont **uniquement des données de démonstration**
- À personnaliser pour une vraie production

---

## 🧪 Tester que ça fonctionne

### 1. Tester l'API

```bash
# Posts (livre d'or)
curl https://laterrasse.onrender.com/api/posts

# Menu
curl https://laterrasse.onrender.com/api/menu

# Scores
curl https://laterrasse.onrender.com/api/game-scores/top

# Légendes
curl https://laterrasse.onrender.com/api/legends
```

### 2. Tester le frontend

Une fois uploadé via FTP, ouvrez :
- `http://votredomaine.com/galerie` → Vous devriez voir 10 avis
- `http://votredomaine.com/carte` → Vous devriez voir le menu complet
- `http://votredomaine.com/jeu` → Testez et soumettez un score

---

## 🔧 Dépannage

### Erreur de connexion

```
❌ Error: connect ECONNREFUSED
```

**Solutions :**
- Vérifiez `DB_HOST` et `DB_PORT`
- Autorisez votre IP sur OVH (panel → Bases de données → Autorisations d'accès)
- Ajoutez `0.0.0.0/0` pour autoriser toutes les IPs (moins sécurisé)

### Accès refusé

```
❌ Error: Access denied for user
```

**Solutions :**
- Vérifiez `DB_USER` et `DB_PASSWORD`
- Vérifiez que l'utilisateur a les droits sur la base

### Base introuvable

```
❌ Error: Unknown database
```

**Solutions :**
- Vérifiez `DB_NAME`
- Créez la base si elle n'existe pas encore

### Clés en double

```
❌ Error: Duplicate entry
```

**Solutions :**
- Les données existent déjà
- Pas de problème, vous pouvez ignorer ou supprimer les anciennes données d'abord

---

## 🎯 Prochaines étapes

Après avoir rempli la base :

1. ✅ **Testez l'API** avec les URLs ci-dessus
2. ✅ **Rebuild le frontend** : `npm run build`
3. ✅ **Uploadez via FTP** le contenu de `laterrasseFront/`
4. ✅ **Testez votre site** en ligne
5. 🎉 **Profitez** de votre site avec de vraies données !

---

## 📝 Personnalisation

Pour personnaliser les données :

1. Éditez `seed-production.sql`
2. Modifiez les textes, noms, prix, etc.
3. Relancez le script

**Exemples de personnalisations :**
- Changez les noms des plats
- Ajustez les prix
- Modifiez les avis clients
- Changez les anecdotes du Hall of Fame

---

Besoin d'aide ? Consultez les logs d'erreur détaillés du script ! 🚀

