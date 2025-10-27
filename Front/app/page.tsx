import { HeroSection } from "@/components/home/HeroSection"
import { MehmetQuote } from "@/components/home/MehmetQuote"
import { SpiritCards } from "@/components/home/SpiritCards"
import { CallToAction } from "@/components/home/CallToAction"

export default function Home() {
  return (
    <>
      <HeroSection />
      <MehmetQuote />
      <SpiritCards />
      <CallToAction />
    </>
  )
}
