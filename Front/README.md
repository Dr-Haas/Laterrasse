# 🌟 La Terrasse

> **Plus qu'un kebab, un lieu de vie.**

Site web officiel du restaurant La Terrasse - Une expérience culinaire et conviviale unique.

![La Terrasse](https://img.shields.io/badge/Status-En_développement-yellow?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

---

## 📋 Table des Matières

- [À Propos](#à-propos)
- [Fonctionnalités](#fonctionnalités)
- [Stack Technique](#stack-technique)
- [Installation](#installation)
- [Scripts Disponibles](#scripts-disponibles)
- [Structure du Projet](#structure-du-projet)
- [Documentation](#documentation)
- [Roadmap](#roadmap)
- [Contact](#contact)

---

## 🎯 À Propos

La Terrasse est bien plus qu'un simple restaurant de kebab. C'est un lieu de vie où l'on mange bien, on rigole fort, et on revient toujours ! 

Ce projet est le site web officiel qui reflète l'esprit unique de La Terrasse avec :
- 🍔 Une carte interactive
- 📸 Une galerie communautaire
- 🎮 Un mini-jeu fun
- 🏆 Un Hall of Fame pour nos clients légendaires

---

## ✨ Fonctionnalités

### ✅ Déjà Implémentées
- [x] 🎨 Design System avec la palette de couleurs La Terrasse
- [x] 🏠 Page d'accueil avec Hero Section animée
- [x] 💬 Citation du jour de Mehmet
- [x] 🎯 Section "L'esprit de La Terrasse"
- [x] 🧭 Navigation responsive avec menu mobile
- [x] 📱 Footer avec informations pratiques
- [x] ✨ Animations fluides avec Framer Motion
- [x] 🌙 Support du mode sombre

### 🚧 En Développement
- [ ] 📜 Page de la carte interactive
- [ ] 📸 Galerie avec upload de photos
- [ ] 🎮 Mini-jeu "Mehmet Run"
- [ ] 🏆 Hall of Fame
- [ ] 🗺️ Intégration Google Maps
- [ ] 💾 Backend avec base de données
- [ ] 🔐 Système d'authentification

---

## 🛠️ Stack Technique

### Frontend
- **Framework** : [Next.js 16](https://nextjs.org/) (App Router)
- **Language** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **State Management** : Zustand (si nécessaire)
- **Forms** : React Hook Form + Zod

### Outils de Développement
- **Linting** : ESLint
- **Formatting** : Prettier
- **Type Checking** : TypeScript

### À Venir
- **Backend** : Supabase ou API Routes Next.js
- **Database** : PostgreSQL
- **Storage** : Cloudinary / Supabase Storage
- **Deployment** : Vercel

---

## 🚀 Installation

### Prérequis
- Node.js 18+ 
- npm ou yarn

### Étapes

1. **Cloner le repository**
```bash
git clone https://github.com/votre-repo/laterrasse.git
cd laterrasse
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configurer les variables d'environnement**
```bash
cp .env.example .env.local
```
Puis éditez `.env.local` avec vos propres clés.

4. **Lancer le serveur de développement**
```bash
npm run dev
```

5. **Ouvrir le navigateur**
Accédez à [http://localhost:3000](http://localhost:3000)

---

## 📜 Scripts Disponibles

```bash
# Développement
npm run dev              # Lance le serveur de développement

# Build & Production
npm run build            # Compile l'application pour la production
npm start                # Lance le serveur de production

# Code Quality
npm run lint             # Vérifie les erreurs de linting
npm run lint:fix         # Corrige automatiquement les erreurs
npm run format           # Formate le code avec Prettier
npm run format:check     # Vérifie le formatage
npm run type-check       # Vérifie les types TypeScript
```

---

## 📂 Structure du Projet

```
LaTerrasse/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout racine avec Header/Footer
│   ├── page.tsx             # Page d'accueil
│   ├── globals.css          # Styles globaux + Tailwind config
│   ├── carte/               # Page de la carte
│   ├── galerie/             # Page galerie
│   ├── jeu/                 # Page mini-jeu
│   └── hall-of-fame/        # Page Hall of Fame
│
├── components/               # Composants React
│   ├── ui/                  # Composants UI génériques
│   │   └── Button.tsx
│   ├── layout/              # Composants de layout
│   │   ├── Header.tsx
│   │   └── Footer.tsx
│   └── home/                # Composants page d'accueil
│       ├── HeroSection.tsx
│       ├── MehmetQuote.tsx
│       ├── SpiritCards.tsx
│       └── CallToAction.tsx
│
├── lib/                     # Utilitaires et configurations
│   ├── constants.ts         # Constantes du projet
│   ├── types.ts             # Types TypeScript partagés
│   └── utils/
│       └── cn.ts            # Utility pour classes Tailwind
│
├── public/                  # Assets statiques
│   ├── images/
│   ├── sounds/
│   └── fonts/
│
├── GUIDE.md                 # Guide complet du projet
├── TODO.md                  # Roadmap détaillée
├── DEV.md                   # Guide de développement
└── README.md                # Ce fichier
```

---

## 📚 Documentation

- **[GUIDE.md](./GUIDE.md)** - Guide complet avec l'identité, la charte graphique et les spécifications
- **[TODO.md](./TODO.md)** - Roadmap détaillée avec toutes les phases de développement
- **[DEV.md](./DEV.md)** - Bonnes pratiques de développement et conventions de code

---

## 🗺️ Roadmap

### Phase 1 : Setup & Foundation ✅
- [x] Configuration du projet
- [x] Design system
- [x] Page d'accueil
- [x] Header & Footer

### Phase 2 : Pages Principales 🚧
- [ ] Page La Carte
- [ ] Page Galerie avec backend
- [ ] Page Mini-jeu
- [ ] Page Hall of Fame

### Phase 3 : Backend & Fonctionnalités 🔜
- [ ] Base de données
- [ ] Authentification
- [ ] Upload d'images
- [ ] API endpoints

### Phase 4 : Optimisation & Tests 🔜
- [ ] Tests unitaires
- [ ] Tests E2E
- [ ] Performance optimization
- [ ] SEO

### Phase 5 : Déploiement 🔜
- [ ] Staging environment
- [ ] Production deployment
- [ ] Monitoring

Consultez [TODO.md](./TODO.md) pour la roadmap complète et détaillée.

---

## 🎨 Palette de Couleurs

```css
--terrasse-blue:   #00AEEF  /* Bleu vif */
--terrasse-red:    #E6322D  /* Rouge ketchup */
--terrasse-yellow: #FFD100  /* Jaune moutarde */
--terrasse-white:  #F9F9F9  /* Blanc cassé */
--terrasse-black:  #101010  /* Noir charbon */
```

---

## 🤝 Contribution

Ce projet est actuellement en développement actif. Les contributions seront bientôt ouvertes !

---

## 📞 Contact

**La Terrasse**  
📍 123 Rue de La Terrasse, 75000 Paris  
📞 +33 1 23 45 67 89  
✉️ contact@laterrasse.fr  

**Réseaux Sociaux**  
📷 [Instagram](https://instagram.com/laterrasse)  
🎵 [TikTok](https://tiktok.com/@laterrasse)

---

## 📄 License

© 2025 La Terrasse. Tous droits réservés.

---

<div align="center">
  <p>
    <strong>Site créé avec amour par La Terrasse ❤️</strong>
  </p>
  <p>
    🍔 On mange bien | 😂 On rigole fort | 🔁 On revient toujours
  </p>
</div>
