# 👨‍💻 Bonnes Pratiques de Développement - La Terrasse

## 📚 Stack Technique

### Frontend
- **Framework** : Next.js 14+ (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **State Management** : React Context + Zustand (si nécessaire)
- **Formulaires** : React Hook Form + Zod (validation)
- **HTTP Client** : Fetch API / Axios

### Backend
- **Option 1** : Next.js API Routes (recommandé pour débuter)
- **Option 2** : Backend séparé (Node.js + Express)
- **Base de données** : PostgreSQL via Supabase OU Firebase
- **ORM** : Prisma (si PostgreSQL custom) OU Supabase Client
- **Authentification** : NextAuth.js OU Supabase Auth

### Stockage & Services
- **Images** : Supabase Storage / Cloudinary / Vercel Blob
- **Email** : Resend / SendGrid
- **Analytics** : Vercel Analytics / Plausible

### Tests
- **Unitaires** : Jest + React Testing Library
- **E2E** : Playwright / Cypress
- **Linting** : ESLint + Prettier

### Déploiement
- **Hosting** : Vercel (recommandé pour Next.js)
- **CI/CD** : GitHub Actions / Vercel Git Integration
- **Monitoring** : Sentry / Vercel Monitoring

---

## 📁 Structure du Projet

```
/Users/garyhaas/LaTerrasse/
├── app/                          # Next.js App Router
│   ├── (routes)/                 # Routes groupées
│   │   ├── page.tsx             # Accueil
│   │   ├── carte/
│   │   │   └── page.tsx
│   │   ├── galerie/
│   │   │   └── page.tsx
│   │   ├── jeu/
│   │   │   └── page.tsx
│   │   └── hall-of-fame/
│   │       └── page.tsx
│   ├── api/                      # API Routes
│   │   ├── posts/
│   │   ├── likes/
│   │   ├── comments/
│   │   ├── scores/
│   │   └── legends/
│   ├── layout.tsx                # Layout racine
│   ├── globals.css               # Styles globaux
│   └── providers.tsx             # Context providers
│
├── components/                    # Composants réutilisables
│   ├── ui/                       # Composants UI génériques
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   ├── Input.tsx
│   │   └── ...
│   ├── layout/                   # Composants de layout
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Navigation.tsx
│   │   └── ...
│   ├── home/                     # Composants page accueil
│   │   ├── HeroSection.tsx
│   │   ├── MehmetQuote.tsx
│   │   └── SpiritCards.tsx
│   ├── galerie/                  # Composants galerie
│   │   ├── MasonryGrid.tsx
│   │   ├── PostCard.tsx
│   │   └── ShareModal.tsx
│   ├── jeu/                      # Composants jeu
│   │   └── MehmetRun.tsx
│   └── ...
│
├── lib/                          # Utilitaires et configurations
│   ├── db/                       # Database client & queries
│   │   ├── client.ts
│   │   ├── queries/
│   │   └── schema.ts
│   ├── utils/                    # Fonctions utilitaires
│   │   ├── cn.ts                # classNames utility
│   │   ├── format.ts
│   │   └── validators.ts
│   ├── hooks/                    # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useTheme.ts
│   │   └── ...
│   ├── constants.ts              # Constantes (couleurs, config)
│   └── types.ts                  # Types TypeScript partagés
│
├── public/                       # Assets statiques
│   ├── images/
│   │   ├── logo.svg
│   │   ├── hero/
│   │   ├── menu/
│   │   └── icons/
│   ├── sounds/
│   │   ├── grill.mp3
│   │   ├── beep.mp3
│   │   └── ...
│   └── fonts/
│
├── styles/                       # Styles additionnels si nécessaire
│   └── animations.css
│
├── prisma/                       # Si utilisation de Prisma
│   ├── schema.prisma
│   ├── migrations/
│   └── seed.ts
│
├── tests/                        # Tests
│   ├── unit/
│   ├── integration/
│   └── e2e/
│
├── .env.local                    # Variables d'environnement (local)
├── .env.example                  # Template des variables d'env
├── .eslintrc.json               # Configuration ESLint
├── .prettierrc                  # Configuration Prettier
├── tailwind.config.ts           # Configuration Tailwind
├── next.config.ts               # Configuration Next.js
├── tsconfig.json                # Configuration TypeScript
├── package.json
├── GUIDE.md                     # Guide du projet
├── TODO.md                      # Roadmap
└── DEV.md                       # Ce fichier
```

---

## 🎨 Conventions de Code

### Nommage

#### Fichiers et Dossiers
```typescript
// Composants React : PascalCase
Button.tsx
HeroSection.tsx
MasonryGrid.tsx

// Utilitaires et hooks : camelCase
useAuth.ts
formatDate.ts
validators.ts

// API Routes : kebab-case
api/user-posts/route.ts
api/game-scores/route.ts

// Pages : kebab-case (Next.js convention)
page.tsx
hall-of-fame/page.tsx
```

#### Variables et Fonctions
```typescript
// Variables : camelCase
const userName = "Mehmet"
const maxScore = 100

// Constantes : UPPER_SNAKE_CASE
const MAX_FILE_SIZE = 5000000
const API_BASE_URL = "https://api.laterrasse.com"

// Fonctions : camelCase, verbe à l'infinitif
function fetchUserData() {}
function calculateScore() {}
function handleSubmit() {}

// Composants : PascalCase
function UserProfile() {}
function NavigationMenu() {}

// Types et Interfaces : PascalCase
interface User {}
type PostData = {}
```

#### Classes CSS (Tailwind)
```tsx
// Grouper par catégorie logique, une ligne par groupe
<div className={cn(
  "flex items-center justify-between", // Layout
  "px-4 py-2", // Spacing
  "bg-blue-500 text-white", // Colors
  "rounded-lg shadow-md", // Effects
  "hover:bg-blue-600 transition-colors", // States
  className // Props additionnelles
)}>
```

---

## 💻 Patterns de Code

### Composants React

#### Structure Recommandée
```typescript
'use client' // Si nécessaire (interactivité)

import { useState } from 'react'
import { cn } from '@/lib/utils/cn'

// Types
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  isLoading?: boolean
}

// Composant
export function Button({
  variant = 'primary',
  size = 'md',
  isLoading = false,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  // Logique du composant
  const baseStyles = "font-bold rounded transition-colors"
  const variantStyles = {
    primary: "bg-red-500 hover:bg-red-600 text-white",
    secondary: "bg-yellow-400 hover:bg-yellow-500 text-black",
    outline: "border-2 border-blue-500 hover:bg-blue-50"
  }
  const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg"
  }

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        (disabled || isLoading) && "opacity-50 cursor-not-allowed",
        className
      )}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? "Chargement..." : children}
    </button>
  )
}
```

#### Composants Server vs Client

```typescript
// Server Component (par défaut dans App Router)
// - Pas d'interactivité
// - Fetch de données côté serveur
// - Pas de hooks (useState, useEffect, etc.)
export default async function PostsList() {
  const posts = await fetchPosts() // Fetch côté serveur
  
  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  )
}

// Client Component
// - Interactivité (onClick, onChange, etc.)
// - Hooks React
// - État local
'use client'

export function LikeButton({ postId }: { postId: string }) {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)

  const handleLike = async () => {
    setLiked(!liked)
    // API call...
  }

  return (
    <button onClick={handleLike}>
      {liked ? '❤️' : '🤍'} {count}
    </button>
  )
}
```

### Custom Hooks

```typescript
// hooks/useAuth.ts
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface AuthState {
  user: User | null
  isAuthenticated: boolean
  login: (email: string) => Promise<void>
  logout: () => void
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,
      login: async (email) => {
        // Logique d'authentification
        const user = await authenticateUser(email)
        set({ user, isAuthenticated: true })
      },
      logout: () => {
        set({ user: null, isAuthenticated: false })
      }
    }),
    {
      name: 'auth-storage',
    }
  )
)
```

### API Routes (Next.js)

```typescript
// app/api/posts/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'
import { db } from '@/lib/db/client'

// Validation schema
const createPostSchema = z.object({
  email: z.string().email(),
  message: z.string().min(1).max(500),
  imageUrl: z.string().url().optional()
})

// GET /api/posts
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const page = parseInt(searchParams.get('page') || '1')
    const limit = parseInt(searchParams.get('limit') || '20')

    const posts = await db.post.findMany({
      take: limit,
      skip: (page - 1) * limit,
      orderBy: { createdAt: 'desc' },
      include: {
        user: true,
        _count: { select: { likes: true, comments: true } }
      }
    })

    return NextResponse.json({ posts, page, limit })
  } catch (error) {
    console.error('Error fetching posts:', error)
    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      { status: 500 }
    )
  }
}

// POST /api/posts
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    
    // Validation
    const validatedData = createPostSchema.parse(body)

    // Créer ou récupérer l'utilisateur
    const user = await db.user.upsert({
      where: { email: validatedData.email },
      update: {},
      create: { email: validatedData.email }
    })

    // Créer le post
    const post = await db.post.create({
      data: {
        userId: user.id,
        message: validatedData.message,
        imageUrl: validatedData.imageUrl
      }
    })

    return NextResponse.json({ post }, { status: 201 })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.errors },
        { status: 400 }
      )
    }
    
    console.error('Error creating post:', error)
    return NextResponse.json(
      { error: 'Failed to create post' },
      { status: 500 }
    )
  }
}
```

---

## 🎨 Configuration Tailwind

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette La Terrasse
        'terrasse-blue': '#00AEEF',
        'terrasse-red': '#E6322D',
        'terrasse-yellow': '#FFD100',
        'terrasse-white': '#F9F9F9',
        'terrasse-black': '#101010',
      },
      fontFamily: {
        impact: ['Impact', 'Arial Black', 'sans-serif'],
        bebas: ['Bebas Neue', 'Impact', 'sans-serif'],
        mont: ['Mont Heavy', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pop': 'pop 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'grill': 'grill 0.1s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pop: {
          '0%': { transform: 'scale(0.8)', opacity: '0' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        grill: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-2px)' },
          '75%': { transform: 'translateX(2px)' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}

export default config
```

---

## 🔒 Variables d'Environnement

```bash
# .env.example

# Database (Supabase)
DATABASE_URL="postgresql://..."
NEXT_PUBLIC_SUPABASE_URL="https://xxxxx.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJI..."
SUPABASE_SERVICE_ROLE_KEY="eyJhbGciOiJI..."

# Authentication
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key"

# Image Storage (Cloudinary exemple)
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="your-cloud-name"
CLOUDINARY_API_KEY="123456789"
CLOUDINARY_API_SECRET="your-secret"

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY="AIza..."

# Email (Resend)
RESEND_API_KEY="re_..."

# Analytics
NEXT_PUBLIC_GA_ID="G-XXXXXXXXXX"

# Sentry (optionnel)
SENTRY_DSN="https://..."

# Environment
NODE_ENV="development"
```

**⚠️ Important** : Ne JAMAIS commiter le fichier `.env.local`. Toujours utiliser `.env.example` comme template.

---

## 🧪 Tests

### Tests Unitaires

```typescript
// components/ui/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
  it('renders children correctly', () => {
    render(<Button>Cliquez ici</Button>)
    expect(screen.getByText('Cliquez ici')).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick}>Cliquez</Button>)
    
    fireEvent.click(screen.getByText('Cliquez'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('disables button when isLoading is true', () => {
    render(<Button isLoading>Cliquez</Button>)
    expect(screen.getByRole('button')).toBeDisabled()
  })

  it('applies correct variant styles', () => {
    const { rerender } = render(<Button variant="primary">Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-red-500')

    rerender(<Button variant="secondary">Test</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-yellow-400')
  })
})
```

### Tests E2E

```typescript
// tests/e2e/galerie.spec.ts
import { test, expect } from '@playwright/test'

test.describe('Galerie - Partage de moment', () => {
  test('should open share modal when clicking button', async ({ page }) => {
    await page.goto('/galerie')
    
    await page.click('button:has-text("Partager ton moment")')
    
    await expect(page.locator('dialog')).toBeVisible()
    await expect(page.locator('input[type="email"]')).toBeVisible()
  })

  test('should submit a new post successfully', async ({ page }) => {
    await page.goto('/galerie')
    
    await page.click('button:has-text("Partager ton moment")')
    
    await page.fill('input[type="email"]', 'test@example.com')
    await page.fill('textarea', 'Super moment à La Terrasse!')
    
    // Upload d'image (si nécessaire)
    // await page.setInputFiles('input[type="file"]', 'path/to/image.jpg')
    
    await page.click('button[type="submit"]')
    
    await expect(page.locator('text=Moment partagé avec succès')).toBeVisible()
  })

  test('should like a post', async ({ page }) => {
    await page.goto('/galerie')
    
    const likeButton = page.locator('button[aria-label="Like"]').first()
    const initialCount = await likeButton.textContent()
    
    await likeButton.click()
    
    // Vérifier que le compteur a augmenté
    await expect(likeButton).not.toHaveText(initialCount!)
  })
})
```

---

## 📝 Documentation du Code

### Commentaires JSDoc

```typescript
/**
 * Formate une date en français
 * @param date - La date à formater
 * @param format - Le format souhaité ('short' | 'long' | 'relative')
 * @returns La date formatée en string
 * @example
 * formatDate(new Date(), 'long') // "24 octobre 2025"
 * formatDate(new Date(), 'relative') // "Il y a 2 heures"
 */
export function formatDate(
  date: Date,
  format: 'short' | 'long' | 'relative' = 'short'
): string {
  // Implementation...
}

/**
 * Composant de carte interactive pour afficher un post
 * 
 * @component
 * @example
 * ```tsx
 * <PostCard
 *   post={myPost}
 *   onLike={handleLike}
 *   onComment={handleComment}
 * />
 * ```
 */
export function PostCard({ post, onLike, onComment }: PostCardProps) {
  // Implementation...
}
```

---

## 🚀 Performance

### Optimisation des Images

```typescript
// Utiliser Next/Image
import Image from 'next/image'

export function HeroSection() {
  return (
    <div className="relative h-screen">
      <Image
        src="/images/hero/restaurant.jpg"
        alt="La Terrasse - Restaurant"
        fill
        priority // Pour le LCP
        sizes="100vw"
        className="object-cover"
        quality={85}
      />
    </div>
  )
}

// Pour les images uploadées par les utilisateurs
<Image
  src={post.imageUrl}
  alt={post.message}
  width={400}
  height={400}
  className="object-cover"
  loading="lazy" // Lazy loading
  placeholder="blur"
  blurDataURL="/images/placeholder.jpg"
/>
```

### Code Splitting

```typescript
// Lazy loading de composants lourds
import dynamic from 'next/dynamic'

const MehmetRun = dynamic(() => import('@/components/jeu/MehmetRun'), {
  loading: () => <p>Chargement du jeu...</p>,
  ssr: false // Désactiver SSR pour les composants client uniquement
})

export default function JeuPage() {
  return (
    <div>
      <h1>Mehmet Run</h1>
      <MehmetRun />
    </div>
  )
}
```

### Memoization

```typescript
import { memo, useMemo, useCallback } from 'react'

// Memoïser les composants
export const PostCard = memo(function PostCard({ post }: PostCardProps) {
  return (
    <div>
      {/* ... */}
    </div>
  )
})

// Memoïser les valeurs calculées
function GalerieStats({ posts }: { posts: Post[] }) {
  const totalLikes = useMemo(() => {
    return posts.reduce((sum, post) => sum + post.likesCount, 0)
  }, [posts])

  return <div>Total likes: {totalLikes}</div>
}

// Memoïser les callbacks
function PostsList({ posts }: { posts: Post[] }) {
  const handleLike = useCallback((postId: string) => {
    // Logique...
  }, [])

  return (
    <>
      {posts.map(post => (
        <PostCard key={post.id} post={post} onLike={handleLike} />
      ))}
    </>
  )
}
```

---

## 🔐 Sécurité

### Validation des Données

```typescript
// lib/validators.ts
import { z } from 'zod'

export const postSchema = z.object({
  email: z.string().email('Email invalide'),
  message: z.string()
    .min(1, 'Le message ne peut pas être vide')
    .max(500, 'Le message est trop long (max 500 caractères)'),
  imageUrl: z.string().url().optional()
})

export const legendSchema = z.object({
  name: z.string().min(2).max(50),
  anecdote: z.string().min(10).max(300),
  category: z.enum(['mangeur', 'fidele', 'drole', 'autre'])
})

// Utilisation dans un composant
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

function ShareModal() {
  const form = useForm({
    resolver: zodResolver(postSchema),
    defaultValues: {
      email: '',
      message: '',
    }
  })

  const onSubmit = async (data) => {
    // Les données sont validées !
    await createPost(data)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* ... */}
    </form>
  )
}
```

### Sanitisation

```typescript
// lib/utils/sanitize.ts
import DOMPurify from 'isomorphic-dompurify'

/**
 * Nettoie le HTML pour éviter les XSS
 */
export function sanitizeHtml(dirty: string): string {
  return DOMPurify.sanitize(dirty, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong'],
    ALLOWED_ATTR: []
  })
}

/**
 * Échappe les caractères spéciaux
 */
export function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
  }
  return text.replace(/[&<>"']/g, (char) => map[char])
}
```

### Rate Limiting

```typescript
// lib/rate-limit.ts
import { LRUCache } from 'lru-cache'

type RateLimitOptions = {
  interval: number // en ms
  uniqueTokenPerInterval: number
}

export function rateLimit(options: RateLimitOptions) {
  const tokenCache = new LRUCache({
    max: options.uniqueTokenPerInterval,
    ttl: options.interval,
  })

  return {
    check: (limit: number, token: string) =>
      new Promise<void>((resolve, reject) => {
        const tokenCount = (tokenCache.get(token) as number[]) || [0]
        if (tokenCount[0] === 0) {
          tokenCache.set(token, tokenCount)
        }
        tokenCount[0] += 1

        const currentUsage = tokenCount[0]
        const isRateLimited = currentUsage >= limit

        return isRateLimited ? reject() : resolve()
      }),
  }
}

// Utilisation dans une API route
const limiter = rateLimit({
  interval: 60 * 1000, // 1 minute
  uniqueTokenPerInterval: 500,
})

export async function POST(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  
  try {
    await limiter.check(10, ip) // Max 10 requêtes par minute
  } catch {
    return NextResponse.json(
      { error: 'Rate limit exceeded' },
      { status: 429 }
    )
  }

  // Suite du traitement...
}
```

---

## 📊 Monitoring & Analytics

### Error Tracking (Sentry)

```typescript
// lib/sentry.ts
import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 1.0,
})

