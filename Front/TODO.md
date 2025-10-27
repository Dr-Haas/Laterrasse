# ✅ TODO - Roadmap du Projet La Terrasse

## 📋 Légende des Statuts
- ⏳ À faire
- 🚧 En cours
- ✅ Terminé
- 🔄 À réviser
- ❌ Bloqué / Report

---

## 🎯 Phase 1 : Préparation & Configuration

### Setup Initial
- [ ] ⏳ Analyser la structure Next.js existante dans `/laterrasse-temp`
- [ ] ⏳ Décider si utiliser le dossier existant ou créer un nouveau projet
- [ ] ⏳ Installer les dépendances nécessaires
- [ ] ⏳ Configurer TypeScript
- [ ] ⏳ Configurer ESLint et Prettier
- [ ] ⏳ Configurer Tailwind CSS (déjà présent)
- [ ] ⏳ Mettre en place la structure de dossiers

### Assets & Design System
- [ ] ⏳ Créer le logo "La Terrasse"
- [ ] ⏳ Trouver/créer les polices (Bebas Neue / Impact / Mont Heavy)
- [ ] ⏳ Définir les tokens de design (couleurs, espacements, ombres)
- [ ] ⏳ Créer un fichier de configuration Tailwind personnalisé
- [ ] ⏳ Collecter/créer les icônes (frites, kebab, canette, sauce)
- [ ] ⏳ Préparer les images pour le Hero
- [ ] ⏳ Récupérer le visuel du menu (carte)

### Documentation
- [x] ✅ Créer `GUIDE.md`
- [x] ✅ Créer `TODO.md`
- [x] ✅ Créer `DEV.md`

---

## 🎨 Phase 2 : Design System & Composants de Base

### Composants Globaux
- [ ] ⏳ Header avec navigation
  - [ ] Logo
  - [ ] Menu desktop
  - [ ] Menu mobile (hamburger)
  - [ ] Animations de transition
- [ ] ⏳ Footer
  - [ ] Infos pratiques
  - [ ] Carte Google Maps intégrée
  - [ ] Liens réseaux sociaux
  - [ ] Crédit
- [ ] ⏳ Layout principal
- [ ] ⏳ Composant Bouton (CTA) avec variantes
- [ ] ⏳ Composant Card
- [ ] ⏳ Composant Modal
- [ ] ⏳ Loading states et skeletons

### Système de Thème
- [ ] ⏳ Provider de thème (light/dark)
- [ ] ⏳ Mode nuit avec néons rouges et bleus
- [ ] ⏳ Toggle pour basculer entre les modes
- [ ] ⏳ Persistance de la préférence (localStorage)

---

## 🏠 Phase 3 : Page d'Accueil

### Structure
- [ ] ⏳ Hero Section
  - [ ] Image/Vidéo de fond
  - [ ] Overlay avec slogan
  - [ ] CTA "Découvrir la carte"
  - [ ] Animations d'entrée
- [ ] ⏳ Bloc "Le mot de Mehmet"
  - [ ] Design encadré style pancarte
  - [ ] Système de citations rotatives (changer chaque jour)
  - [ ] Animation d'apparition
- [ ] ⏳ Section "L'esprit de La Terrasse"
  - [ ] Carte "On mange bien" 🍔
  - [ ] Carte "On rigole fort" 😂
  - [ ] Carte "On revient toujours" 🔁
  - [ ] Animations au survol
  - [ ] Grid responsive
- [ ] ⏳ CTA bas de page vers galerie
  - [ ] "Partage ton moment à La Terrasse"
  - [ ] Animation d'appel à l'action

### Optimisations
- [ ] ⏳ Images optimisées (Next Image)
- [ ] ⏳ Lazy loading
- [ ] ⏳ SEO (meta tags, Open Graph)

---

## 📜 Phase 4 : Page La Carte

### Développement
- [ ] ⏳ Intégrer le visuel du menu
- [ ] ⏳ Créer une grille fluide responsive
- [ ] ⏳ Implémenter les couleurs de la charte (fond bleu, encadrés rouges/jaunes)
- [ ] ⏳ Animations au survol
  - [ ] Effet "grésillement" sur produits chauds
  - [ ] Vibrations légères sur les prix
