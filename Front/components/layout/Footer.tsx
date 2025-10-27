"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { RESTAURANT_INFO } from "@/lib/constants"

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer style={{padding: "20px 50px", height: "250px", display: "flex", justifyContent: "center", alignItems: "center"}} className="relative bg-gradient-to-b from-terrasse-black via-terrasse-black to-[#B31E1E] text-terrasse-white overflow-hidden">
      {/* Effet glow sur le logo */}
      <div style={{ padding: "20px 10px", display: "flex", justifyContent: "center", alignItems: "center"}}className="absolute top-10 left-1/2 -translate-x-1/2 w-64 h-64 bg-terrasse-yellow/10 blur-3xl rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1800px] py-12 md:py-16 lg:py-20 relative z-10">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col items-center text-center space-y-8">
          {/* Logo avec glow */}
          <div className="relative">
            <h3 className="font-bebas text-4xl text-white drop-shadow-[0_0_10px_rgba(255,209,0,0.5)]">
              🍔 LA TERRASSE
            </h3>
          </div>

          {/* Séparateur */}
          <div className="w-full h-px bg-terrasse-red" style={{margin: "20px 0"}} />

          {/* Infos */}
          <div className="space-y-4" style={{margin: "20px 0"}}>
            <p className="flex items-center justify-center gap-2 text-base">
              <span>📍</span>
              <span>{RESTAURANT_INFO.address.street}</span>
            </p>
            <p className="flex items-center justify-center gap-2 text-base">
              <span>🕒</span>
              <span>Ouvert 11h - 00h</span>
            </p>
            <p className="flex items-center justify-center gap-2 text-base">
              <span>📞</span>
              <a
                href={`tel:${RESTAURANT_INFO.contact.phone}`}
                className="hover:text-terrasse-yellow transition-colors"
              >
                {RESTAURANT_INFO.contact.phone}
              </a>
            </p>
          </div>

          {/* Séparateur */}
          <div className="w-full h-px bg-terrasse-red" />

          {/* Réseaux sociaux */}
          <div className="flex items-center justify-center gap-6">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href={RESTAURANT_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
              title="Instagram"
            >
              📸
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              href={RESTAURANT_INFO.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
              title="TikTok"
            >
              🎵
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="text-3xl"
              title="X (Twitter)"
            >
              🐦
            </motion.a>
          </div>

          {/* Séparateur */}
          <div className="w-full h-px bg-terrasse-red" />

          {/* Copyright */}
          <p className="text-sm text-terrasse-white/80">
            © {new Date().getFullYear()} La Terrasse — Fait maison ❤️
          </p>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-terrasse-red/50">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <span className="text-4xl">🍔</span>
              <span className="font-bebas text-3xl text-white drop-shadow-[0_0_10px_rgba(255,209,0,0.3)]">
                LA TERRASSE
              </span>
            </div>

            {/* Adresse */}
            <p className="text-base flex items-center gap-2">
              <span>📍</span>
              <span>{RESTAURANT_INFO.address.street}, {RESTAURANT_INFO.address.city}</span>
            </p>
          </div>

          <div className="flex items-center justify-between mb-8 pb-6 border-b border-terrasse-red/50">
            {/* Contact */}
            <p className="text-base flex items-center gap-2">
              <span>📞</span>
              <a
                href={`tel:${RESTAURANT_INFO.contact.phone}`}
                className="hover:text-terrasse-yellow transition-colors"
              >
                {RESTAURANT_INFO.contact.phone}
              </a>
            </p>

            {/* Horaires */}
            <p className="text-base flex items-center gap-2">
              <span>🕒</span>
              <span>11h - 00h</span>
            </p>
          </div>

          {/* Réseaux sociaux */}
          <div className="flex items-center justify-center gap-8 mb-8">
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href={RESTAURANT_INFO.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-terrasse-yellow transition-colors"
            >
              <span className="text-3xl">📸</span>
              <span className="font-bebas text-lg">Instagram</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              href={RESTAURANT_INFO.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-terrasse-yellow transition-colors"
            >
              <span className="text-3xl">🎵</span>
              <span className="font-bebas text-lg">TikTok</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-white hover:text-terrasse-yellow transition-colors"
            >
              <span className="text-3xl">🐦</span>
              <span className="font-bebas text-lg">X</span>
            </motion.a>
          </div>

          {/* Bande finale jaune (reflet de frites) */}
          <div className="h-1 bg-gradient-to-r from-transparent via-terrasse-yellow to-transparent mb-6 shadow-[0_0_10px_rgba(255,209,0,0.5)]" />

          {/* Copyright */}
          <p className="text-center text-sm text-terrasse-white/80">
            © {new Date().getFullYear()} La Terrasse — Fait avec amour par la maison ❤️
          </p>
        </div>
      </div>

      {/* Bouton remonter - Rouge ketchup */}
      {showScrollTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-terrasse-red rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-50"
          aria-label="Remonter en haut"
        >
          <span className="text-white text-2xl">↑</span>
        </motion.button>
      )}
    </footer>
  )
}

