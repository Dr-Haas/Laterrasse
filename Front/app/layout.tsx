import type { Metadata } from "next"
import { Bebas_Neue, Inter } from "next/font/google"
import "./globals.css"
import { RESTAURANT_INFO } from "@/lib/constants"
import { Header } from "@/components/layout/Header"
import { Footer } from "@/components/layout/Footer"

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: `${RESTAURANT_INFO.name} - ${RESTAURANT_INFO.slogan}`,
  description:
    "Plus qu'un kebab, un lieu de vie. Découvrez La Terrasse, votre restaurant convivial où l'on mange bien, on rigole fort, et on revient toujours !",
  keywords: [
    "kebab",
    "restaurant",
    "La Terrasse",
    "street food",
    "convivial",
    "Paris",
  ],
  authors: [{ name: "La Terrasse" }],
  icons: {
    icon: "/favicon-emoji.svg",
    shortcut: "/favicon-emoji.svg",
    apple: "/favicon-emoji.svg",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://laterrasse.fr",
    title: `${RESTAURANT_INFO.name} - ${RESTAURANT_INFO.slogan}`,
    description: "Plus qu'un kebab, un lieu de vie.",
    siteName: RESTAURANT_INFO.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${RESTAURANT_INFO.name} - ${RESTAURANT_INFO.slogan}`,
    description: "Plus qu'un kebab, un lieu de vie.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${bebasNeue.variable} ${inter.variable}`}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-[72px] lg:pt-[88px]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
