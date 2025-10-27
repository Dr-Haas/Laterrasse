#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "devmentor",
    version: "1.0.0",
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Handler pour lister les outils
server.setRequestHandler(ListToolsRequestSchema, async () => {
  return {
    tools: [
      {
        name: "codeBestPractices",
        description: "Fournit des conseils de développement senior, des audits de bonnes pratiques et des recommandations d'architecture pour améliorer la qualité du code.",
        inputSchema: {
          type: "object",
          properties: {
            prompt: {
              type: "string",
              description: "Contexte ou question sur les bonnes pratiques (ex: 'architecture React', 'optimisation performance')",
            },
          },
          required: ["prompt"],
        },
      },
    ],
  };
});

// Handler pour exécuter les outils
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "codeBestPractices") {
    const prompt = request.params.arguments.prompt;
    
    return {
      content: [
        {
          type: "text",
          text: `🧠 **Conseils Senior Full-Stack pour : ${prompt}**

───────────────────────────────
### ⚙️ 1. Structure & architecture de projet
- Respecter la séparation claire entre **domaines** : 
  - \`/components\` : UI générique et réutilisable
  - \`/features\` : modules métier (auth, patient, dashboard…)
  - \`/lib\` : helpers, utils, API clients
  - \`/types\` : typage global partagé
  - \`/hooks\` : logique réutilisable (React)
  - \`/services\` : logique externe (DB, APIs)
  - \`/pages\` ou \`/app\` (Next.js) : routes, layout, navigation

- Organiser le code **par fonctionnalité**, pas par technologie.

───────────────────────────────
### 🧩 2. Conception des composants
- Chaque composant doit être **mono-responsable** (un seul but).
- Utiliser **props typées** (TypeScript) + **defaultProps** clairs.
- Nommer selon le rôle : 
  - \`UserProfile\`, \`InvoiceTable\`, \`NavigationMenu\`
- Extraire la logique métier dans des **hooks personnalisés** :
  - \`usePatientData\`, \`useAuthCheck\`, \`useInvoiceForm\`

───────────────────────────────
### 🔐 3. Sécurité & gestion d'état
- **Authentification** : JWT côté serveur, cookies HttpOnly, refresh tokens
- **Validation** : Zod / Yup pour tous les formulaires + validation backend
- **State management** :
  - Local : \`useState\`, \`useReducer\`
  - Global : Zustand (léger) ou Context API
  - Server state : TanStack Query (React Query)
- **Never trust client data** → toujours valider côté serveur

───────────────────────────────
### ⚡ 4. Performance & optimisation
- **React** :
  - Utiliser \`React.memo\` pour les composants purs
  - \`useMemo\` / \`useCallback\` pour éviter recalculs inutiles
  - Lazy loading : \`React.lazy\` + \`Suspense\`
- **Next.js** :
  - ISR (Incremental Static Regeneration) pour contenu semi-statique
  - Server Components quand possible
  - Optimiser images avec \`next/image\`
- **Bundle** :
  - Code splitting intelligent
  - Tree-shaking activé
  - Analyser avec \`webpack-bundle-analyzer\`

───────────────────────────────
### 🧪 5. Tests & qualité du code
- **Tests unitaires** : Vitest / Jest (fonctions pures, hooks)
- **Tests d'intégration** : React Testing Library (comportements utilisateur)
- **Tests E2E** : Playwright (flux critiques)
- **Linting** : ESLint + Prettier
- **Type safety** : TypeScript strict mode
- **Coverage** : viser 80%+ sur logique métier

───────────────────────────────
### 📦 6. Gestion des dépendances
- Utiliser \`npm audit\` régulièrement
- Mettre à jour les dépendances progressivement
- Éviter les dépendances non maintenues
- Préférer les packages légers et bien documentés

───────────────────────────────
### 🚀 7. Déploiement & CI/CD
- **Environnements** : dev → staging → production
- **CI/CD** : GitHub Actions / GitLab CI
  - Linting automatique
  - Tests automatiques
  - Build & deploy automatique
- **Monitoring** : Sentry / LogRocket pour erreurs production
- **Analytics** : Vercel Analytics / Plausible

───────────────────────────────
**💡 Principe clé :** "Make it work, make it right, make it fast" — toujours dans cet ordre.`,
        },
      ],
    };
  }
  
  throw new Error(`Outil inconnu: ${request.params.name}`);
});

// Démarrer le serveur
async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("DevMentor MCP Server lancé sur stdio");
}

main().catch((error) => {
  console.error("Erreur fatale:", error);
  process.exit(1);
});
