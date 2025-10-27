# 🔍 Guide de Test - Connexion API

## Problèmes corrigés ✅

### 1. **Galerie (MasonryGallery)**
- **Avant** : `data.posts` ❌
- **Après** : `data.data` ✅

### 2. **Menu (MenuCategories)**
- **Avant** : `data.categories` ❌
- **Après** : `data.data` ✅

### 3. **Hall of Fame (TopScores & LegendsGallery)**
- Déjà correct : `data.data` ✅

### 4. **Variables d'environnement**
- Créé `.env.local` avec `http://localhost:3001`
- Créé `.env.production` avec `https://laterrasse.onrender.com`

## 🧪 Comment tester

### Test en local (avec backend local)

```bash
# Terminal 1 - Backend
cd Back
npm start

# Terminal 2 - Frontend
cd Front
npm run dev
```

Puis visitez :
- http://localhost:3000 (Accueil)
- http://localhost:3000/carte (Menu - doit charger les catégories)
- http://localhost:3000/galerie (Galerie - doit charger les posts)
- http://localhost:3000/hall-of-fame (Hall of Fame - doit charger les scores)
- http://localhost:3000/jeu (Jeu - doit pouvoir soumettre un score)

### Test en local (avec backend en production)

Modifiez temporairement `.env.local` :
```env
NEXT_PUBLIC_API_URL=https://laterrasse.onrender.com
```

Puis redémarrez le serveur de dev.

### Test en production

Après avoir buildé et uploadé sur FTP :

```bash
cd Front
npm run build
# Uploader le dossier laterrasseFront/ via FTP
```

Visitez votre site en production.

## 🐛 Debugging

### Console du navigateur

Ouvrez la console (F12) et regardez :

1. **Network tab** - Vérifiez les appels API :
   - `GET /api/menu` → doit retourner 200
   - `GET /api/posts` → doit retourner 200
   - `GET /api/game-scores/top` → doit retourner 200
   - `GET /api/legends` → doit retourner 200

2. **Console tab** - Recherchez les erreurs :
   - Pas de `CORS` errors
   - Pas de `404` errors
   - Pas de `Cannot read property 'data'` errors

### Vérifier l'URL de l'API

Dans la console du navigateur, tapez :
```javascript
console.log(process.env.NEXT_PUBLIC_API_URL)
```

Devrait afficher :
- En local : `http://localhost:3001`
- En prod : `https://laterrasse.onrender.com`

### Tester directement l'API

```bash
# Tester l'API de santé
curl https://laterrasse.onrender.com/health

# Tester le menu
curl https://laterrasse.onrender.com/api/menu

# Tester les scores
curl https://laterrasse.onrender.com/api/game-scores/top

# Tester les posts
curl https://laterrasse.onrender.com/api/posts

# Tester les légendes
curl https://laterrasse.onrender.com/api/legends
```

## ✅ Checklist

- [ ] Backend démarre sans erreur
- [ ] Frontend démarre sans erreur
- [ ] Page Accueil charge correctement
- [ ] Page Carte affiche les catégories et items du menu
- [ ] Page Galerie affiche les posts (ou message "Pas encore de souvenirs")
- [ ] Page Hall of Fame affiche le classement de Mehmet #1
- [ ] Page Jeu permet de jouer et soumettre un score
- [ ] Aucune erreur dans la console navigateur
- [ ] Aucune erreur CORS
- [ ] Les images s'affichent correctement

## 🔧 Si ça ne fonctionne toujours pas

1. **Vérifiez que le backend est accessible** :
   ```bash
   curl https://laterrasse.onrender.com/health
   ```

2. **Vérifiez les CORS sur Render** :
   - Variable `FRONTEND_URL` doit être configurée
   - Ou mettre `*` temporairement pour tester

3. **Vérifiez la base de données** :
   - Les tables existent ?
   - Il y a des données dedans ?

4. **Rebuilder le frontend** :
   ```bash
   cd Front
   rm -rf .next laterrasseFront node_modules/.cache
   npm run build
   ```

5. **Vérifier les logs Render** :
   - Allez sur render.com
   - Regardez les logs du service backend
   - Cherchez les erreurs

