"use client"

import { motion } from "framer-motion"
import { Post } from "@/lib/types"
import Image from "next/image"

interface GalleryCardProps {
  post: Post
  size: "small" | "medium" | "large" | "xlarge"
}

// Classes pour largeurs différentes (max 50% de la ligne)
// Grille de 8 colonnes pour plus de variations
const sizeClasses = {
  small: "col-span-2",      // 2/8 = 25%
  medium: "col-span-3",     // 3/8 = 37.5%
  large: "col-span-4",      // 4/8 = 50%
  xlarge: "col-span-4",     // 4/8 = 50% max
}

const colorVariants = [
  "from-terrasse-red/10 to-terrasse-red/20 border-terrasse-red",
  "from-terrasse-blue/10 to-terrasse-blue/20 border-terrasse-blue",
  "from-terrasse-yellow/10 to-terrasse-yellow/20 border-terrasse-yellow",
  "from-purple-100 to-purple-200 border-purple-400",
  "from-green-100 to-green-200 border-green-400",
  "from-pink-100 to-pink-200 border-pink-400",
]

export function GalleryCard({ post, size }: GalleryCardProps) {
  const randomColor =
    colorVariants[Math.floor(Math.random() * colorVariants.length)]
  const randomRotation = (Math.random() - 0.5) * 3 // Rotation entre -1.5° et +1.5°

  const hasImage = !!post.imageUrl
  const hasMessage = !!post.message

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        rotate: 0,
        zIndex: 50,
        transition: { duration: 0.2 },
      }}
      className={`${sizeClasses[size]} relative group cursor-pointer`}
      style={{ rotate: `${randomRotation}deg` }}
    >
      <div
        className={`w-full rounded-xl border-4 shadow-lg overflow-hidden bg-gradient-to-br ${randomColor} hover:shadow-2xl transition-shadow duration-300`}
      >
        {/* Image si présente */}
        {hasImage && (
          <div className={`relative w-full overflow-hidden ${
            size === "small" ? "h-40" : ""
          } ${size === "medium" ? "h-56" : ""} ${
            size === "large" ? "h-72" : ""
          } ${size === "xlarge" ? "h-80" : ""}`}>
            <Image
              src={post.imageUrl || ""}
              alt="Photo partagée"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        )}

        {/* Contenu */}
        <div className="p-4 md:p-5 flex flex-col min-h-[120px]">
          {/* Message */}
          {hasMessage && (
            <p
              className={`text-terrasse-black font-medium leading-relaxed mb-3 ${
                size === "small" ? "text-sm" : ""
              } ${size === "medium" ? "text-base" : ""} ${
                size === "large" ? "text-base" : ""
              } ${size === "xlarge" ? "text-lg" : ""}`}
            >
              {post.message}
            </p>
          )}

          {/* Spacer */}
          <div className="flex-grow" />

          {/* Footer avec stats */}
          <div className="mt-4 pt-3 border-t-2 border-terrasse-black/20 flex items-center justify-between text-sm text-terrasse-black/70">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <span className="text-base">❤️</span>
                <span className="font-semibold">{post.likesCount}</span>
              </span>
              <span className="flex items-center gap-1">
                <span className="text-base">💬</span>
                <span className="font-semibold">{post.commentsCount}</span>
              </span>
            </div>
            <time className="text-xs">
              {post.createdAt.toLocaleDateString("fr-FR", {
                day: "numeric",
                month: "short",
              })}
            </time>
          </div>
        </div>
      </div>

      {/* Badge "Nouveau" pour les posts récents */}
      {isRecent(post.createdAt) && (
        <div className="absolute -top-2 -right-2 bg-terrasse-red text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12 z-10">
          NOUVEAU 🔥
        </div>
      )}
    </motion.div>
  )
}

// Helper pour déterminer si un post est récent (moins de 3 jours)
function isRecent(date: Date): boolean {
  const threeDaysAgo = new Date()
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3)
  return date > threeDaysAgo
}

