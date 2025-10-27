# 🚀 Guide de déploiement - Frontend La Terrasse

## Étape 1 : Configurer l'environnement local

1. **Créer le fichier `.env.local`** :
   ```bash
   echo "NEXT_PUBLIC_API_URL=http://localhost:3001" > .env.local
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Lancer en développement** :
   ```bash
   npm run dev
   ```

4. **Ouvrir** : http://localhost:3000

---

## Étape 2 : Déployer sur Vercel

### Via GitHub (Recommandé)

1. **Push sur GitHub** (déjà fait ✅)

2. **Aller sur Vercel** : https://vercel.com
   - Connectez-vous avec GitHub

3. **Importer le projet** :
   - Cliquez **"Add New"** → **"Project"**
   - Sélectionnez `Laterrasse`

4. **Configurer** :
   ```
   Root Directory: Front
   Framework: Next.js (auto-détecté)
   Build Command: npm run build (auto)
   Output Directory: .next (auto)
   ```

5. **Ajouter la variable d'environnement** :
   ```
   NEXT_PUBLIC_API_URL = https://laterrasse.onrender.com
   ```

6. **Déployer** ! 🚀

### Via CLI

```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Production
vercel --prod
```

---

## Étape 3 : Mettre à jour le backend

Une fois déployé sur Vercel (ex: `https://laterrasse.vercel.app`), mettez à jour Render :

1. Allez sur **Render Dashboard**
2. Sélectionnez votre service backend
3. **Environment** → Modifier :
   ```
   FRONTEND_URL=https://laterrasse.vercel.app
   ```
4. Sauvegarder (redémarrage auto)

---

## ✅ Vérification

1. **Frontend** : Ouvrez votre URL Vercel
2. **Console** : Vérifiez qu'il n'y a pas d'erreurs CORS
3. **Test** : Essayez le jeu → Soumettez un score
4. **Backend** : Vérifiez les logs sur Render

---

## 🎯 URLs de production

```
Frontend:  https://votre-app.vercel.app
Backend:   https://laterrasse.onrender.com
Database:  OVH MySQL
```

---

## 🔧 Commandes utiles

```bash
# Développement
npm run dev

# Build de production
npm run build

# Démarrer la version build
npm start

# Linter
npm run lint
```

---

## 📝 Déploiements futurs

Après le premier déploiement, **chaque push sur `main`** déclenchera automatiquement un déploiement sur Vercel ! 🎉

