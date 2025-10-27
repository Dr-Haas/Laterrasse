"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

export function CallToAction() {
  return (
    <section className="relative min-h-[75vh] md:min-h-[85vh] bg-gradient-to-r from-terrasse-black via-terrasse-red to-terrasse-black" style={{ padding: "60px 20px" }}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1800px] h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl w-full"
          >
            {/* Espacement vertical généreux avec flexbox */}
            <div className="flex flex-col items-center justify-center">
              {/* Titre centré avec flexbox */}
              <div className="flex flex-col items-center justify-center">
                <h2 className="font-bebas text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-white leading-none tracking-wide text-center px-6 md:px-8" style={{ padding: "20px 10px" }}>
                  Partage ton moment
                  <br />
                  <span className="text-terrasse-yellow">à La Terrasse</span>
                </h2>
              </div>
              
              {/* Description centrée avec flexbox */}
              <div className="flex justify-center">
                <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/95 leading-relaxed max-w-4xl text-center px-8 md:px-12" style={{ padding: "20px 10px" }}>
                  Tu as vécu un moment génial chez nous ?
                  <br className="hidden sm:block" />
                  Immortalise-le et partage-le avec notre communauté ! 📸✨
                </p>
              </div>
              
              {/* Boutons centrés avec flexbox */}
              <div className="flex justify-center pt-10 md:pt-14 lg:pt-16 w-full">
                <div className="flex flex-col sm:flex-row gap-10 md:gap-12 lg:gap-14 items-center">
                  <Link href="/galerie">
                    <Button 
                      size="lg" 
                      variant="secondary" 
                      className="min-w-[320px] md:min-w-[360px] text-2xl md:text-3xl lg:text-4xl py-7 md:py-9 px-12 md:px-14"
                    >
                      Voir la galerie 🖼️
                    </Button>
                  </Link>
                  <Link href="/galerie">
                    <Button 
                      size="lg" 
                      variant="outline" 
                      className="min-w-[320px] md:min-w-[360px] text-2xl md:text-3xl lg:text-4xl py-7 md:py-9 px-12 md:px-14 bg-white/10 hover:bg-white/20 border-2 border-white/30"
                    >
                      Partager mon moment ✨
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

