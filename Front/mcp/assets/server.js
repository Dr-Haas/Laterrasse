#!/usr/bin/env node
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from "@modelcontextprotocol/sdk/types.js";

const server = new Server(
  {
    name: "assets",
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
        name: "suggestAsset",
        description: "Suggère des assets visuels (images, icônes, illustrations) adaptés au contexte du projet.",
        inputSchema: {
          type: "object",
          properties: {
            context: {
              type: "string",
              description: "Contexte ou type d'asset recherché (ex: 'icône menu', 'illustration hero')",
            },
          },
          required: ["context"],
        },
      },
    ],
  };
});

// Handler pour exécuter les outils
server.setRequestHandler(CallToolRequestSchema, async (request) => {
  if (request.params.name === "suggestAsset") {
    const context = request.params.arguments.context;
    
    return {
      content: [
        {
          type: "text",
          text: `🎨 **Suggestion d'assets pour : ${context}**

📦 **Sources recommandées :**
- Icons8 (illustrations modernes)
- Undraw (illustrations personnalisables)
- Lucide Icons (icônes React)
- Heroicons (icônes Tailwind)

💡 **Conseil :** Utilise des assets SVG pour une meilleure performance et scalabilité.`,
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
  console.error("Assets MCP Server lancé sur stdio");
}

main().catch((error) => {
  console.error("Erreur fatale:", error);
  process.exit(1);
});
