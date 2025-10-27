"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { MenuItemCard } from "@/components/carte/MenuItemCard"
import { api } from "@/lib/api"
import { RESTAURANT_INFO } from "@/lib/constants"

type APIMenuItem = {
  id: string
  name: string
  description?: string
  image_url?: string
  badge?: string
  prices: Record<string, number>  // Format API: { "seul": 6, "menu": 8 }
  available: boolean
  popular: boolean
}

type MenuItem = {
  name: string
  description?: string
  image?: string
  badge?: string
  prices: { label: string; price: number }[]  // Format pour MenuItemCard
}

// Convertir les prices de l'API vers le format attendu par MenuItemCard
const convertAPIMenuItem = (apiItem: APIMenuItem): MenuItem => {
  const prices = Object.entries(apiItem.prices).map(([label, price]) => ({
    label: label.charAt(0).toUpperCase() + label.slice(1),  // Capitalize
    price,
  }))

  return {
    name: apiItem.name,
    description: apiItem.description,
    image: apiItem.image_url,
    badge: apiItem.badge,
    prices,
  }
}

type MenuCategory = {
  id: string
  slug: string
  name: string
  icon?: string
  items: APIMenuItem[]
}

export function MenuCategories() {
  const [activeCategory, setActiveCategory] = useState<string>("sandwiches")
  const [menuData, setMenuData] = useState<MenuCategory[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Récupérer le menu depuis l'API
  useEffect(() => {
    async function fetchMenu() {
      try {
        setLoading(true)
        const data = await api.menu.getAll()
        setMenuData(data.categories || [])
        // Définir la première catégorie comme active si elle existe
        if (data.categories && data.categories.length > 0) {
          setActiveCategory(data.categories[0].slug)
        }
      } catch (err) {
        console.error("Erreur lors du chargement du menu:", err)
        setError("Impossible de charger le menu")
      } finally {
        setLoading(false)
      }
    }

    fetchMenu()
  }, [])

  // Mapper les icônes par défaut
  const categoryIcons: Record<string, string> = {
    sandwiches: "🌯",
    burgers: "🍔",
    assiettes: "🍽️",
    box: "📦",
    accompagnements: "🍟",
    boissons: "🥤",
    salades: "🥗",
    desserts: "🍰",
  }

  // État de chargement
  if (loading) {
    return (
      <section style={{ padding: "60px 20px" }}>
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center py-20">
            <div className="text-8xl mb-6 animate-pulse">⏳</div>
            <h3 className="font-bebas text-4xl md:text-5xl text-white mb-4">
              Chargement du menu...
            </h3>
          </div>
        </div>
      </section>
    )
  }

  // État d'erreur
  if (error) {
    return (
      <section style={{ padding: "60px 20px" }}>
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-7xl">
          <div className="text-center py-20">
            <div className="text-8xl mb-6">❌</div>
            <h3 className="font-bebas text-4xl md:text-5xl text-white mb-4">
              {error}
            </h3>
            <button 
              onClick={() => window.location.reload()}
              className="mt-6 px-6 py-3 bg-terrasse-red text-white rounded-full font-bold hover:bg-terrasse-red/90"
            >
              Réessayer
            </button>
          </div>
        </div>
      </section>
    )
  }

  // Obtenir la catégorie active
  const activeCategoryData = menuData.find((cat) => cat.slug === activeCategory)
  const items = activeCategoryData?.items || []

  return (
    <section style={{ padding: "60px 20px" }}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1800px]" style={{padding: "10px 10px"}}>
        {/* Navigation des catégories - Scrollable horizontal sur mobile */}
        <div className="mb-10 md:mb-14">
          <div className="overflow-x-auto pb-4 -mx-4 px-4">
            <div className="flex gap-3 md:gap-4 min-w-min md:justify-center" style={{padding: "20px 10px"}}>
              {menuData.map((category, index) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.slug)}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    ${index % 2 === 0 ? "bg-terrasse-red" : "bg-terrasse-yellow"}
                    ${activeCategory === category.slug ? "ring-4 ring-white scale-105" : "opacity-80"}
                    flex-shrink-0 px-6 py-4 md:px-8 md:py-5 rounded-2xl
                    transition-all duration-300 shadow-xl
                    hover:scale-105 hover:opacity-100
                  `}
                  style={{padding: "5px 10px"}}
                >
                  <div className="flex flex-col items-center gap-2 min-w-[100px]">
                    <span className="text-3xl md:text-4xl">
                      {category.icon || categoryIcons[category.slug] || "🍴"}
                    </span>
                    <span className="font-bebas text-lg md:text-xl text-white whitespace-nowrap">
                      {category.name}
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
              {items.length === 0 ? (
                <div className="col-span-full text-center py-12">
                  <p className="text-2xl text-white opacity-70">
                    Aucun plat dans cette catégorie pour le moment
                  </p>
                </div>
              ) : (
                items.map((item, index) => (
                  <MenuItemCard
                    key={item.id}
                    item={convertAPIMenuItem(item)}
                    index={index}
                  />
                ))
              )}
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

