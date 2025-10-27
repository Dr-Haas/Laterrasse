# 🚀 Démarrage pour le Développement

## ⚠️ Problème actuel : "Failed to fetch"

Votre frontend ne peut pas se connecter à l'API car :
- Soit Render est encore en train de redéployer (2-5 minutes)
- Soit vous n'avez pas de backend qui tourne localement

## ✅ Solution : Lancer le backend EN LOCAL

### **Étape 1 : Démarrer le backend**

Ouvrez un **NOUVEAU terminal** et lancez :

```bash
cd /Users/garyhaas/Desktop/LaTerrasse/Back
npm start
```

Vous devriez voir :
```
✅ Connecté à MySQL
🚀 Serveur démarré sur le port 3001
```

⚠️ **IMPORTANT** : Laissez ce terminal ouvert ! Ne le fermez pas.

### **Étape 2 : Votre frontend est déjà lancé**

Votre frontend tourne déjà sur http://localhost:3000

Il va **automatiquement** se connecter au backend local grâce à `.env.local` :
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### **Étape 3 : Tester**

1. **Rafraîchissez votre navigateur** (F5)
2. Allez sur http://localhost:3000/galerie
3. Allez sur http://localhost:3000/hall-of-fame
4. Les données devraient charger ! 🎉

## 🧪 Test rapide

Dans la console du navigateur (F12), tapez :

```javascript
fetch('http://localhost:3001/health')
  .then(r => r.json())
  .then(console.log)
```

Devrait afficher :
```json
{
  "status": "OK",
  "message": "La Terrasse API is running",
  ...
}
```

## 🐛 Si ça ne marche toujours pas

### Erreur : "Port 3001 déjà utilisé"

Un processus utilise déjà le port 3001. Trouvez-le et tuez-le :

```bash
# Mac/Linux
lsof -ti:3001 | xargs kill -9

# Ou trouvez le processus
lsof -i:3001
```

### Erreur : "Cannot connect to MySQL"

Vérifiez votre fichier `/Back/.env` :

```env
DB_HOST=votre_host_ovh
DB_PORT=3306
DB_USER=votre_user
DB_PASSWORD=votre_password
DB_NAME=laterrasse_db
DB_SSL=true
```

### Erreur CORS persiste

Attendez que Render finisse de redéployer (vérifiez sur https://dashboard.render.com/)

## 📊 Récapitulatif

| Terminal | Commande | Port | Status |
|----------|----------|------|--------|
| Terminal 1 | `cd Back && npm start` | 3001 | Backend API |
| Terminal 2 | `cd Front && npm run dev` | 3000 | Frontend |

**Les deux doivent tourner en même temps !**

## ⚡ Raccourcis

Pour le futur, gardez ces deux terminaux ouverts pendant que vous développez.

Pour arrêter proprement :
- Dans chaque terminal : `Ctrl + C`

