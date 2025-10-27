# 📦 Guide Build & Upload FTP - La Terrasse

## 🔧 Configuration initiale (à faire une seule fois)

### 1. Créer le fichier `.env.production`

Dans le dossier `Front/`, créez un fichier `.env.production` :

```bash
# .env.production
NEXT_PUBLIC_API_URL=https://laterrasse.onrender.com
```

**Important** : Ce fichier ne doit PAS être committé sur GitHub (il est ignoré par .gitignore)

---

## 🏗️ Build du projet

### Étape 1 : Se placer dans le dossier Front

```bash
cd /Users/garyhaas/Desktop/LaTerrasse/Front
```

### Étape 2 : Installer les dépendances (si pas déjà fait)

```bash
npm install
```

### Étape 3 : Créer le build de production

```bash
npm run build
```

Cette commande va :
- ✅ Compiler votre code Next.js
- ✅ Générer les fichiers HTML statiques
- ✅ Optimiser le JavaScript et CSS
- ✅ Créer un dossier `out/` avec tous les fichiers prêts

**Temps estimé** : 1-2 minutes

### Résultat

Vous aurez un dossier `Front/out/` contenant :
```
out/
├── _next/           # Assets (JS, CSS, images)
├── carte/           # Page de la carte
├── galerie/         # Page galerie
├── jeu/             # Page du jeu
├── index.html       # Page d'accueil
├── 404.html         # Page erreur 404
└── ...
```

---

## 📤 Upload via FTP

### Option 1 : FileZilla (Interface graphique - Recommandé)

1. **Télécharger FileZilla** : https://filezilla-project.org

2. **Se connecter à votre hébergeur OVH** :
   - Host : `ftp.votredomaine.com` (ou l'IP donnée par OVH)
   - Username : Votre login FTP OVH
   - Password : Votre mot de passe FTP
   - Port : `21` (FTP) ou `22` (SFTP)

3. **Naviguer vers le dossier web** :
   - Généralement : `/www/` ou `/public_html/`
   - Ou un sous-dossier si vous voulez : `/www/laterrasse/`

4. **Uploader le contenu du dossier `out/`** :
   - ⚠️ **Important** : Uploadez le **CONTENU** de `out/`, pas le dossier `out/` lui-même
   - Sélectionnez TOUS les fichiers dans `out/`
   - Glissez-déposez dans le dossier distant
   - **Temps estimé** : 5-10 minutes selon votre connexion

### Option 2 : Via terminal (si vous préférez)

```bash
# Installation de lftp (si pas déjà installé)
brew install lftp

# Se connecter et uploader
cd Front/out
lftp ftp://votre-login@ftp.votredomaine.com
# Entrez votre mot de passe
cd /www
mirror -R . .
```

---

## ✅ Vérification

1. **Ouvrir votre site** : http://votredomaine.com

2. **Tester les pages** :
   - ✅ Page d'accueil : http://votredomaine.com
   - ✅ La carte : http://votredomaine.com/carte
   - ✅ Galerie : http://votredomaine.com/galerie
   - ✅ Jeu : http://votredomaine.com/jeu

3. **Vérifier les appels API** :
   - Ouvrez la console du navigateur (F12)
   - Allez sur la page du jeu
   - Vérifiez qu'il n'y a pas d'erreur CORS
   - Testez de soumettre un score

---

## 🔄 Mettre à jour le site

Quand vous faites des modifications :

```bash
# 1. Se placer dans Front
cd /Users/garyhaas/Desktop/LaTerrasse/Front

# 2. Rebuild
npm run build

# 3. Uploader à nouveau via FTP
# (même processus qu'au-dessus, ça écrase les anciens fichiers)
```

---

## ⚙️ Configuration OVH

### Si votre site est dans un sous-dossier

Si vous uploadez dans `/www/laterrasse/` au lieu de `/www/`, décommentez cette ligne dans `next.config.ts` :

```typescript
basePath: '/laterrasse',
```

Puis refaites un build.

### Fichier .htaccess (pour le routing)

Créez un fichier `.htaccess` dans votre dossier web OVH :

```apache
# Fichier .htaccess à mettre dans /www/ (à côté de votre site)

<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Ne pas réécrire les fichiers existants
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Rediriger toutes les autres requêtes vers index.html
  RewriteRule ^(.*)$ /$1.html [L,QSA]
  
  # Gestion des erreurs 404
  ErrorDocument 404 /404.html
</IfModule>

# Activer la compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript application/json
</IfModule>

# Cache pour les assets statiques
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## 🔧 Dépannage

### Erreur : Module not found

**Solution** : Supprimez `.next` et `node_modules`, puis réinstallez :
```bash
rm -rf .next node_modules
npm install
npm run build
```

### Les images ne s'affichent pas

**Vérification** :
- Les images sont bien dans `public/` ?
- Le chemin est correct ? (commence par `/` pour la racine)

### Erreur CORS

**Solution** : Vérifiez que `FRONTEND_URL` sur Render correspond à votre domaine OVH :
```
FRONTEND_URL=http://votredomaine.com
```

### La page 404 s'affiche tout le temps

**Solution** : Créez/vérifiez le fichier `.htaccess` (voir au-dessus)

---

## 📝 Scripts package.json utiles

Votre `package.json` contient déjà ces scripts :

```json
{
  "dev": "next dev",           // Développement local
  "build": "next build",       // Build pour production
  "start": "next start",       // Serveur Node (pas utilisé ici)
  "lint": "next lint"          // Vérifier le code
}
```

---

## 🎯 Récapitulatif de l'architecture finale

```
┌─────────────────┐
│   UTILISATEUR   │
└────────┬────────┘
         │
         ├──→ Frontend (OVH - FTP)
         │    http://votredomaine.com
         │    Site statique (HTML/CSS/JS)
         │
         └──→ Backend API (Render)
              https://laterrasse.onrender.com
              Node.js + Express
              │
              └──→ Base de données (OVH)
                   MySQL
```

---

## ⏱️ Checklist complète

- [ ] Créer `.env.production` avec `NEXT_PUBLIC_API_URL`
- [ ] Lancer `npm install`
- [ ] Lancer `npm run build`
- [ ] Vérifier que le dossier `out/` existe
- [ ] Se connecter à OVH via FTP (FileZilla)
- [ ] Uploader le **contenu** de `out/` dans `/www/`
- [ ] Créer le fichier `.htaccess` si nécessaire
- [ ] Mettre à jour `FRONTEND_URL` sur Render avec votre domaine OVH
- [ ] Tester le site
- [ ] Vérifier les appels API (console navigateur)
- [ ] 🎉 C'est en ligne !

