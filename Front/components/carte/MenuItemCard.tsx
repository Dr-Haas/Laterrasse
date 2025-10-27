"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import type { MenuItem } from "@/lib/menu-data"
import { ImagePlaceholder } from "./ImagePlaceholder"

interface MenuItemCardProps {
  item: MenuItem
  index: number
}

export function MenuItemCard({ item, index }: MenuItemCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      whileHover={{ scale: 1.03, rotate: 0.5 }}
      className="bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-[0_0_30px_rgba(230,50,45,0.5)] transition-all duration-300 border-4 border-terrasse-black"
    >
      {/* Image */}
      {item.image && (
        <div className="relative h-48 md:h-56 overflow-hidden bg-terrasse-black">
          {imageError ? (
            <ImagePlaceholder name={item.name} className="absolute inset-0" />
          ) : (
            <>
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                onError={() => setImageError(true)}
              />
              {/* Overlay subtle pour le texte */}
              <div className="absolute inset-0 bg-gradient-to-t from-terrasse-black/60 via-transparent to-transparent" />
            </>
          )}
          
          {item.badge && (
            <div className="absolute top-3 right-3 bg-terrasse-red text-white font-bebas text-lg px-4 py-2 rounded-full shadow-lg z-10 backdrop-blur-sm">
              {item.badge}
            </div>
          )}
        </div>
      )}

      {/* Contenu */}
      <div className="p-6 md:p-8" style={{padding: "20px 10px"}}>
        {/* Nom */}
        <h3 className="font-bebas text-3xl md:text-4xl text-terrasse-black leading-tight mb-3">
          {item.name}
        </h3>

        {/* Description */}
        {item.description && (
          <p className="text-terrasse-black/70 text-base md:text-lg mb-5 leading-relaxed">
            {item.description}
          </p>
        )}

        {/* Prix */}
        <div className="space-y-2" >
          {item.prices.map((priceOption, idx) => (
            <div
              key={idx}
              className={`
                flex items-center justify-between p-3 md:p-4 rounded-xl
                ${idx % 2 === 0 ? "bg-terrasse-yellow/20" : "bg-terrasse-blue/20"}
                border-2 border-terrasse-black/10
              `}
              style={{padding: "5px 5px", margin: "5px 5px"}}
            >
              <span className="font-bebas text-lg md:text-xl text-terrasse-black">
                {priceOption.label}
              </span>
              <span className="font-bebas text-2xl md:text-3xl text-terrasse-red">
                {priceOption.price}€
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