// Utilisation
try {
  await riskyOperation()
} catch (error) {
  Sentry.captureException(error, {
    tags: {
      section: 'galerie',
      action: 'create-post'
    },
    extra: {
      userId: user.id,
      postData: data
    }
  })
  throw error
}
```

### Analytics

```typescript
// lib/analytics.ts
export const analytics = {
  page: (path: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_ID!, {
        page_path: path,
      })
    }
  },
  
  event: (action: string, params?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', action, params)
    }
  }
}

// Utilisation
analytics.event('share_post', {
  category: 'engagement',
  label: 'Galerie',
})

analytics.event('play_game', {
  category: 'gaming',
  score: 150,
})
```

---

## 🌐 Accessibilité (A11Y)

### Checklist

```typescript
// Exemples de bonnes pratiques

// ✅ Utiliser des éléments sémantiques
<nav aria-label="Navigation principale">
  <ul>
    <li><a href="/">Accueil</a></li>
    <li><a href="/carte">La Carte</a></li>
  </ul>
</nav>

// ✅ Labels accessibles
<button aria-label="Aimer ce post">
  ❤️
</button>

// ✅ Skip links
<a href="#main-content" className="sr-only focus:not-sr-only">
  Aller au contenu principal
</a>

// ✅ Focus visible
<button className="focus:outline-none focus:ring-2 focus:ring-terrasse-blue">
  Cliquez ici
