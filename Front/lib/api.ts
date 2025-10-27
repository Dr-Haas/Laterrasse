/**
 * Configuration API pour La Terrasse
 */

// URL de l'API backend
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001'

/**
 * Helper pour faire des requêtes à l'API
 */
export async function apiRequest<T = any>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_URL}${endpoint}`
  
  const config: RequestInit = {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options?.headers,
    },
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error(`Erreur API ${endpoint}:`, error)
    throw error
  }
}

/**
 * Fonctions spécifiques pour chaque endpoint
 */
export const api = {
  // Posts (Galerie)
  posts: {
    getAll: () => apiRequest('/api/posts'),
    getById: (id: string) => apiRequest(`/api/posts/${id}`),
    create: (data: FormData) => 
      apiRequest('/api/posts', {
        method: 'POST',
        body: data,
        headers: {}, // Pas de Content-Type pour FormData
      }),
  },
  
  // Game Scores
  gameScores: {
    getTop: (difficulty?: string) => 
      apiRequest(`/api/game-scores/top${difficulty ? `?difficulty=${difficulty}` : ''}`),
    submit: (data: { player_name: string; score: number; difficulty: string }) =>
      apiRequest('/api/game-scores', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
  },
  
  // Menu
  menu: {
    getAll: () => apiRequest('/api/menu'),
    getByCategory: (categorySlug: string) => 
      apiRequest(`/api/menu?category=${categorySlug}`),
  },
  
  // Legends (Hall of Fame)
  legends: {
    getAll: () => apiRequest('/api/legends'),
    getApproved: () => apiRequest('/api/legends?approved=true'),
    submit: (data: FormData) =>
      apiRequest('/api/legends', {
        method: 'POST',
        body: data,
        headers: {}, // Pas de Content-Type pour FormData
      }),
  },
  
  // Auth
  auth: {
    login: (email: string, password: string) =>
      apiRequest('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
      }),
    register: (data: { email: string; password: string; username: string }) =>
      apiRequest('/api/auth/register', {
        method: 'POST',
        body: JSON.stringify(data),
      }),
    me: (token: string) =>
      apiRequest('/api/auth/me', {
        headers: { Authorization: `Bearer ${token}` },
      }),
  },
}

