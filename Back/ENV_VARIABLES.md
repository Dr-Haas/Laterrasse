# Variables d'environnement - Backend La Terrasse

## Configuration pour Render (Production)

### 🗄️ Base de données MySQL (OVH)

```bash
DB_HOST=votre-host-mysql-ovh.mysql.db
DB_PORT=3306
DB_USER=votre_username_ovh
DB_PASSWORD=votre_password_ovh
DB_NAME=laterrasse_db
DB_SSL=false                # Mettre à 'true' si OVH nécessite SSL
```

**Où trouver ces infos sur OVH ?**
1. Connectez-vous à votre espace client OVH
2. Allez dans "Bases de données"
3. Sélectionnez votre base MySQL
4. Vous trouverez : host, port, user, nom de la base

### 🔐 JWT pour l'authentification

```bash
JWT_SECRET=votre_secret_jwt_super_securise_production
JWT_EXPIRES_IN=7d
```

**Générer un JWT_SECRET sécurisé :**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

### ⚙️ Configuration serveur

```bash
PORT=3001
NODE_ENV=production
FRONTEND_URL=https://votre-frontend.vercel.app
```

**Note :** Si vous testez localement, utilisez `http://localhost:3000`

### 📤 Uploads (optionnel)

```bash
MAX_FILE_SIZE=5242880       # 5MB en bytes
```

---

## 🔍 Comment configurer sur Render

1. Allez sur https://dashboard.render.com
2. Sélectionnez votre service backend
3. Cliquez sur **"Environment"** dans le menu
4. Ajoutez chaque variable avec **"Add Environment Variable"**
5. Cliquez sur **"Save Changes"**
6. Le service redémarrera automatiquement

---

## ⚠️ Important : Autoriser Render sur OVH

Pour que Render puisse se connecter à votre base OVH :

1. Connectez-vous à OVH
2. Allez dans votre base de données MySQL
3. Cherchez **"Autorisations d'accès"** ou **"IP autorisées"**
4. Ajoutez : `0.0.0.0/0` (autorise toutes les IPs)
   - OU demandez les IPs statiques de Render si disponibles

---

## ✅ Tester la connexion

Une fois les variables configurées, testez :

```bash
https://laterrasse.onrender.com/health
https://laterrasse.onrender.com/api/menu
```

Si vous voyez des erreurs, consultez les **Logs** sur Render.

