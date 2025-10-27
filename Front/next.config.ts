import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Export statique pour FTP
  output: 'export',
  
  // Nom du dossier de build
  distDir: 'laterrasseFront',
  
  // Désactiver l'optimisation d'images pour l'export statique
  images: {
    unoptimized: true,
  },
  
  // Optionnel : définir le basePath si votre site n'est pas à la racine du domaine
  // basePath: '/laterrasse',
  
  // Garder un trailing slash pour la compatibilité serveur
  trailingSlash: true,
};

export default nextConfig;
