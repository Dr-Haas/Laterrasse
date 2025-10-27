# 🚨 Correction du Problème CORS

## 🔍 Le Problème

Votre backend sur Render est configuré avec :
```
access-control-allow-origin: https://laterrasse.dikio.fr
```

Donc il **REFUSE** les requêtes venant de `http://localhost:3000` ! C'est pour ça que vous avez l'erreur "Failed to fetch".

## ✅ Solutions

### **Option 1 : Développer avec le backend LOCAL** (Recommandé)

1. **Démarrer le backend en local** :
```bash
# Terminal 1
cd Back
npm start
```

Vous devriez voir :
```
✅ Connecté à MySQL
🚀 Serveur démarré sur le port 3001
```

2. **Le frontend se connectera automatiquement** au backend local grâce à `.env.local` :
```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

3. **Tester** :
```bash
# Terminal 2
cd Front
npm run dev
```

Visitez http://localhost:3000/hall-of-fame

---

### **Option 2 : Autoriser localhost sur Render** (Pour tester avec le backend en ligne)

Sur **Render.com**, modifiez la variable d'environnement :

**Avant :**
```
FRONTEND_URL=https://laterrasse.dikio.fr
```

**Après :**
```
FRONTEND_URL=http://localhost:3000,https://laterrasse.dikio.fr
```

⚠️ **ATTENTION** : Cette config ne marchera pas car Express CORS n'accepte qu'une seule origin. Utilisez plutôt :

**Solution temporaire (développement) :**
```
FRONTEND_URL=*
```

**Solution permanente** : Modifiez le code backend pour accepter plusieurs origins.

---

### **Option 3 : Modifier le backend pour accepter plusieurs origins**

Modifiez `/Back/src/server.js` :

**Avant :**
```javascript
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

**Après :**
```javascript
const allowedOrigins = [
  'http://localhost:3000',
  'https://laterrasse.dikio.fr',
  process.env.FRONTEND_URL
].filter(Boolean);

app.use(cors({
  origin: (origin, callback) => {
    // Autoriser les requêtes sans origin (Postman, curl, etc.)
    if (!origin) return callback(null, true);
    
    // Vérifier si l'origin est autorisée
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Non autorisé par CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
```

Puis commit + push + Render redéploiera automatiquement.

---

## 🧪 Tester la connexion

### Test 1 : Backend local
```bash
curl http://localhost:3001/health
```

Devrait retourner :
```json
{"status":"OK","message":"La Terrasse API is running",...}
```

### Test 2 : Backend en ligne
```bash
curl https://laterrasse.onrender.com/health
```

Devrait retourner :
```json
{"status":"OK","message":"La Terrasse API is running",...}
```

### Test 3 : Depuis le navigateur

Ouvrez la console (F12) et tapez :
```javascript
fetch('http://localhost:3001/health').then(r => r.json()).then(console.log)
```

Ou pour Render :
```javascript
fetch('https://laterrasse.onrender.com/health').then(r => r.json()).then(console.log)
```

Si vous voyez une erreur CORS, c'est le problème !

---

## 📝 Récapitulatif

| Situation | Frontend | Backend | Fichier .env |
|-----------|----------|---------|--------------|
| Développement | localhost:3000 | localhost:3001 | `.env.local` |
| Production | laterrasse.dikio.fr | laterrasse.onrender.com | `.env.production` |

**Pour développer** : Utilisez TOUJOURS le backend local !

**Pour tester en production** : Buildez et uploadez via FTP, ne testez pas localhost avec l'API en ligne.

