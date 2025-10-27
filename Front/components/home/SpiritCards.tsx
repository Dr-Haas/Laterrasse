"use client"

import { motion } from "framer-motion"

const SPIRIT_ITEMS = [
  {
    icon: "🍔",
    title: "On mange bien",
    description:
      "Des produits frais, des recettes authentiques et un savoir-faire qui fait la différence. Chaque bouchée est une explosion de saveurs !",
    color: "from-terrasse-red to-red-600",
  },
  {
    icon: "😂",
    title: "On rigole fort",
    description:
      "Ici, l'ambiance est aussi importante que la nourriture. Sourires, rires et bonne humeur sont toujours au rendez-vous !",
    color: "from-terrasse-yellow to-yellow-500",
  },
  {
    icon: "🔁",
    title: "On revient toujours",
    description:
      "Une fois qu'on a goûté, impossible de résister. Nos clients deviennent des amis, et nos amis deviennent de la famille !",
    color: "from-terrasse-blue to-blue-600",
  },
]

export function SpiritCards() {
  return (
    <section className="bg-terrasse-white" style={{ padding: "60px 20px" }}>
      <div className="container mx-auto px-6 md:px-8 lg:px-12 xl:px-16 max-w-[1800px]">
        {/* En-tête centré avec flexbox */}
        <div className="flex flex-col items-center justify-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center justify-center"
          >
            <h2 className="font-bebas text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-terrasse-black leading-tight text-center" style={{ padding: "20px 10px" }}>
              L'esprit de La Terrasse
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl xl:text-3xl text-terrasse-black/70 max-w-4xl leading-relaxed text-center px-6 md:px-8" style={{ padding: "20px 10px" }}>
              Trois valeurs qui font notre identité et notre succès
            </p>
          </motion.div>
        </div>

        {/* Grille centrée avec flexbox */}
        <div className="flex justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12 xl:gap-16 w-full">
            {SPIRIT_ITEMS.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ scale: 1.03, rotate: 1 }}
                className="flex"
              >
                <div
                  className={`bg-gradient-to-br ${item.color} rounded-3xl p-8 md:p-10 lg:p-12 xl:p-14 w-full shadow-xl hover:shadow-2xl transition-all duration-300 min-h-[450px] md:min-h-[500px] lg:min-h-[550px] flex flex-col`}
                >
                  <div className="flex flex-col items-center justify-center space-y-6 md:space-y-8 lg:space-y-10 flex-1 text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="text-7xl md:text-8xl lg:text-9xl leading-none"
                    >
                      {item.icon}
                    </motion.div>
                    
                    <h3 className="font-bebas text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-none tracking-wide">
                      {item.title}
                    </h3>
                    
                    <p className="text-white/95 text-base md:text-lg lg:text-xl leading-relaxed max-w-lg px-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

