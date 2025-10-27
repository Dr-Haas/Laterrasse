"use client"

import { motion } from "framer-motion"
import { GalleryCard } from "./GalleryCard"
import { MOCK_POSTS } from "@/lib/mock-data"

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
  // Si pas de posts
  if (MOCK_POSTS.length === 0) {
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
               {MOCK_POSTS.map((post, index) => {
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

