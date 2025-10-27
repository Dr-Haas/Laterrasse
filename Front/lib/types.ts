/**
 * Types TypeScript partagés pour le projet La Terrasse
 */

// User
export interface User {
  id: string
  email: string
  createdAt: Date
  updatedAt: Date
}

// Post (Galerie)
export interface Post {
  id: string
  userId: string
  message: string
  imageUrl?: string
  likesCount: number
  commentsCount: number
  createdAt: Date
  updatedAt: Date
  user: User
}

// Like
export interface Like {
  id: string
  userId: string
  postId: string
  createdAt: Date
}

// Comment
export interface Comment {
  id: string
  userId: string
  postId: string
  content: string
  createdAt: Date
  user: User
}

// Game Score
export interface GameScore {
  id: string
  playerName: string
  score: number
  difficulty: "easy" | "medium" | "hard"
  createdAt: Date
}

// Legend (Hall of Fame)
export interface Legend {
  id: string
  name: string
  anecdote: string
  category: "mangeur" | "fidele" | "drole" | "ambassadeur" | "autre"
  imageUrl?: string
  approved: boolean
  createdAt: Date
  updatedAt: Date
}

// Navigation Link
export interface NavLink {
  href: string
  label: string
}

// API Response
export interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

// Pagination
export interface PaginatedResponse<T> {
  data: T[]
  page: number
  limit: number
  total: number
  hasMore: boolean
}

