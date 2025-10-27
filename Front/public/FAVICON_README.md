# 🎨 Favicon La Terrasse

## ✅ Favicons créées

J'ai créé **2 versions de favicon** pour toi :

### 1. **`favicon-custom.svg`** (Recommandé ✨)
- Design personnalisé avec un kebab stylisé
- Couleurs de La Terrasse : bleu (#00AEEF) et jaune (#FFD100)
- Lettre "T" en rouge (#E6322D)
- Format SVG vectoriel (s'adapte à toutes les tailles)

### 2. **`favicon-emoji.svg`** (Simple)
- Emoji kebab 🥙
- Rapide et universel

---

## 🎯 Pour une favicon professionnelle (options)

### Option A : Utiliser un générateur en ligne (RECOMMANDÉ)

1. **Va sur** : https://realfavicongenerator.net/
2. **Upload** ton logo ou une image de kebab (ou utilise `favicon-custom.svg`)
3. **Personnalise** les couleurs de fond
4. **Télécharge** le pack complet (favicon.ico, apple-touch-icon.png, etc.)
5. **Remplace** les fichiers dans `/public/`

### Option B : Créer une version professionnelle avec Figma/Canva

**Design suggestions :**
- **Fond** : Dégradé bleu → jaune (couleurs La Terrasse)
- **Icône centrale** : 
  - Kebab stylisé 🥙
  - ou Lettre "T" bold
  - ou Logo du restaurant
- **Taille** : 512x512px (sera redimensionné automatiquement)
- **Format** : PNG avec fond transparent, puis convertir en .ico

### Option C : Commander un designer

Sites recommandés :
- **Fiverr** : 5-20€ pour une favicon pro
- **99designs** : Contest pour plusieurs propositions
- **Upwork** : Freelance dédié

---

## 📐 Spécifications techniques

### Tailles nécessaires :
- **16x16** - Onglet navigateur
- **32x32** - Barre d'adresse
- **180x180** - Apple Touch Icon (iOS)
- **192x192** - Android Chrome
- **512x512** - Progressive Web App

### Formats :
- **`.svg`** : Vectoriel, s'adapte à tout (déjà créé ✅)
- **`.ico`** : Classique pour navigateurs anciens
- **`.png`** : Pour Apple et Android

---

## 🛠️ Convertir le SVG en ICO/PNG

### Outils en ligne gratuits :
1. **CloudConvert** : https://cloudconvert.com/svg-to-ico
2. **Convertio** : https://convertio.co/fr/svg-ico/
3. **ICO Convert** : https://icoconvert.com/

### Étapes :
1. Upload `favicon-custom.svg`
2. Convertir en `.ico` (16x16, 32x32, 48x48)
3. Télécharger et remplacer `/public/favicon.ico`

---

## 🎨 Personnaliser le SVG actuel

Tu peux modifier `/public/favicon-custom.svg` directement :

**Changer les couleurs :**
```svg
<!-- Bleu de La Terrasse -->
<stop offset="0%" style="stop-color:#00AEEF"/>

<!-- Jaune de La Terrasse -->
<stop offset="100%" style="stop-color:#FFD100"/>

<!-- Rouge pour le texte -->
<text fill="#E6322D">T</text>
```

**Changer la lettre :**
```svg
<!-- Remplace "T" par autre chose -->
<text>LT</text> <!-- Pour "La Terrasse" -->
```

---

## 📱 Pour iOS (Apple Touch Icon)

Crée une image **180x180px** :
- Fond coloré (pas transparent pour iOS)
- Icône centrée
- Enregistre en `apple-touch-icon.png`
- Place dans `/public/`

---

## 🔄 Activer les changements

1. **Redémarre** le serveur Next.js (déjà fait automatiquement)
2. **Vide le cache** du navigateur (Cmd+Shift+R sur Mac, Ctrl+Shift+R sur Windows)
3. **Recharge** la page

La nouvelle favicon apparaîtra dans l'onglet ! 🎉

---

## 💡 Idées de design pour La Terrasse

1. **Kebab minimaliste** avec contours simples
2. **Lettre "T"** stylisée dans un cercle
3. **Fourchette + Couteau** croisés
4. **Assiette** avec kebab vu du dessus
5. **Brochette** verticale stylisée

N'hésite pas à tester plusieurs versions et choisir celle qui te plaît le plus !

