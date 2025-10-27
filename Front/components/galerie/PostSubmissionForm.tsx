"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import { GALLERY_CONFIG } from "@/lib/constants"
import Image from "next/image"

interface FormData {
  email: string
  message: string
  image: File | null
}

interface FormErrors {
  email?: string
  message?: string
  image?: string
  general?: string
}

export function PostSubmissionForm() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    message: "",
    image: null,
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Validation email
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  // Validation formulaire
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Email invalide"
    }

    if (!formData.message.trim() && !formData.image) {
      newErrors.general = "Vous devez ajouter au moins un message ou une image"
    }

    if (formData.message.length > GALLERY_CONFIG.maxMessageLength) {
      newErrors.message = `Le message ne peut pas dépasser ${GALLERY_CONFIG.maxMessageLength} caractères`
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  // Gestion upload image
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    // Validation du fichier
    if (!GALLERY_CONFIG.allowedFormats.includes(file.type)) {
      setErrors({
        ...errors,
        image: "Format non supporté. Utilisez JPG, PNG ou WEBP.",
      })
      return
    }

    if (file.size > GALLERY_CONFIG.maxImageSize) {
      setErrors({
        ...errors,
        image: "L'image est trop volumineuse (max 5MB)",
      })
      return
    }

    // Créer preview
    const reader = new FileReader()
    reader.onloadend = () => {
      setImagePreview(reader.result as string)
    }
    reader.readAsDataURL(file)

    setFormData({ ...formData, image: file })
    setErrors({ ...errors, image: undefined })
  }

  // Supprimer l'image
  const removeImage = () => {
    setFormData({ ...formData, image: null })
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    // TODO: Envoyer les données à l'API
    // Pour le moment, juste simuler un délai
    setTimeout(() => {
      console.log("Données du formulaire:", formData)
      alert("✅ Votre souvenir a été ajouté avec succès!")
      
      // Reset formulaire
      setFormData({ email: "", message: "", image: null })
      setImagePreview(null)
      setErrors({})
      setIsSubmitting(false)
      
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    }, 1500)
  }

  return (
    <section style={{padding: "60px 20px", display: "flex", justifyContent: "center", alignItems: "center"}} className="py-12 md:py-16 lg:py-20 bg-terrasse-white">
      <div className="container mx-auto px-6 md:px-8 lg:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 lg:p-10 border-4 border-terrasse-yellow"
        >
          <h2 style={{margin: "20px 0"}} className="font-bebas text-4xl md:text-5xl lg:text-6xl text-terrasse-red mb-6 text-center">
            Partagez votre souvenir 💭
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6" style={{padding: "20px 10px"}}>
            {/* Email */}
            <div style={{margin: "20px 0"}}>
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-terrasse-black mb-2"
              >
                Votre email <span className="text-terrasse-red">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className={`w-full px-4 py-3 rounded-lg border-2 text-lg ${
                  errors.email
                    ? "border-terrasse-red"
                    : "border-gray-300 focus:border-terrasse-blue"
                } focus:outline-none focus:ring-2 focus:ring-terrasse-blue/20 transition-all`}
                placeholder="votre.email@exemple.com"
              />
              {errors.email && (
                <p className="text-terrasse-red text-sm mt-2">{errors.email}</p>
              )}
            </div>

            {/* Message */}
            <div style={{margin: "20px 0"}}>
              <label
                htmlFor="message"
                className="block text-lg font-semibold text-terrasse-black mb-2"
              >
                Votre message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className={`w-full px-4 py-3 rounded-lg border-2 text-lg resize-none ${
                  errors.message
                    ? "border-terrasse-red"
                    : "border-gray-300 focus:border-terrasse-blue"
                } focus:outline-none focus:ring-2 focus:ring-terrasse-blue/20 transition-all`}
                placeholder="Racontez-nous votre expérience à La Terrasse... 🍔✨"
              />
              <div className="flex justify-between items-center mt-2">
                <span className="text-sm text-gray-500">
                  {formData.message.length} / {GALLERY_CONFIG.maxMessageLength}
                </span>
                {errors.message && (
                  <p className="text-terrasse-red text-sm">{errors.message}</p>
                )}
              </div>
            </div>

            {/* Upload Image */}
            <div>
              <label className="block text-lg font-semibold text-terrasse-black mb-2">
                Ajouter une photo 📸
              </label>

              {!imagePreview ? (
                <div
                  style={{margin: "20px 0"}}
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-terrasse-blue hover:bg-terrasse-blue/5 transition-all"
                >
                  <div className="text-5xl mb-3">📤</div>
                  <p className="text-lg font-medium text-gray-700">
                    Cliquez pour choisir une image
                  </p>
                  <p className="text-sm text-gray-500 mt-2">
                    JPG, PNG ou WEBP (max 5MB)
                  </p>
                </div>
              ) : (
                <div className="relative rounded-lg overflow-hidden border-2 border-terrasse-yellow" style={{margin: "20px 0"}}>
                  <Image
                    src={imagePreview}
                    alt="Aperçu"
                    width={800}
                    height={600}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    type="button"
                    onClick={removeImage}
                    className="absolute top-2 right-2 bg-terrasse-red text-white rounded-full p-2 hover:bg-terrasse-red/80 transition-colors"
                    aria-label="Supprimer l'image"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              )}

              <input
                ref={fileInputRef}
                type="file"
                accept={GALLERY_CONFIG.allowedFormats.join(",")}
                onChange={handleImageChange}
                className="hidden"
              />

              {errors.image && (
                <p className="text-terrasse-red text-sm mt-2">{errors.image}</p>
              )}
            </div>

            {/* Erreur générale */}
            {errors.general && (
              <div className="bg-terrasse-red/10 border-2 border-terrasse-red rounded-lg p-4">
                <p className="text-terrasse-red font-medium">{errors.general}</p>
              </div>
            )}

            {/* Bouton de soumission */}
            <Button
              type="submit"
              size="lg"
              disabled={isSubmitting}
              className="w-full text-xl py-6 shadow-lg hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <span className="inline-block animate-spin mr-2">⏳</span>
                  Envoi en cours...
                </>
              ) : (
                <>Partager mon souvenir 🚀</>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

