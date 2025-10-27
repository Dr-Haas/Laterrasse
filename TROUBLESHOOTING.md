# 🔧 Guide de Dépannage - La Terrasse

## 🚨 Erreurs courantes et solutions

### 1. "Failed to fetch" dans le frontend

**Cause :** Le frontend ne peut pas contacter l'API backend.

**Solutions :**
- ✅ Vérifier que le backend est accessible : `curl https://laterrasse.onrender.com/health`
- ✅ Vérifier `.env.local` : doit contenir `NEXT_PUBLIC_API_URL=https://laterrasse.onrender.com`
- ✅ Redémarrer le serveur Next.js après modification du `.env`
- ✅ Vérifier CORS sur le backend (`server.js`)

---

### 2. "Incorrect arguments to mysqld_stmt_execute"

**Cause :** Incompatibilité PostgreSQL/MySQL - L'ordre des paramètres ne correspond pas.

**Solution :**
- ✅ Dans chaque controller, les paramètres doivent être dans l'ordre des `?` dans la requête SQL
- ✅ Exemple correct :
```javascript
const params = [];
if (approved !== 'all') {
  whereClause = 'WHERE approved = ?';
  params.push(approved);
}
params.push(limit, offset);
// Requête : WHERE approved = ? LIMIT ? OFFSET ?
```

**Fichiers déjà corrigés :**
- ✅ gameScoresController.js
- ✅ legendsController.js
- ✅ postsController.js
- ✅ menuController.js
- ✅ authController.js
- ✅ commentsController.js

---

### 3. "Undeclared variable: $1"

**Cause :** Syntaxe PostgreSQL (`$1`, `$2`) utilisée avec MySQL.

**Solution :**
- ✅ Remplacer tous les `$1`, `$2`, etc. par `?`
- ✅ Déjà fait dans tous les controllers !

---

### 4. Erreur avec "RETURNING *"

**Cause :** `RETURNING` est une commande PostgreSQL, pas MySQL.

**Solution :**
- ❌ Avant : `INSERT INTO users (...) VALUES (...) RETURNING *`
- ✅ Après : 
```javascript
const result = await query('INSERT INTO users (...) VALUES (...)');
const insertId = result.rows.insertId;
const user = await query('SELECT * FROM users WHERE id = ?', [insertId]);
```

---

### 5. Render ne redéploie pas automatiquement

**Cause :** Webhook GitHub → Render parfois en panne.

**Solution :**
1. Aller sur https://dashboard.render.com/
2. Cliquer sur votre service backend
3. Cliquer sur "Manual Deploy" → "Deploy latest commit"
4. Attendre 2-3 minutes

---

### 6. Erreur d'hydration React (cz-shortcut-listen)

**Cause :** Extension de navigateur (ColorZilla, etc.)

**Solution :**
- ⚠️ Ce n'est **pas** un problème de code
- Vous pouvez l'ignorer ou désactiver vos extensions

---

### 7. Les données ne chargent pas (pages vides)

**Vérifications :**

1. **Backend accessible ?**
```bash
curl https://laterrasse.onrender.com/health
# Devrait retourner: {"status":"OK",...}
```

2. **Base de données contient des données ?**
```bash
# Depuis le repo Back/
node seed-database.js
```

3. **Variables d'environnement correctes ?**

Backend (Render) :
- `DB_HOST` = votre_host_ovh
- `DB_USER` = votre_user
- `DB_PASSWORD` = votre_password
- `DB_NAME` = laterrasse_db
- `DB_SSL` = true
- `FRONTEND_URL` = https://laterrasse.dikio.fr

Frontend (.env.local) :
- `NEXT_PUBLIC_API_URL` = https://laterrasse.onrender.com

4. **API retourne bien des données ?**
```bash
curl https://laterrasse.onrender.com/api/posts
curl https://laterrasse.onrender.com/api/menu
curl https://laterrasse.onrender.com/api/game-scores/top
```

---

## 🧪 Tests rapides

### Tester le backend en ligne
```bash
# Health check
curl https://laterrasse.onrender.com/health

# Posts
curl https://laterrasse.onrender.com/api/posts

# Menu
curl https://laterrasse.onrender.com/api/menu

# Scores
curl https://laterrasse.onrender.com/api/game-scores/top

# Légendes
curl https://laterrasse.onrender.com/api/legends
```

### Tester le frontend local
1. Ouvrir http://localhost:3000
2. Ouvrir la console (F12)
3. Vérifier qu'il n'y a pas d'erreurs "Failed to fetch" ou "500"

---

## 📝 Checklist de déploiement

Avant de mettre en production :

- [ ] Tous les controllers convertis PostgreSQL → MySQL
- [ ] Variables d'environnement configurées sur Render
- [ ] Base de données peuplée avec des données
- [ ] Backend accessible via curl
- [ ] CORS configuré correctement
- [ ] Frontend builé avec les bonnes variables d'environnement
- [ ] Tests sur toutes les pages (Accueil, Carte, Galerie, Hall of Fame, Jeu)

---

## 🆘 Si rien ne marche

1. **Vérifier les logs Render**
   - Dashboard Render → Service → Onglet "Logs"
   - Chercher les erreurs rouges

2. **Tester avec backend local**
   ```bash
   cd Back
   npm start
   ```
   Puis modifier `.env.local` :
   ```
   NEXT_PUBLIC_API_URL=http://localhost:3001
   ```

3. **Rebuilder le frontend**
   ```bash
   cd Front
   rm -rf .next laterrasseFront node_modules/.cache
   npm run build
   ```

4. **Vérifier la base de données**
   - Se connecter à OVH
   - Vérifier que les tables existent
   - Vérifier qu'il y a des données
   - Vérifier les permissions d'accès

---

## 📚 Fichiers importants

- **Backend** : `/Back/src/server.js` - Configuration CORS et routes
- **Controllers** : `/Back/src/controllers/*.js` - Logique API
- **Database** : `/Back/src/config/database.js` - Connexion MySQL
- **Frontend API** : `/Front/lib/api.ts` - Appels API centralisés
- **Env Backend** : `/Back/.env` - Variables base de données
- **Env Frontend** : `/Front/.env.local` - URL de l'API

---

**Dernière mise à jour :** 27 octobre 2025

