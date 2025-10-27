# Configuration des variables d'environnement - Frontend

## 📝 Créer les fichiers .env

### Pour le développement local

Créez un fichier `.env.local` à la racine du dossier `Front/` :

```bash
# .env.local
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Pour la production (Vercel)

Sur Vercel, vous n'avez PAS besoin de créer de fichier. Configurez directement :

1. Allez sur votre dashboard Vercel
2. Sélectionnez votre projet
3. Allez dans **Settings** → **Environment Variables**
4. Ajoutez :
   - **Key:** `NEXT_PUBLIC_API_URL`
   - **Value:** `https://laterrasse.onrender.com`
   - **Environment:** Cochez `Production`, `Preview`, et `Development`
5. Cliquez sur **Save**

---

## 🚀 Déployer sur Vercel (Recommandé pour Next.js)

### Méthode 1 : Via GitHub (Plus simple)

1. **Pushez votre code sur GitHub** (déjà fait ✅)

2. **Connectez-vous à Vercel** : https://vercel.com
   - Connectez-vous avec votre compte GitHub

3. **Importez votre projet** :
   - Cliquez sur **"Add New"** → **"Project"**
   - Sélectionnez votre repo `Laterrasse`
   - Vercel détectera automatiquement Next.js

4. **Configuration** :
   - **Root Directory:** `Front`
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (automatique)
   - **Output Directory:** `.next` (automatique)

5. **Variables d'environnement** :
   - Ajoutez `NEXT_PUBLIC_API_URL` = `https://laterrasse.onrender.com`

6. **Déployez** !
   - Cliquez sur **"Deploy"**
   - Vercel va build et déployer automatiquement
   - Vous obtiendrez une URL type : `https://laterrasse.vercel.app`

### Méthode 2 : Via CLI Vercel

```bash
# Installer Vercel CLI
npm i -g vercel

# Se placer dans le dossier Front
cd Front

# Se connecter à Vercel
vercel login

# Déployer
vercel

# Suivre les instructions :
# - Set up and deploy? Yes
# - Which scope? Votre compte
# - Link to existing project? No
# - Project name? laterrasse
# - In which directory is your code located? ./
# - Override settings? No
```

---

## 🔄 Mettre à jour le backend

Une fois votre frontend déployé, n'oubliez pas de mettre à jour la variable `FRONTEND_URL` sur **Render** :

1. Allez sur votre dashboard Render
2. Sélectionnez votre service backend
3. Allez dans **Environment**
4. Modifiez `FRONTEND_URL` :
   ```
   FRONTEND_URL=https://votre-app.vercel.app
   ```
5. Sauvegardez (le service redémarrera automatiquement)

---

## ✅ Tester après le déploiement

1. **Frontend** : https://votre-app.vercel.app
2. **Backend** : https://laterrasse.onrender.com/health
3. **Vérifiez** que les appels API fonctionnent (ouvrez la console du navigateur)

---

## 🎯 Récapitulatif des URLs

| Service | Environnement | URL |
|---------|---------------|-----|
| Backend | Production | https://laterrasse.onrender.com |
| Backend | Local | http://localhost:3001 |
| Frontend | Production | https://votre-app.vercel.app |
| Frontend | Local | http://localhost:3000 |
| Base de données | Production | OVH MySQL |
| Base de données | Local | localhost:3306 |

---

## 🔧 Dépannage

### Erreur CORS
Si vous avez des erreurs CORS, vérifiez que `FRONTEND_URL` sur Render correspond bien à votre URL Vercel.

### API non accessible
Vérifiez que `NEXT_PUBLIC_API_URL` est bien configuré sur Vercel et commence par `https://`

### Builds qui échouent
Vérifiez les logs sur Vercel ou lancez `npm run build` localement pour voir les erreurs.

