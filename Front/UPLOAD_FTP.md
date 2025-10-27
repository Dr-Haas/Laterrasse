# 📤 Guide d'upload FTP - laterrasseFront

## ✅ Build terminé !

Votre dossier **`laterrasseFront`** est prêt à être uploadé.

📁 Emplacement : `/Users/garyhaas/Desktop/LaTerrasse/Front/laterrasseFront/`
📊 Taille : **7.9 MB**
📦 Contenu : Site statique complet (HTML, CSS, JS, images)

---

## 🚀 Étapes pour uploader via FTP

### 1. Ouvrir FileZilla (ou votre client FTP préféré)

**Télécharger FileZilla** : https://filezilla-project.org

### 2. Se connecter à OVH

Remplissez les informations de connexion :

```
Hôte :      ftp.votredomaine.com  (ou l'IP fournie par OVH)
Identifiant : votre_login_ftp
Mot de passe : votre_password_ftp
Port :        21 (FTP) ou 22 (SFTP)
```

Puis cliquez sur **"Connexion rapide"**

### 3. Naviguer vers le dossier web sur OVH

Dans la partie **distante** (droite) de FileZilla :
- Allez dans `/www/` ou `/public_html/`
- OU dans un sous-dossier : `/www/laterrasse/` si vous le souhaitez

### 4. Uploader le contenu

⚠️ **IMPORTANT** : Uploadez le **CONTENU** de `laterrasseFront/`, pas le dossier lui-même !

**Sur votre Mac** :
1. Ouvrez Finder
2. Allez dans : `/Users/garyhaas/Desktop/LaTerrasse/Front/laterrasseFront/`
3. Sélectionnez **TOUT le contenu** (Cmd+A)

**Dans FileZilla** :
1. Glissez-déposez tous les fichiers vers le dossier distant `/www/`
2. Attendez la fin de l'upload (5-10 minutes)

### 5. Vérifier l'upload

✅ Vous devriez voir dans `/www/` :
```
/www/
├── _next/               ← Dossier avec les assets
├── carte/               ← Page de la carte
├── galerie/             ← Page galerie
├── jeu/                 ← Page du jeu
├── index.html           ← Page d'accueil
├── favicon.ico          ← Icône
├── la_terrasse_header.png
└── ...autres fichiers
```

---

## 🌐 Tester votre site

Une fois l'upload terminé, ouvrez votre navigateur :

```
http://votredomaine.com              ← Page d'accueil
http://votredomaine.com/carte        ← La carte
http://votredomaine.com/galerie      ← Galerie
http://votredomaine.com/jeu          ← Mini-jeu
```

---

## 🔧 Créer le fichier .htaccess (si nécessaire)

Si les pages autres que l'accueil ne fonctionnent pas, créez un fichier `.htaccess` dans `/www/` :

**Contenu du fichier .htaccess** :

```apache
# Réécriture d'URL
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  
  # Ne pas réécrire les fichiers existants
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  
  # Ajouter .html si besoin
  RewriteCond %{REQUEST_FILENAME}.html -f
  RewriteRule ^(.*)$ /$1.html [L,QSA]
  
  # Page 404
  ErrorDocument 404 /404.html
</IfModule>

# Compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css text/javascript application/javascript
</IfModule>

# Cache
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

**Comment créer .htaccess dans FileZilla** :
1. Clic droit dans `/www/` → "Créer un fichier"
2. Nommez-le `.htaccess`
3. Clic droit → "Éditer"
4. Collez le contenu ci-dessus
5. Sauvegardez

---

## 🔄 Mettre à jour le site

Pour mettre à jour votre site après des modifications :

```bash
# 1. Se placer dans Front
cd /Users/garyhaas/Desktop/LaTerrasse/Front

# 2. Rebuild
npm run build

# 3. Uploader à nouveau via FTP
# Le nouveau contenu de laterrasseFront/ écrasera l'ancien
```

---

## ⚙️ Mettre à jour Render

N'oubliez pas de configurer `FRONTEND_URL` sur Render avec votre vrai domaine :

1. Dashboard Render → Votre service backend
2. Environment → Modifier :
   ```
   FRONTEND_URL=http://votredomaine.com
   ```
3. Sauvegarder (redémarrage auto)

---

## 🎯 Architecture finale

```
┌─────────────┐
│ UTILISATEUR │
└──────┬──────┘
       │
       ├──→ Frontend (OVH FTP)
       │    http://votredomaine.com
       │    Dossier: laterrasseFront/
       │
       └──→ Backend (Render)
            https://laterrasse.onrender.com
            │
            └──→ Base de données (OVH MySQL)
```

---

## ✅ Checklist finale

- [x] Build réussi → `laterrasseFront/` créé
- [ ] Connexion FTP à OVH
- [ ] Upload du contenu dans `/www/`
- [ ] Créer `.htaccess` si besoin
- [ ] Tester le site : http://votredomaine.com
- [ ] Mettre à jour `FRONTEND_URL` sur Render
- [ ] Tester les appels API (jeu, galerie)
- [ ] 🎉 Site en ligne !

---

## 🆘 Besoin d'aide ?

- **Fichiers manquants ?** → Re-build avec `npm run build`
- **Pages 404 ?** → Vérifiez le `.htaccess`
- **Erreurs API ?** → Vérifiez `FRONTEND_URL` sur Render
- **Images cassées ?** → Vérifiez que tout le dossier est uploadé

---

**Prêt à uploader !** 🚀