- [ ] ⏳ Section "Commandes à emporter"
  - [ ] Modal ou section avec QR code
  - [ ] Message "à venir en caisse"
- [ ] ⏳ Version mobile optimisée

### Alternative : Menu Interactif
- [ ] ⏳ (Optionnel) Créer un menu dynamique avec données structurées
- [ ] ⏳ (Optionnel) Filtres par catégorie
- [ ] ⏳ (Optionnel) Recherche

---

## 📸 Phase 5 : Galerie / Livre d'Or

### Interface
- [ ] ⏳ Masonry grid layout (style Pinterest)
- [ ] ⏳ Affichage mixte photos + citations
- [ ] ⏳ Certains éléments en XXL (effet collage)
- [ ] ⏳ Animations au scroll
- [ ] ⏳ Effet "pop & fade" pour nouveaux posts
- [ ] ⏳ Zoom au survol

### Fonctionnalités d'Interaction
- [ ] ⏳ Bouton "+ Partager ton moment"
- [ ] ⏳ Modal de partage
  - [ ] Champ email
  - [ ] Upload de photo
  - [ ] Zone de texte pour message
  - [ ] Validation et soumission
- [ ] ⏳ Système de likes ❤️
  - [ ] Animation du like
  - [ ] Compteur
- [ ] ⏳ Système de commentaires
  - [ ] Affichage
  - [ ] Ajout de commentaire
  - [ ] Modération (optionnelle)

### Backend / Base de Données
- [ ] ⏳ Choisir solution backend (Supabase, Firebase, ou API custom)
- [ ] ⏳ Configurer base de données
  - [ ] Table users
  - [ ] Table posts (photos + messages)
  - [ ] Table likes
  - [ ] Table comments
- [ ] ⏳ API endpoints
  - [ ] GET /posts (liste avec pagination)
  - [ ] POST /posts (créer un post)
  - [ ] POST /posts/:id/like
  - [ ] POST /posts/:id/comments
  - [ ] DELETE /posts/:id (admin)
- [ ] ⏳ Upload et stockage d'images
  - [ ] Service de stockage (Cloudinary, Supabase Storage, S3)
  - [ ] Optimisation des images
  - [ ] Validation (taille, format)

### Authentification
- [ ] ⏳ Système d'authentification simple (email)
- [ ] ⏳ Création de compte automatique
- [ ] ⏳ Session management

---

## 🎮 Phase 6 : Mini-Jeu "Mehmet Run"

### Design
- [ ] ⏳ Interface borne d'arcade 🍟
- [ ] ⏳ Écran de jeu stylisé
- [ ] ⏳ Bouton "Jouer" proéminent
- [ ] ⏳ Écran de game over
- [ ] ⏳ Tableau des scores

### Développement du Jeu
- [ ] ⏳ Choisir la librairie (Phaser, PixiJS, ou Canvas natif)
- [ ] ⏳ Implémenter la mécanique Endless Runner / Flappy Bird
- [ ] ⏳ Créer les assets graphiques
  - [ ] Personnage (Mehmet ?)
  - [ ] Obstacles
  - [ ] Collectibles (kebabs, frites, etc.)
  - [ ] Arrière-plan défilant
- [ ] ⏳ Système de scoring
- [ ] ⏳ Gestion des collisions
- [ ] ⏳ Sons et effets audio
- [ ] ⏳ Contrôles (clavier, tactile)

### Classement
- [ ] ⏳ Backend pour sauvegarder les scores
- [ ] ⏳ Table "scores" en base de données
- [ ] ⏳ API pour récupérer le top 5 hebdomadaire
- [ ] ⏳ "Top 5 des clients les plus affamés"
- [ ] ⏳ Reset automatique hebdomadaire
- [ ] ⏳ Formulaire pour sauvegarder son score (pseudo)

---

## 🏆 Phase 7 : Hall of Fame

