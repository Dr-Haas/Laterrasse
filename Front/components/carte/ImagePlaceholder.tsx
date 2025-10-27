"use client"

interface ImagePlaceholderProps {
  name: string
  className?: string
}

export function ImagePlaceholder({ name, className = "" }: ImagePlaceholderProps) {
  // Extrait l'emoji basé sur le type de plat
  const getEmoji = (name: string) => {
    const lower = name.toLowerCase()
    if (lower.includes("kebab") || lower.includes("galette") || lower.includes("pain")) return "🥙"
    if (lower.includes("burger")) return "🍔"
    if (lower.includes("chicken")) return "🍗"
    if (lower.includes("tacos")) return "🌮"
    if (lower.includes("assiette")) return "🍽️"
    if (lower.includes("salade")) return "🥗"
    if (lower.includes("box")) return "📦"
    if (lower.includes("frites")) return "🍟"
    if (lower.includes("nuggets")) return "🍗"
    if (lower.includes("tenders")) return "🍤"
    if (lower.includes("wings")) return "🔥"
    if (lower.includes("viande")) return "🥩"
    if (lower.includes("boisson") || lower.includes("canette")) return "🥤"
    if (lower.includes("bouteille")) return "🧃"
    if (lower.includes("energy")) return "⚡"
    if (lower.includes("café") || lower.includes("cafe")) return "☕"
    if (lower.includes("étudiant")) return "🎓"
    if (lower.includes("enfant")) return "👶"
    return "🍴"
  }

  return (
    <div className={`flex items-center justify-center bg-gradient-to-br from-terrasse-yellow/30 to-terrasse-red/30 ${className}`}>
      <div className="flex flex-col items-center gap-4">
        <span className="text-8xl md:text-9xl">{getEmoji(name)}</span>
        <span className="text-white/60 text-sm font-bebas tracking-wider">Photo à venir</span>
      </div>
    </div>
  )
}

