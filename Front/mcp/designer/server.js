#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "designer",
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
        name: "generateScreen",
        description: "Génère des propositions de design UX/UI pour un écran ou une page, avec des recommandations sur la structure, les couleurs, la typographie et les composants.",
        inputSchema: {
          type: "object",
          properties: {
            prompt: {
              type: "string",
              description: "Description de l'écran à concevoir (ex: 'page d'accueil restaurant', 'dashboard utilisateur')",
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
  if (request.params.name === "generateScreen") {
    const prompt = request.params.arguments.prompt;
    
    return {
      content: [
        {
          type: "text",
          text: `💡 **Proposition d'écran : ${prompt}**

───────────────────────────────
### 🧩 Structure UX suggérée
- **Header** : logo à gauche, navigation fluide (liens légers + CTA principal à droite)
- **Hero Section** : titre H1 fort (3 à 5 mots max), sous-titre impactant, visuel ou animation subtile.
- **Content Grid** : 2 à 3 colonnes responsive. Utiliser CSS Grid ou Tailwind \`grid-cols-12\` avec breakpoints adaptatifs.
- **Side Panel / Drawer** : stats, actions rapides, ou mini-dashboard (selon le contexte produit).
- **Call-to-Action** : bouton principal large, clair, textuel ("Commencer", "Découvrir", "Essayer gratuitement").
- **Footer** : fond sombre ou coloré, liens légers, ton institutionnel.

───────────────────────────────
### 🎨 Design System (extrait CSS / Tailwind)
**Couleurs :**
- \`--color-primary:\` #1D2C7B (Bleu profond)
- \`--color-secondary:\` #DDD7D0 (Beige doux)
- \`--color-background:\` #FBFAF3 (Crème)
- \`--color-neutral:\` #EDEDED (Blanc cassé)
- \`--color-accent:\` #8ED1B2 (Vert menthe léger)

**Typographie :**
- Font principale : 'Inter', sans-serif
- Font display : 'Parafina' (titres bold arrondis)
- Hiérarchie : H1 56px / H2 32px / H3 24px / body 16–18px
- Utiliser \`tracking-tight\` et \`leading-snug\` pour les headers.

**Composants Shadcn/UI :**
- \`<Card>\` pour les encadrés avec shadow-md et radius-2xl
- \`<Button variant="gradient">\` avec dégradé \`from-primary to-accent\`
- \`<Tabs>\` pour basculer entre sous-vues / dashboards
- \`<Badge>\` pour signaler les états ou catégories

───────────────────────────────
### 🧠 Méthodes & Effets de designer
- **Micro-interactions :**
  - transitions CSS \`ease-in-out\` 150–250ms
  - survols légers : ombres adoucies, scale 1.02 max
  - feedback tactile : \`active:translate-y-[1px]\`

- **Effets visuels :**
  - Verre dépoli : \`backdrop-blur-xl bg-white/40 border border-white/20\`
  - Glow subtil : \`drop-shadow-[0_0_10px_rgba(29,44,123,0.15)]\`
  - Dégradés dynamiques : \`bg-gradient-to-r from-primary to-accent\`

- **Animations Framer Motion :**
  - \`initial={{ opacity: 0, y: 20 }}\`
  - \`animate={{ opacity: 1, y: 0 }}\`
  - \`transition={{ duration: 0.4, ease: "easeOut" }}\`

───────────────────────────────
**💡 Conseil :** Pense "mobile first", ajoute des breakpoints progressifs (sm, md, lg, xl), teste toujours l'accessibilité (contraste, focus states, aria-labels).`,
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
  console.error("Designer MCP Server lancé sur stdio");
}

main().catch((error) => {
  console.error("Erreur fatale:", error);
  process.exit(1);
});