### Interface
- [ ] ⏳ Grille de cartes stylisées
- [ ] ⏳ Effet "carte de collection"
- [ ] ⏳ Animation flip au survol
- [ ] ⏳ Brillances et effets de rareté

### Contenu
- [ ] ⏳ Affichage des légendes
  - [ ] Photo ou avatar
  - [ ] Pseudo
  - [ ] Anecdote ou record
  - [ ] Badge/Titre
- [ ] ⏳ Filtres ou catégories
  - [ ] "Plus grand mangeur"
  - [ ] "Plus fidèle"
  - [ ] "Plus drôle"
  - [ ] etc.

### Fonctionnalité
- [ ] ⏳ Bouton "Proposer une légende"
- [ ] ⏳ Formulaire de soumission
  - [ ] Nom/Pseudo
  - [ ] Photo (optionnelle)
  - [ ] Anecdote
  - [ ] Catégorie
- [ ] ⏳ Système de validation (admin)
- [ ] ⏳ (Optionnel) Vote communautaire

### Backend
- [ ] ⏳ Table "legends" en base de données
- [ ] ⏳ API endpoints
  - [ ] GET /legends
  - [ ] POST /legends (soumettre)
  - [ ] PUT /legends/:id/approve (admin)

---

## 🎨 Phase 8 : Effets & Animations

### Animations Générales
- [ ] ⏳ Transitions de page fluides
- [ ] ⏳ Animations au scroll (AOS, Framer Motion)
- [ ] ⏳ Micro-interactions sur les boutons
- [ ] ⏳ Loading states attractifs

### Effets Spéciaux
- [ ] ⏳ Arrière-plans avec motifs kebab (subtils)
- [ ] ⏳ Particles effects (optionnel)
- [ ] ⏳ Parallax léger sur certaines sections
- [ ] ⏳ Hover effects sur les images

### Audio
- [ ] ⏳ Intégrer les sons
  - [ ] Grésillement de grill
  - [ ] Bip de commande
  - [ ] Notification de like
- [ ] ⏳ Toggle pour activer/désactiver les sons
- [ ] ⏳ Volume contrôlable
- [ ] ⏳ Respect des préférences système (reduced motion)

---

## 🔧 Phase 9 : Backend & Intégrations

### Base de Données
- [ ] ⏳ Finaliser le schéma de base de données
- [ ] ⏳ Migrations
- [ ] ⏳ Seeds pour données de test

### API
- [ ] ⏳ Documentation API (Swagger/OpenAPI)
- [ ] ⏳ Gestion des erreurs
- [ ] ⏳ Validation des données (Zod, Yup)
- [ ] ⏳ Rate limiting
- [ ] ⏳ CORS configuration

### Authentification & Sécurité
- [ ] ⏳ Protection des routes admin
- [ ] ⏳ JWT ou session-based auth
- [ ] ⏳ Hashing des mots de passe (si applicable)
- [ ] ⏳ Protection CSRF
- [ ] ⏳ Sanitisation des inputs

### Services Externes
- [ ] ⏳ Google Maps API (pour le footer)
- [ ] ⏳ Service d'upload d'images
- [ ] ⏳ Service d'email (notifications, confirmations)
- [ ] ⏳ Analytics (Google Analytics, Plausible, etc.)

---

## 📱 Phase 10 : Responsive & Accessibilité

### Responsive Design
- [ ] ⏳ Tester sur mobile (< 768px)
- [ ] ⏳ Tester sur tablette (768px - 1024px)
- [ ] ⏳ Tester sur desktop (> 1024px)
- [ ] ⏳ Tester sur large desktop (> 1440px)
- [ ] ⏳ Ajustements de layout
- [ ] ⏳ Navigation mobile optimisée
- [ ] ⏳ Images responsive
- [ ] ⏳ Typographie responsive