</button>

// ✅ Alt text descriptif
<Image
  src="/images/hero.jpg"
  alt="Intérieur du restaurant La Terrasse avec des clients souriants"
/>

// ✅ ARIA pour les états dynamiques
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
>
  {message}
</div>

// ✅ Contraste des couleurs (minimum 4.5:1)
// Utiliser un outil comme https://webaim.org/resources/contrastchecker/
```

---

## 🔄 Git Workflow

### Branches

```
main                    # Production
├── develop            # Développement principal
    ├── feature/hero-section
    ├── feature/galerie
    ├── feature/mini-jeu
    ├── fix/navigation-mobile
    └── refactor/api-routes
```

### Commits Conventionnels

```bash
# Format
<type>(<scope>): <subject>

# Types
feat:     # Nouvelle fonctionnalité
fix:      # Correction de bug
docs:     # Documentation
style:    # Formatage, pas de changement de code
refactor: # Refactoring
test:     # Ajout/modification de tests
chore:    # Maintenance, dépendances

# Exemples
feat(galerie): add masonry grid layout
fix(header): correct mobile navigation overflow
docs(readme): update installation instructions
style(components): format with prettier
refactor(api): simplify post creation logic
test(button): add unit tests for variants
chore(deps): update next to 14.1.0
```

### Pull Requests

```markdown
## Description
Brève description des changements

