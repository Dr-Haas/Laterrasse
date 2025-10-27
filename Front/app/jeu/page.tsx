import { ChefInvaders } from "@/components/jeu/ChefInvaders"

export const metadata = {
  title: "Chef Invaders - La Terrasse",
  description: "Jouez à notre jeu Chef Invaders et testez vos réflexes culinaires !",
}

export default function JeuPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 py-12"  
      style={{padding: "100px 0", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}
    >
      <div className="container mx-auto px-4" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
        <div className="text-center" style={{margin: "10px 0"}}>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{margin: "10px 0"}}>
            🔪 Chef Invaders 🔪
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto" style={{margin: "10px 0"}}>
            Incarnez le chef MehMet et défendez votre cuisine contre l'invasion des ingrédients !
            Utilisez les flèches pour vous déplacer et la barre d'espace pour lancer vos couteaux.
          </p>
        </div>
        <ChefInvaders />
      </div>
    </div>
  )
}

