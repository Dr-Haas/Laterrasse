"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/Button"
import { RESTAURANT_INFO } from "@/lib/constants"

export function HeroSection() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/la_terrasse_header.png"
          alt="La Terrasse - Restaurant"
          fill
          className="object-cover"
          priority
          quality={90}
        />
      </div>

      {/* Overlay dégradé pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-br from-terrasse-black/60 via-terrasse-red/40 to-terrasse-black/60 z-10" />
      
      {/* Pattern décoratif - Mobile friendly */}
      <div className="absolute inset-0 opacity-15 z-10">
        <div className="absolute top-12 left-4 text-5xl md:text-8xl">🍔</div>
        <div className="absolute top-32 right-4 text-4xl md:text-7xl">🌯</div>
        <div className="absolute bottom-32 left-4 text-6xl md:text-9xl">🍟</div>
        <div className="absolute bottom-16 right-8 text-4xl md:text-6xl">🥤</div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 text-3xl md:text-5xl">💯</div>
      </div>

      {/* Contenu */}
      <div className="relative z-20 min-h-[100svh] flex flex-col items-center justify-center py-24 md:py-32">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1800px]">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center justify-center"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-terrasse-white text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide text-center"
              style={{ padding: "20px 10px" }}
            >
              Bienvenue à
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8, type: "spring" }}
              className="font-bebas text-7xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[12rem] text-white leading-none drop-shadow-2xl text-center"
              style={{ padding: "20px 10px" }}
            >
              {RESTAURANT_INFO.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="font-bebas text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-terrasse-yellow leading-tight drop-shadow-lg text-center px-8 md:px-12"
              style={{ padding: "20px 10px" }}
            >
              {RESTAURANT_INFO.slogan}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-8 md:pt-12 flex justify-center w-full"
            >
              <Link href="/carte">
                <Button size="lg" className="shadow-2xl hover:scale-105 min-w-[280px] md:min-w-[320px] text-xl md:text-2xl py-6 md:py-8">
                  Découvrir la carte 🍽️
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="text-white text-3xl md:text-4xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