### Accessibilité (A11Y)
- [ ] ⏳ Contraste des couleurs (WCAG AA minimum)
- [ ] ⏳ Navigation au clavier
- [ ] ⏳ ARIA labels
- [ ] ⏳ Alt text sur toutes les images
- [ ] ⏳ Focus visible
- [ ] ⏳ Respect de prefers-reduced-motion
- [ ] ⏳ Tester avec un lecteur d'écran
- [ ] ⏳ Formulaires accessibles (labels, erreurs)

---

## 🚀 Phase 11 : Performance & SEO

### Performance
- [ ] ⏳ Optimisation des images (WebP, AVIF)
- [ ] ⏳ Lazy loading
- [ ] ⏳ Code splitting
- [ ] ⏳ Minification CSS/JS
- [ ] ⏳ Compression (gzip/brotli)
- [ ] ⏳ Cache strategy
- [ ] ⏳ Audit Lighthouse (score > 90)
- [ ] ⏳ Core Web Vitals optimisés

### SEO
- [ ] ⏳ Meta tags sur toutes les pages
- [ ] ⏳ Open Graph pour partage social
- [ ] ⏳ Twitter Cards
- [ ] ⏳ Sitemap.xml
- [ ] ⏳ Robots.txt
- [ ] ⏳ Schema.org markup (Restaurant, LocalBusiness)
- [ ] ⏳ Canonical URLs
- [ ] ⏳ 404 page personnalisée

---

## 🧪 Phase 12 : Tests & QA

### Tests Unitaires
- [ ] ⏳ Tests des composants (Jest + React Testing Library)
- [ ] ⏳ Tests des fonctions utilitaires
- [ ] ⏳ Tests des hooks personnalisés

### Tests d'Intégration
- [ ] ⏳ Tests des flows utilisateur (Cypress, Playwright)
- [ ] ⏳ Tests des formulaires
- [ ] ⏳ Tests des API endpoints

### QA Manuelle
- [ ] ⏳ Tester tous les parcours utilisateur
- [ ] ⏳ Vérifier sur différents navigateurs
  - [ ] Chrome
  - [ ] Firefox
  - [ ] Safari
  - [ ] Edge
- [ ] ⏳ Vérifier sur différents devices
- [ ] ⏳ Tester les cas limites
- [ ] ⏳ Vérifier les messages d'erreur

---

## 🎯 Phase 13 : Contenu & Peuplement

### Contenu Texte
- [ ] ⏳ Rédiger les textes de la page d'accueil
- [ ] ⏳ Créer les citations de Mehmet (minimum 30 pour un mois)
- [ ] ⏳ Rédiger les descriptions des 3 cartes "L'esprit"
- [ ] ⏳ Rédiger les textes légaux (mentions légales, CGU, politique de confidentialité)

### Contenu Média
- [ ] ⏳ Photos professionnelles du restaurant
- [ ] ⏳ Photos des plats
- [ ] ⏳ Vidéo pour le Hero (optionnel)
- [ ] ⏳ Photos/anecdotes pour le Hall of Fame
- [ ] ⏳ Photos initiales pour la galerie

### Configuration
- [ ] ⏳ Horaires d'ouverture
- [ ] ⏳ Adresse exacte
- [ ] ⏳ Numéro de téléphone
- [ ] ⏳ Email de contact
- [ ] ⏳ Liens réseaux sociaux

---

## 🛠️ Phase 14 : Admin & Modération

### Panneau Admin
- [ ] ⏳ Interface d'administration
- [ ] ⏳ Authentification admin
- [ ] ⏳ Dashboard avec statistiques
- [ ] ⏳ Gestion des posts de la galerie
  - [ ] Validation/Suppression
  - [ ] Modération des commentaires
- [ ] ⏳ Gestion du Hall of Fame
  - [ ] Validation des soumissions
  - [ ] Édition des légendes
- [ ] ⏳ Gestion des citations de Mehmet
  - [ ] Ajout/Modification/Suppression
- [ ] ⏳ Statistiques du mini-jeu

---

## 🌐 Phase 15 : Déploiement

### Préparation
- [ ] ⏳ Choisir l'hébergement (Vercel, Netlify, AWS, etc.)
- [ ] ⏳ Configuration des variables d'environnement
- [ ] ⏳ Configuration du domaine
- [ ] ⏳ SSL/HTTPS
- [ ] ⏳ Build de production

