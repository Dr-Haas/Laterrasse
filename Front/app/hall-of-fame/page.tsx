import { Metadata } from "next"
import { RESTAURANT_INFO } from "@/lib/constants"
import { HallOfFameHero } from "@/components/hall-of-fame/HallOfFameHero"
import { TopScores } from "@/components/hall-of-fame/TopScores"
import { LegendsGallery } from "@/components/hall-of-fame/LegendsGallery"

export const metadata: Metadata = {
  title: `Hall of Fame - ${RESTAURANT_INFO.name}`,
  description:
    "Découvrez les légendes de La Terrasse : les meilleurs joueurs, les plus fidèles clients et les histoires mémorables !",
  openGraph: {
    title: `Hall of Fame - ${RESTAURANT_INFO.name}`,
    description: "Les légendes de La Terrasse",
  },
}

export default function HallOfFamePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-900 via-purple-800 to-purple-900" style={{padding: "100px 0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <HallOfFameHero />
      <TopScores />
      <LegendsGallery />
    </div>
  )
}

