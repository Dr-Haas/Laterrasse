"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { api } from "@/lib/api"

type Legend = {
  id: string
  name: string
  anecdote: string
  category: string
  votes_count: number
  image_url?: string
  created_at: string
}

export function LegendsGallery() {
  const [legends, setLegends] = useState<Legend[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [votedIds, setVotedIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    async function fetchLegends() {
      try {
        setLoading(true)
        const data = await api.legends.getAll()
        setLegends(data.data || [])
      } catch (err) {
        console.error("Erreur chargement légendes:", err)
        setError("Impossible de charger les légendes")
      } finally {
        setLoading(false)
      }
    }

    fetchLegends()

    // Récupérer les IDs déjà votés depuis localStorage
    const voted = localStorage.getItem("votedLegends")
    if (voted) {
      setVotedIds(new Set(JSON.parse(voted)))
    }
  }, [])

  const handleVote = async (legendId: string) => {
    if (votedIds.has(legendId)) {
      alert("Vous avez déjà voté pour cette légende ! 🗳️")
      return
    }

    try {
      await api.legends.vote(legendId)
      
      // Mettre à jour le nombre de votes localement
      setLegends(legends.map(legend => 
        legend.id === legendId 
          ? { ...legend, votes_count: legend.votes_count + 1 }
          : legend
      ))

      // Marquer comme voté
      const newVoted = new Set(votedIds).add(legendId)
      setVotedIds(newVoted)
      localStorage.setItem("votedLegends", JSON.stringify([...newVoted]))

      alert("Vote enregistré ! Merci ! 🎉")
    } catch (err) {
      console.error("Erreur vote:", err)
      alert("Erreur lors du vote")
    }
  }

  if (loading) {
    return (
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-pulse">⭐</div>
            <p className="text-xl text-purple-200">Chargement des légendes...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error || legends.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-20 pb-32">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-6xl">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-bebas text-5xl md:text-6xl text-yellow-300 mb-4">
            ⭐ Clients Légendaires ⭐
          </h2>
          <p className="text-lg text-purple-200">
            Votez pour vos légendes préférées !
          </p>
        </motion.div>

        {/* Grille de légendes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {legends.map((legend, index) => (
            <motion.div
              key={legend.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/80 to-purple-950/80 backdrop-blur-sm rounded-2xl border-2 border-purple-700/50 overflow-hidden hover:border-yellow-400/50 transition-all duration-300 hover:scale-105 shadow-xl"
            >
              {/* Image si disponible */}
              {legend.image_url && (
                <div className="h-48 overflow-hidden bg-purple-950">
                  <img
                    src={legend.image_url}
                    alt={legend.name}
                    className="w-full h-full object-cover opacity-80"
                  />
                </div>
              )}

              {/* Contenu */}
              <div className="p-6">
                {/* Nom */}
                <h3 className="font-bebas text-3xl text-yellow-300 mb-2">
                  {legend.name}
                </h3>

                {/* Catégorie */}
                <p className="text-lg text-purple-200 font-bold mb-3 capitalize">
                  {legend.category === 'fidele' ? 'Fidèle' : legend.category}
                </p>

                {/* Anecdote */}
                <p className="text-purple-300 mb-4 text-sm leading-relaxed">
                  {legend.anecdote}
                </p>

                {/* Votes et bouton */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">🔥</span>
                    <span className="text-xl font-bold text-yellow-400">
                      {legend.votes_count}
                    </span>
                    <span className="text-sm text-purple-300">votes</span>
                  </div>

                  <button
                    onClick={() => handleVote(legend.id)}
                    disabled={votedIds.has(legend.id)}
                    className={`
                      px-4 py-2 rounded-full font-bold transition-all
                      ${votedIds.has(legend.id)
                        ? "bg-gray-600 text-gray-400 cursor-not-allowed"
                        : "bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 hover:scale-105 hover:shadow-lg"
                      }
                    `}
                  >
                    {votedIds.has(legend.id) ? "✓ Voté" : "👍 Voter"}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