### Déploiement
- [ ] ⏳ Déploiement initial en staging
- [ ] ⏳ Tests sur staging
- [ ] ⏳ Déploiement en production
- [ ] ⏳ Configuration du CI/CD
- [ ] ⏳ Monitoring et alertes

### Post-Déploiement
- [ ] ⏳ Vérifier tous les liens
- [ ] ⏳ Tester les formulaires
- [ ] ⏳ Vérifier les analytics
- [ ] ⏳ Soumettre à Google Search Console
- [ ] ⏳ Partager sur les réseaux sociaux

---

## 📊 Phase 16 : Suivi & Améliorations

### Monitoring
- [ ] ⏳ Configurer Sentry ou équivalent (error tracking)
- [ ] ⏳ Configurer les analytics
- [ ] ⏳ Monitoring des performances
- [ ] ⏳ Uptime monitoring

### Feedback & Itération
- [ ] ⏳ Recueillir les retours utilisateurs
- [ ] ⏳ Analyser les métriques d'utilisation
- [ ] ⏳ Identifier les points d'amélioration
- [ ] ⏳ Planifier les itérations v2

### Maintenance
- [ ] ⏳ Mises à jour des dépendances
- [ ] ⏳ Backups réguliers de la base de données
- [ ] ⏳ Sauvegardes des médias
- [ ] ⏳ Documentation de maintenance

---

## 🎁 Phase 17 : Features Futures (Backlog)

### Fonctionnalités à Envisager
- [ ] ⏳ Système de commande en ligne
- [ ] ⏳ Programme de fidélité digital avec points
- [ ] ⏳ Application mobile (PWA ou native)
- [ ] ⏳ Système de réservation
- [ ] ⏳ Newsletter
- [ ] ⏳ Blog avec recettes et actualités
- [ ] ⏳ Événements et partenariats
- [ ] ⏳ Multi-langues (EN, AR, etc.)
- [ ] ⏳ Chatbot de support
- [ ] ⏳ Livraison via partenaires (Uber Eats, etc.)

---

## 📅 Timeline Estimée

| Phase | Durée Estimée | Priorité |
|-------|---------------|----------|
| Phase 1 : Préparation | 2-3 jours | 🔴 Critique |
| Phase 2 : Design System | 3-5 jours | 🔴 Critique |
| Phase 3 : Accueil | 2-3 jours | 🔴 Critique |
| Phase 4 : La Carte | 2-3 jours | 🔴 Critique |
| Phase 5 : Galerie | 5-7 jours | 🟠 Haute |
| Phase 6 : Mini-Jeu | 5-7 jours | 🟡 Moyenne |
| Phase 7 : Hall of Fame | 3-4 jours | 🟡 Moyenne |
| Phase 8 : Effets | 2-3 jours | 🟡 Moyenne |
| Phase 9 : Backend | 4-6 jours | 🟠 Haute |
| Phase 10 : Responsive & A11y | 3-4 jours | 🔴 Critique |
| Phase 11 : Performance & SEO | 2-3 jours | 🟠 Haute |
| Phase 12 : Tests | 3-5 jours | 🟠 Haute |
| Phase 13 : Contenu | 2-3 jours | 🔴 Critique |
| Phase 14 : Admin | 3-4 jours | 🟡 Moyenne |
| Phase 15 : Déploiement | 1-2 jours | 🔴 Critique |
| Phase 16 : Suivi | Continu | 🟢 Basse |

**Durée totale estimée : 6-10 semaines** (en fonction de la taille de l'équipe et de la complexité des features)

---

## 📝 Notes

- Cette roadmap est flexible et peut être ajustée selon les priorités
- Certaines phases peuvent être réalisées en parallèle
- Les features du backlog (Phase 17) sont optionnelles et à envisager post-lancement
- Prévoir des sprints de 1-2 semaines avec des objectifs clairs

---

**Dernière mise à jour** : Octobre 2025

