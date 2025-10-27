"use client"

import { motion } from "framer-motion"

export function GalerieHero() {
  return (
    <section style={{padding: "60px 20px", height: "70vh", display: "flex", justifyContent: "center", alignItems: "center"}} className="relative w-full bg-gradient-to-br from-terrasse-red via-terrasse-yellow to-terrasse-blue overflow-hidden py-16 md:py-24 lg:py-32">
      {/* Pattern décoratif */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-8 left-8 text-6xl md:text-8xl">📸</div>
        <div className="absolute top-16 right-12 text-5xl md:text-7xl">✍️</div>
        <div className="absolute bottom-12 left-16 text-7xl md:text-9xl">💭</div>
        <div className="absolute bottom-8 right-8 text-5xl md:text-7xl">❤️</div>
        <div className="absolute top-1/2 left-1/3 text-4xl md:text-6xl">🌟</div>
      </div>

      {/* Contenu */}
      <div style={{display: "flex", justifyContent: "center", alignItems: "center"}} className="relative z-10 container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-terrasse-black leading-none mb-6"
          >
            Livre d&apos;Or
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-terrasse-black text-xl md:text-2xl lg:text-3xl font-medium max-w-3xl mx-auto leading-relaxed"
          >
            Partagez votre expérience à La Terrasse !
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-terrasse-black/80 text-base md:text-lg lg:text-xl mt-4 max-w-2xl mx-auto"
          >
            Laissez un message, une photo, ou les deux pour immortaliser votre
            passage chez nous. Chaque souvenir compte ! 📷✨
          </motion.p>
        </motion.div>
      </div>

      {/* Vague décorative en bas */}
      {/* <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 lg:h-20"
          style={{ transform: "scaleY(-1)" }}
        >
          <path
            d="M0,0 Q300,40 600,20 T1200,0 L1200,120 L0,120 Z"
            fill="rgb(249, 249, 249)"
          />
        </svg>
      </div> */}
    </section>
  )
}

