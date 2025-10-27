# Configuration des Variables d'Environnement

## 📋 Fichiers requis

Pour que le frontend se connecte correctement à l'API, vous devez créer des fichiers `.env` :

### 1. Pour le développement local : `.env.local`

Créez le fichier `/Front/.env.local` avec :

```env
# Variables d'environnement - Développement Local
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### 2. Pour la production : `.env.production`

Créez le fichier `/Front/.env.production` avec :

```env
# Variables d'environnement - Production
NEXT_PUBLIC_API_URL=https://laterrasse.onrender.com
```

## 🚀 Utilisation

### Développement local
```bash
cd Front
# Le fichier .env.local sera automatiquement chargé
npm run dev
```

### Build pour production
```bash
cd Front
# Le fichier .env.production sera automatiquement utilisé
npm run build
```

## ⚠️ Important

- Les fichiers `.env*` sont dans `.gitignore` et ne seront pas versionnés
- Ces variables sont **intégrées au build** pour les exports statiques
- Si vous changez l'URL de l'API, vous devez **rebuild** le frontend
- Les variables doivent commencer par `NEXT_PUBLIC_` pour être accessibles côté client

## 🔧 Vérification

Pour vérifier que l'API URL est correcte, regardez dans la console du navigateur lors du chargement des pages.

