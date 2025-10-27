import { Metadata } from "next"
import { RESTAURANT_INFO } from "@/lib/constants"
import { GalerieHero } from "@/components/galerie/GalerieHero"
import { PostSubmissionForm } from "@/components/galerie/PostSubmissionForm"
import { MasonryGallery } from "@/components/galerie/MasonryGallery"

export const metadata: Metadata = {
  title: `Livre d'Or - ${RESTAURANT_INFO.name}`,
  description:
    "Partagez vos souvenirs à La Terrasse ! Laissez un message, une photo, ou les deux dans notre livre d'or numérique.",
  openGraph: {
    title: `Livre d'Or - ${RESTAURANT_INFO.name}`,
    description: "Partagez vos souvenirs à La Terrasse !",
  },
}

export default function GaleriePage() {
  return (
    <div className="min-h-screen bg-terrasse-white">
      <GalerieHero />
      <PostSubmissionForm />
      <MasonryGallery />
    </div>
  )
}

