"use client"

import { motion } from "framer-motion"

export function MenuHero() {
  return (
    <section className="relative bg-gradient-to-br from-terrasse-blue via-terrasse-blue to-terrasse-yellow overflow-hidden" style={{ padding: "60px 20px" }}>
      {/* Effet de fond avec emojis */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 text-6xl">🍔</div>
        <div className="absolute top-12 right-4 text-5xl">🌯</div>
        <div className="absolute bottom-4 left-8 text-5xl">🍟</div>
        <div className="absolute bottom-8 right-12 text-4xl">🥤</div>
      </div>

      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1800px] relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-bebas text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white leading-none drop-shadow-2xl" style={{ padding: "20px 10px" }}>
              LA CARTE
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-xl md:text-2xl lg:text-3xl text-white/95 max-w-3xl leading-relaxed"
            style={{ padding: "20px 10px" }}
          >
            Des saveurs authentiques, des produits frais,
            <br />
            et des prix qui donnent le sourire ! 😋
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="bg-terrasse-yellow text-terrasse-black font-bebas text-2xl md:text-3xl px-8 py-3 rounded-2xl shadow-2xl"
            style={{ padding: "20px 10px", margin: "20px 10px" }}
          >
            🔥 Tous nos plats sont faits minute !
          </motion.div>
        </div>
      </div>
    </section>
  )
}

