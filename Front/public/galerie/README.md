# 📸 Images de la Galerie - La Terrasse

## 🎯 À propos

Ce dossier contiendra les photos téléchargées par les utilisateurs via le livre d'or.

## 🔧 Configuration actuelle (Mock Data)

Pour le moment, la galerie utilise des **images de démonstration** depuis Unsplash.

Les données de test se trouvent dans : `/lib/mock-data.ts`

## 🚀 Prochaines étapes (Sprint 2 - Backend)

Quand vous implémenterez le backend, vous devrez :

### 1. Choisir une solution de stockage

**Option A : Vercel Blob** (Recommandé pour Next.js)
- ✅ Intégration native avec Next.js
- ✅ CDN mondial automatique
- ✅ Simple à configurer
- 💰 10GB gratuit puis payant

**Option B : Cloudinary**
- ✅ Transformations d'images automatiques
- ✅ Optimisation automatique
- ✅ CDN inclus
- 💰 25GB gratuit puis payant

**Option C : AWS S3**
- ✅ Le plus économique à grande échelle
- ⚠️ Configuration plus complexe
- 💰 5GB gratuit la première année

### 2. Implémenter l'upload

```typescript
// Exemple avec Vercel Blob
import { put } from '@vercel/blob';

export async function POST(request: Request) {
  const form = await request.formData();
  const file = form.get('image') as File;
  
  const blob = await put(file.name, file, {
    access: 'public',
  });
  
  // Sauvegarder blob.url dans la base de données
  return Response.json({ imageUrl: blob.url });
}
```

### 3. Sécurité

- ✅ Vérifier le type MIME (images seulement)
- ✅ Limiter la taille (5MB max)
- ✅ Scanner les malwares (optionnel)
- ✅ Rate limiting (éviter le spam)
- ✅ Modération (approuver avant publication)

### 4. Optimisation

- Redimensionner automatiquement les images
- Convertir en WebP pour de meilleures performances
- Générer des thumbnails
- Lazy loading

## 📐 Formats acceptés

- JPG / JPEG
- PNG
- WEBP
- Taille maximale : 5MB

## 🎨 Recommandations

Les photos de la galerie devraient être :
- Lumineuses et accueillantes
- Montrant des moments conviviaux
- De bonne qualité (pas floues)
- Respectueuses (pas de contenu inapproprié)

---

**Status actuel** : 🚧 Mock data avec images Unsplash  
**Prochaine étape** : Implémenter l'upload réel avec Vercel Blob

