"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GalleryCard } from "./GalleryCard"
import { api } from "@/lib/api"
import type { Post } from "@/lib/types"

// Type pour les posts de l'API (snake_case)
type APIPost = {
  id: string
  user_id: string
  message: string
  image_url?: string
  likes_count: number
  comments_count: number
  approved: boolean
  created_at: string
  updated_at: string
}

// Convertir les posts de l'API vers le format frontend (camelCase)
const convertAPIPost = (apiPost: APIPost): Post => ({
  id: apiPost.id,
  userId: apiPost.user_id,
  message: apiPost.message,
  imageUrl: apiPost.image_url,
  likesCount: apiPost.likes_count,
  commentsCount: apiPost.comments_count,
  createdAt: new Date(apiPost.created_at),
  updatedAt: new Date(apiPost.updated_at),
  user: {
    id: apiPost.user_id,
    email: "", // Pas fourni par l'API pour les posts
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})

type CardSize = "small" | "medium" | "large" | "xlarge"

// Pattern de tailles varié (25%, 37.5%, 50% de largeur)
const sizePattern: CardSize[] = [
  "medium",  // 37.5%
  "small",   // 25%
  "large",   // 50%
  "small",   // 25%
  "medium",  // 37.5%
  "xlarge",  // 50%
  "small",   // 25%
  "large",   // 50%
  "medium",  // 37.5%
  "small",   // 25%
  "xlarge",  // 50%
  "medium",  // 37.5%
  "small",   // 25%
  "large",   // 50%
  "medium",  // 37.5%
]

export function MasonryGallery() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Récupérer les posts depuis l'API
  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const data = await api.posts.getAll()
        // Filtrer uniquement les posts approuvés et convertir
        const apiPosts = data.posts?.filter((p: APIPost) => p.approved) || []
        const convertedPosts = apiPosts.map(convertAPIPost)
        setPosts(convertedPosts)
      } catch (err) {
        console.error("Erreur lors du chargement des posts:", err)
        setError("Impossible de charger les souvenirs")
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  // État de chargement
  if (loading) {
    return (
      <section style={{padding: "60px 20px", display: "flex", justifyContent: "center", alignItems: "center"}} className="py-16 md:py-20 bg-terrasse-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center py-20">
            <div className="text-8xl mb-6 animate-pulse">⏳</div>
            <h3 className="font-bebas text-4xl md:text-5xl text-terrasse-black mb-4">
              Chargement des souvenirs...
            </h3>
          </div>
        </div>
      </section>
    )
  }

  // État d'erreur
  if (error) {
    return (
      <section style={{padding: "60px 20px", display: "flex", justifyContent: "center", alignItems: "center"}} className="py-16 md:py-20 bg-terrasse-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center py-20">
            <div className="text-8xl mb-6">❌</div>
            <h3 className="font-bebas text-4xl md:text-5xl text-terrasse-black mb-4">
              {error}
            </h3>
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-terrasse-blue text-white rounded-full font-bold hover:bg-terrasse-blue/90"
            >
              Réessayer
            </button>
          </div>
        </div>
      </section>
    )
  }

  // Si pas de posts
  if (posts.length === 0) {
    return (
      <section style={{padding: "60px 20px", display: "flex", justifyContent: "center", alignItems: "center"}} className="py-16 md:py-20 bg-terrasse-white">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl" >
          <div className="text-center py-20">
            <div className="text-8xl mb-6">📭</div>
            <h3 className="font-bebas text-4xl md:text-5xl text-terrasse-black mb-4">
              Pas encore de souvenirs
            </h3>
            <p className="text-lg text-gray-600">
              Soyez le premier à partager votre expérience !
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-terrasse-white" style={{padding: "60px 20px", display: "flex", justifyContent: "center", alignItems: "center"}}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl" >
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column"}}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bebas text-5xl md:text-6xl lg:text-7xl text-terrasse-red mb-4 text-center">
              Mur des souvenirs 📸
            </h2>
            <p className="text-center text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Découvrez les moments partagés par notre incroyable communauté !
            </p>
          </motion.div>

           {/* Masonry Grid */}
           <div className="w-full">
             <div 
               style={{padding: "20px 10px"}} 
               className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-4 md:gap-6 items-start"
             >
              {posts.map((post, index) => {
                const size = sizePattern[index % sizePattern.length]
                return <GalleryCard key={post.id} post={post} size={size} />
              })}
             </div>
           </div>

          {/* Bouton charger plus (pour plus tard) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <button
            style={{padding: "10px 20px"}}
              className="px-8 py-4 bg-terrasse-blue text-white font-bold text-lg rounded-full hover:bg-terrasse-blue/90 hover:scale-105 transition-all shadow-lg"
              onClick={() => alert("Fonctionnalité à venir ! 🚀")}
            >
              Charger plus de souvenirs 📚
            </button>
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}

