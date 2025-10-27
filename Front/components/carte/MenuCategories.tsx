"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MenuItemCard } from "@/components/carte/MenuItemCard"
import { MENU_DATA } from "@/lib/menu-data"
import { RESTAURANT_INFO } from "@/lib/constants"

export function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState<string>("sandwiches")

  const categories = [
    { id: "sandwiches", label: "Sandwiches", icon: "🌯", color: "bg-terrasse-red" },
    { id: "burgers", label: "Burgers", icon: "🍔", color: "bg-terrasse-yellow" },
    { id: "assiettes", label: "Assiettes", icon: "🍽️", color: "bg-terrasse-red" },
    { id: "box", label: "Box", icon: "📦", color: "bg-terrasse-yellow" },
    { id: "accompagnements", label: "Accompagnements", icon: "🍟", color: "bg-terrasse-red" },
    { id: "boissons", label: "Boissons", icon: "🥤", color: "bg-terrasse-yellow" },
  ]

  return (
    <section style={{ padding: "60px 20px" }}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1800px]" style={{padding: "10px 10px"}}>
        {/* Navigation des catégories - Scrollable horizontal sur mobile */}
        <div className="mb-10 md:mb-14">
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-3 md:gap-4 min-w-min md:justify-center" style={{padding: "20px 10px"}}>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    ${category.color}
                    ${activeCategory === category.id ? "ring-4 ring-white scale-105" : "opacity-80"}
                    flex-shrink-0 px-6 py-4 md:px-8 md:py-5 rounded-2xl
                    transition-all duration-300 shadow-xl
                    hover:scale-105 hover:opacity-100
                  `}
                  style={{padding: "5px 10px"}}
                >
                  <div className="flex flex-col items-center gap-2 min-w-[100px]">
                    <span className="text-3xl md:text-4xl">{category.icon}</span>
                    <span className="font-bebas text-lg md:text-xl text-white whitespace-nowrap">
                      {category.label}
                    </span>
                  </div>
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Liste des items de la catégorie active */}
        <AnimatePresence mode="wait">
          <motion.div
            style={{padding: "20px 10px"}}
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="flex justify-center"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full max-w-[1600px]">
              {MENU_DATA[activeCategory]?.map((item, index) => (
                <MenuItemCard
                  key={`${item.name}-${index}`}
                  item={item}
                  index={index}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bouton Commander - Fixé en bas */}
        <motion.a
          style={{padding: "20px 10px"}}
          href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s/g, '')}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="fixed bottom-8 right-8 z-40 bg-terrasse-red text-white font-bebas text-2xl md:text-3xl px-10 py-5 rounded-2xl shadow-2xl transition-transform flex items-center gap-3 cursor-pointer"
        >
          📞 Commander
        </motion.a>

        {/* Infos pratiques en bas */}
        <motion.div
          style={{padding: "20px 10px 0"}}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 md:mt-20 bg-white/10 backdrop-blur-sm rounded-3xl p-8 md:p-12 border-2 border-white/20"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
            <div>
              <h3 className="font-bebas text-3xl md:text-4xl text-terrasse-yellow mb-4" style={{margin: "20px 0"}}>
                🥩 Nos Viandes
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Kebab", "Poulet", "Steak", "Kefta", "Cordon", "Falafel"].map((viande) => (
                  <span
                    style={{padding: "5px 15px"}}
                    key={viande}
                    className="bg-terrasse-red px-4 py-2 rounded-full font-bebas text-lg"
                  >
                    {viande}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bebas text-3xl md:text-4xl text-terrasse-yellow mb-4" style={{margin: "20px 0"}}>
                🧂 Nos Sauces
              </h3>
              <div className="flex flex-wrap gap-3">
                {["Mayo", "Ketchup", "Blanche", "Harissa", "Algérienne", "Andalouse", "Biggy", "Samouraï"].map((sauce) => (
                  <span
                    style={{padding: "5px 15px"}}
                    key={sauce}
                    className="bg-terrasse-yellow text-terrasse-black px-4 py-2 rounded-full font-bebas text-lg"
                  >
                    {sauce}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-white/20 text-center" style={{margin: "20px 0"}}>
            <p className="text-white text-xl md:text-2xl" style={{margin: "20px 0"}}>
              💡 <span className="font-bebas text-terrasse-yellow">Supplément fromage :</span> +1€
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

