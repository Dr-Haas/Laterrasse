"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { NAV_LINKS, RESTAURANT_INFO } from "@/lib/constants"
import { cn } from "@/lib/utils/cn"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      // Fermer le menu mobile au scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [isMobileMenuOpen])

  // Bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isMobileMenuOpen])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "shadow-lg" : "shadow-md"
      )}
      style={{padding: "10px 10px"}}
    >
      {/* Background - Desktop dégradé bleu vers jaune */}
      <div className="absolute inset-0 bg-terrasse-blue lg:bg-gradient-to-r lg:from-terrasse-blue lg:to-terrasse-yellow opacity-100" />
      
      {/* Overlay translucide au scroll */}
      <div
        className={cn(
          "absolute inset-0 bg-terrasse-black/20 transition-opacity duration-300",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
      />

      <div
        className={cn(
          "container mx-auto px-6 lg:px-12 xl:px-16 max-w-[1800px] relative z-10 transition-all duration-300",
          isScrolled ? "py-3" : "py-4 lg:py-6"
        )}
      >
        <div className="flex items-center justify-between">
          {/* Logo + Slogan */}
          <Link href="/" className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-3xl">🍔</span>
              <span
                className={cn(
                  "font-bebas text-white transition-all duration-300",
                  isScrolled ? "text-2xl lg:text-3xl" : "text-3xl lg:text-4xl"
                )}
              >
                LA TERRASSE
              </span>
            </div>
            <span className="text-terrasse-yellow text-xs lg:text-sm font-medium italic -mt-1">
              Plus qu'un kebab
            </span>
          </Link>

              {/* Navigation Desktop */}
              <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navigation principale">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "font-bebas text-lg xl:text-xl text-white transition-all duration-200 relative pb-1",
                        isActive ? "text-terrasse-yellow" : "hover:text-terrasse-yellow"
                      )}
                    >
                      {link.label}
                      {isActive && (
                        <motion.div
                          layoutId="activeLink"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-terrasse-yellow"
                          initial={false}
                          transition={{ type: "spring", stiffness: 380, damping: 30 }}
                        />
                      )}
                    </Link>
                  )
                })}
                
                {/* Bouton Commander */}
                <motion.a
                  style={{padding: "5px 10px"}}
                  href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s/g, '')}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-terrasse-red text-white font-bebas text-lg xl:text-xl px-6 py-2 rounded-lg shadow-lg hover:bg-terrasse-red/90 transition-colors flex items-center gap-2"
                >
                  📞 Commander
                </motion.a>
              </nav>

          {/* Bouton Menu Mobile - Rouge ketchup */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden flex flex-col gap-1.5 w-10 h-10 justify-center items-center bg-terrasse-red rounded-lg transition-all hover:scale-110"
            aria-label="Menu"
            aria-expanded={isMobileMenuOpen}
          >
            <motion.span
              animate={isMobileMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white transition-all"
            />
            <motion.span
              animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-6 h-0.5 bg-white transition-all"
            />
            <motion.span
              animate={isMobileMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
              className="w-6 h-0.5 bg-white transition-all"
            />
          </button>
        </div>

        {/* Version compacte au scroll sur mobile */}
        {isScrolled && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-2 text-center"
          >
            <p className="text-white text-xs">📍 Rueil-Malmaison</p>
          </motion.div>
        )}
      </div>

      {/* Overlay sombre pour fermer le menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-terrasse-black/50 z-40 lg:hidden"
          />
        )}
      </AnimatePresence>

      {/* Menu Mobile - Fond noir avec slide */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-[72px] left-0 right-0 lg:hidden bg-terrasse-black border-t border-terrasse-yellow/30 shadow-2xl z-50 max-h-[calc(100vh-72px)] overflow-y-auto"
          >
                <nav className="container mx-auto px-6 py-6" aria-label="Navigation mobile">
                  <ul className="flex flex-col gap-2">
                    {NAV_LINKS.map((link, index) => {
                      const isActive = pathname === link.href
                      return (
                        <motion.li
                          key={link.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.2, delay: index * 0.05 }}
                        >
                          <Link
                            href={link.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "font-bebas text-2xl block py-4 px-6 rounded-lg transition-all duration-200",
                              isActive
                                ? "bg-terrasse-red text-white"
                                : "text-white hover:bg-terrasse-red hover:text-terrasse-yellow"
                            )}
                          >
                            {link.label}
                          </Link>
                        </motion.li>
                      )
                    })}
                    
                    {/* Bouton Commander mobile */}
                    <motion.li
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: NAV_LINKS.length * 0.05 }}
                    >
                      <a
                        href={`tel:${RESTAURANT_INFO.contact.phone.replace(/\s/g, '')}`}
                        className="font-bebas text-2xl block py-4 px-6 rounded-lg transition-all duration-200 bg-terrasse-red text-white hover:bg-terrasse-red/90 flex items-center justify-center gap-2"
                      >
                        📞 Commander
                      </a>
                    </motion.li>
                  </ul>
                </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

