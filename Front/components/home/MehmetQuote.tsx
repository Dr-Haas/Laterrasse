"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { MEHMET_QUOTES } from "@/lib/constants"

export function MehmetQuote() {
  const [quote, setQuote] = useState("")

  useEffect(() => {
    // Sélectionner une citation basée sur le jour
    const dayOfYear = Math.floor(
      (Date.now() - new Date(new Date().getFullYear(), 0, 0).getTime()) / 86400000
    )
    const quoteIndex = dayOfYear % MEHMET_QUOTES.length
    setQuote(MEHMET_QUOTES[quoteIndex])
  }, [])

  return (
    <section className="bg-gradient-to-r from-terrasse-red via-terrasse-yellow to-terrasse-blue" style={{ padding: "60px 20px" }}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1800px]">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl w-full"
          >
            <div className="bg-terrasse-white rounded-3xl shadow-2xl p-12 md:p-16 lg:p-20 xl:p-24 border-4 border-terrasse-black transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <div className="transform rotate-1 flex flex-col items-center justify-center">
                <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-terrasse-black text-center leading-tight" style={{ padding: "20px 10px" }}>
                  Le mot de Mehmet du jour
                </h2>
                
                <div className="relative py-10 md:py-14 lg:py-16 w-full flex items-center justify-center">
                  <span className="absolute -top-4 md:-top-6 -left-2 md:-left-4 text-6xl md:text-7xl lg:text-8xl text-terrasse-red opacity-50">
                    "
                  </span>
                  <p className="font-bebas text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-terrasse-black text-center px-10 md:px-14 lg:px-16 leading-relaxed max-w-4xl">
                    {quote}
                  </p>
                  <span className="absolute -bottom-8 md:-bottom-10 -right-2 md:-right-4 text-6xl md:text-7xl lg:text-8xl text-terrasse-red opacity-50">
                    "
                  </span>
                </div>
                
                <div className="flex justify-center pt-6">
                  <p className="font-bebas text-2xl md:text-3xl lg:text-4xl text-terrasse-red">— Mehmet</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

