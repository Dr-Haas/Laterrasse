import { MenuCategories } from "@/components/carte/MenuCategories"
import { MenuHero } from "@/components/carte/MenuHero"

export const metadata = {
  title: "La Carte - La Terrasse",
  description: "Découvrez notre carte : kebabs, burgers, tacos, salades et bien plus !",
}

export default function CartePage() {
  return (
    <div className="min-h-screen bg-terrasse-blue">
      <MenuHero />
      <MenuCategories />
    </div>
  )
}