## Type de changement
- [ ] 🐛 Bug fix
- [ ] ✨ Nouvelle fonctionnalité
- [ ] 💥 Breaking change
- [ ] 📝 Documentation

## Checklist
- [ ] Code testé localement
- [ ] Tests unitaires ajoutés/mis à jour
- [ ] Documentation mise à jour
- [ ] Pas d'erreurs de linting
- [ ] Responsive testé
- [ ] Accessibilité vérifiée

## Screenshots (si applicable)
[Ajouter des screenshots]

## Liens
- Issue: #123
- Staging: https://staging.laterrasse.com
```

---

## 📦 Scripts Package.json

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "lint:fix": "next lint --fix",
    "format": "prettier --write \"**/*.{js,jsx,ts,tsx,json,css,md}\"",
    "format:check": "prettier --check \"**/*.{js,jsx,ts,tsx,json,css,md}\"",
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage",
    "test:e2e": "playwright test",
    "test:e2e:ui": "playwright test --ui",
    "type-check": "tsc --noEmit",
    "db:generate": "prisma generate",
    "db:push": "prisma db push",
    "db:migrate": "prisma migrate dev",
    "db:studio": "prisma studio",
    "db:seed": "tsx prisma/seed.ts",
    "analyze": "ANALYZE=true next build",
    "clean": "rm -rf .next node_modules",
    "prepare": "husky install"
  }
}
```

