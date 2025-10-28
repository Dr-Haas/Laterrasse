"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { api } from "@/lib/api"

type GameScore = {
  id: string
  player_name: string
  score: number
  difficulty: string
  game_duration?: number
  created_at: string
}

const difficultyColors = {
  easy: "bg-green-500/20 text-green-300 border-green-500",
  medium: "bg-yellow-500/20 text-yellow-300 border-yellow-500",
  hard: "bg-red-500/20 text-red-300 border-red-500",
}

const difficultyEmojis = {
  easy: "😊",
  medium: "😎",
  hard: "🔥",
}

const medalEmojis = ["🥇", "🥈", "🥉"]

export function TopScores() {
  const [scores, setScores] = useState<GameScore[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchScores() {
      try {
        setLoading(true)
        const data = await api.gameScores.getTop()
        setScores(data.data || [])
      } catch (err) {
        console.error("Erreur chargement scores:", err)
        setError("Impossible de charger les scores")
      } finally {
        setLoading(false)
      }
    }

    fetchScores()
  }, [])

  if (loading) {
    return (
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-5xl">
          <div className="text-center">
            <div className="text-6xl mb-4 animate-pulse">🎮</div>
            <p className="text-xl text-purple-200">Chargement des scores...</p>
          </div>
        </div>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-5xl">
          <div className="text-center">
            <div className="text-6xl mb-4">❌</div>
            <p className="text-xl text-red-300">{error}</p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-5xl">
        {/* Titre de section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-bebas text-5xl md:text-6xl text-yellow-300 mb-4">
            🎮 Top Joueurs - Chef Invaders 🎮
          </h2>
          <p className="text-lg text-purple-200">
            Les meilleurs scores du mini-jeu !
          </p>
        </motion.div>

        {/* Tableau des scores */}
        <div className="bg-purple-950/50 backdrop-blur-sm rounded-3xl border-4 border-purple-700/50 overflow-hidden shadow-2xl">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-800 to-purple-900 p-6 border-b-4 border-purple-700">
            <div className="grid grid-cols-12 gap-4 text-yellow-300 font-bebas text-xl md:text-2xl">
              <div className="col-span-1 text-center">#</div>
              <div className="col-span-5 md:col-span-4">Joueur</div>
              <div className="col-span-3 md:col-span-3 text-center">Score</div>
              <div className="col-span-3 md:col-span-4 text-center">Difficulté</div>
            </div>
          </div>

          {/* Body */}
          <div className="divide-y divide-purple-700/30">
            {scores.map((score, index) => (
              <motion.div
                key={score.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className={`
                  p-6 hover:bg-purple-800/30 transition-all duration-300
                  ${index < 3 ? "bg-yellow-500/5" : ""}
                `}
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Rang */}
                  <div className="col-span-1 text-center" >
                    <span className="text-3xl md:text-4xl" style={{padding: "10px 0"}}>
                      {index < 3 ? medalEmojis[index] : `#${index + 1}`}
                    </span>
                  </div>

                  {/* Nom du joueur */}
                  <div className="col-span-5 md:col-span-4">
                    <p className={`
                      font-bold text-lg md:text-xl
                      ${index === 0 ? "text-yellow-300 text-2xl" : "text-white"}
                    `}>
                      {score.player_name}
                    </p>
                    {index === 0 && (
                      <p className="text-sm text-yellow-400 mt-1">
                        👑 Champion absolu !
                      </p>
                    )}
                  </div>

                  {/* Score */}
                  <div className="col-span-3 md:col-span-3 text-center">
                    <p className={`
                      font-bebas text-2xl md:text-3xl
                      ${index === 0 ? "text-yellow-400" : "text-purple-200"}
                    `}>
                      {score.score.toLocaleString()}
                    </p>
                    <p className="text-xs text-purple-300">points</p>
                  </div>

                  {/* Difficulté */}
                  <div className="col-span-3 md:col-span-4 flex justify-center">
                    <span className={`
                      px-3 py-1 md:px-4 md:py-2 rounded-full border-2 text-sm md:text-base font-bold
                      ${difficultyColors[score.difficulty as keyof typeof difficultyColors] || difficultyColors.easy}
                    `}>
                      {difficultyEmojis[score.difficulty as keyof typeof difficultyEmojis]}{" "}
                      {score.difficulty.toUpperCase()}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="/jeu"
            className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-bebas text-2xl rounded-full hover:scale-105 transition-transform shadow-lg hover:shadow-yellow-400/50"
          >
            🎮 Jouer maintenant et battre les records !
          </a>
        </motion.div>
      </div>
    </section>
  )
}

