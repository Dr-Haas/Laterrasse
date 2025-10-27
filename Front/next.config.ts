import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Configuration pour les images du menu
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Ajouter 90 pour la qualité du header
    qualities: [75, 90],
    
    // Si tu veux utiliser des images d'Unsplash ou autre en attendant tes photos
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
      },
    ],
  },
};

export default nextConfig;
