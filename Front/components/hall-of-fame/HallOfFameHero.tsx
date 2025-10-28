"use client"

import { motion } from "framer-motion"

export function HallOfFameHero() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Emoji animé */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring", 
              stiffness: 260, 
              damping: 20,
              delay: 0.2 
            }}
            className="text-9xl mb-8"
          >
            🏆
          </motion.div>

          {/* Titre principal */}
          <h1 className="font-bebas text-6xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-200 to-yellow-400 mb-6 leading-tight">
            Hall of Fame
          </h1>

          {/* Sous-titre */}
          <motion.p
            style={{padding: "10px 0"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl lg:text-3xl text-yellow-100 mb-4 max-w-3xl mx-auto"
          >
            Les Légendes de La Terrasse
          </motion.p>

          <motion.p
            style={{padding: "10px 0"}}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-lg md:text-xl text-purple-200 max-w-2xl mx-auto"
          >
            Meilleurs scores, clients légendaires et moments inoubliables ⭐
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-12 max-w-md mx-auto rounded-full"
          />
        </motion.div>
      </div>
    </section>
  )
}