---

## 🎯 Points de Vigilance

### Performance
- ⚡ Utiliser Next/Image pour toutes les images
- ⚡ Lazy load des composants lourds
- ⚡ Code splitting agressif
- ⚡ Compression des images avant upload
- ⚡ Mise en cache agressive (stale-while-revalidate)

### SEO
- 🔍 Meta tags sur toutes les pages
- 🔍 Alt text sur toutes les images
- 🔍 Sitemap.xml et robots.txt
- 🔍 Schema.org markup
- 🔍 Open Graph pour partages sociaux

### Sécurité
- 🔒 Validation TOUTES les entrées utilisateur
- 🔒 Sanitisation du HTML
- 🔒 Rate limiting sur les API
- 🔒 HTTPS obligatoire en production
- 🔒 Pas de secrets dans le code (utiliser .env)

### Accessibilité
- ♿ Navigation au clavier
- ♿ ARIA labels appropriés
- ♿ Contraste des couleurs conforme
- ♿ Focus visible
- ♿ Textes alternatifs descriptifs

### UX
- 💫 Loading states visuels
- 💫 Messages d'erreur clairs
- 💫 Feedback utilisateur immédiat
- 💫 Animations fluides (60fps)
- 💫 Mobile-first approach

---

## 📚 Ressources

### Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Framer Motion](https://www.framer.com/motion/)

### Outils
- [Figma](https://figma.com) - Design
- [Vercel](https://vercel.com) - Déploiement
- [Supabase](https://supabase.com) - Backend as a Service
- [Cloudinary](https://cloudinary.com) - Gestion d'images
- [Sentry](https://sentry.io) - Error tracking

### Inspiration
- [Awwwards](https://www.awwwards.com/) - Design inspiration
- [Dribbble](https://dribbble.com/) - UI/UX inspiration
- [CodePen](https://codepen.io/) - Animations & effects

---

**Version** : 1.0  
**Dernière mise à jour** : Octobre 2025  
**Mainteneurs** : Équipe La Terrasse

---

**Note finale** : Ce document est vivant et doit être mis à jour régulièrement au fur et à mesure de l'évolution du projet. N'hésitez pas à proposer des améliorations !

