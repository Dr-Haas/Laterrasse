# 📡 Exemples d'Utilisation de l'API

Guide pratique avec des exemples concrets pour utiliser l'API La Terrasse.

## 🔐 Authentification

### Inscription

```javascript
const response = await fetch('http://localhost:3001/api/auth/register', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'nouveau@example.com',
    password: 'motdepasse123',
    username: 'MonPseudo'
  })
});

const data = await response.json();
console.log(data.token); // Sauvegarder ce token
```

### Connexion

```javascript
const response = await fetch('http://localhost:3001/api/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    email: 'admin@laterrasse.fr',
    password: 'password123'
  })
});

const { user, token } = await response.json();
localStorage.setItem('token', token); // Sauvegarder le token
```

### Obtenir l'utilisateur actuel

```javascript
const token = localStorage.getItem('token');

const response = await fetch('http://localhost:3001/api/auth/me', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});

const { user } = await response.json();
```

## 🍔 Menu

### Récupérer le menu complet

```javascript
const response = await fetch('http://localhost:3001/api/menu');
const { data: menu } = await response.json();

// menu est un array de catégories avec leurs items
menu.forEach(category => {
  console.log(`📦 ${category.name}`);
  category.items.forEach(item => {
    console.log(`  - ${item.name}: ${item.prices[0].price}€`);
  });
});
```

### Récupérer une catégorie spécifique

```javascript
// D'abord récupérer les catégories
const categoriesRes = await fetch('http://localhost:3001/api/menu/categories');
const { data: categories } = await categoriesRes.json();

// Trouver la catégorie "Sandwiches"
const sandwiches = categories.find(cat => cat.slug === 'sandwiches');

// Récupérer les items de cette catégorie
const itemsRes = await fetch(`http://localhost:3001/api/menu/category/${sandwiches.id}`);
const { data: items } = await itemsRes.json();
```

## 📸 Galerie (Posts)

### Récupérer les posts

```javascript
// Tous les posts approuvés
const response = await fetch('http://localhost:3001/api/posts?page=1&limit=20');
const { data: posts, pagination } = await response.json();

console.log(`${posts.length} posts sur ${pagination.total}`);
```

### Créer un post avec image

```javascript
const token = localStorage.getItem('token');

// Avec image
const formData = new FormData();
formData.append('message', 'Superbe kebab ! 🔥');
formData.append('image', fileInput.files[0]);

const response = await fetch('http://localhost:3001/api/posts', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  body: formData
});

const { data: post } = await response.json();
```

### Créer un post sans image

```javascript
const token = localStorage.getItem('token');

const response = await fetch('http://localhost:3001/api/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    message: 'La Terrasse c\'est la vie !'
  })
});

const { data: post } = await response.json();
```

### Liker un post

```javascript
const token = localStorage.getItem('token');
const postId = 'uuid-du-post';

const response = await fetch(`http://localhost:3001/api/posts/${postId}/like`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

### Supprimer un like

```javascript
const token = localStorage.getItem('token');
const postId = 'uuid-du-post';

await fetch(`http://localhost:3001/api/posts/${postId}/like`, {
  method: 'DELETE',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

## 💬 Commentaires

### Récupérer les commentaires d'un post

```javascript
const postId = 'uuid-du-post';

const response = await fetch(`http://localhost:3001/api/comments/${postId}`);
const { data: comments } = await response.json();
```

### Ajouter un commentaire

```javascript
const token = localStorage.getItem('token');
const postId = 'uuid-du-post';

const response = await fetch(`http://localhost:3001/api/comments/${postId}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    content: 'Super post !'
  })
});

const { data: comment } = await response.json();
```

## 🎮 Scores de Jeu

### Enregistrer un score

```javascript
const response = await fetch('http://localhost:3001/api/game-scores', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    playerName: 'ProGamer',
    score: 5000,
    difficulty: 'hard',
    gameDuration: 180 // en secondes
  })
});

const { data: score } = await response.json();
```

### Obtenir le top 10

```javascript
const response = await fetch('http://localhost:3001/api/game-scores/top?limit=10&difficulty=hard');
const { data: topScores } = await response.json();

topScores.forEach((score, index) => {
  console.log(`${index + 1}. ${score.player_name}: ${score.score} points`);
});
```

### Obtenir les statistiques

```javascript
const response = await fetch('http://localhost:3001/api/game-scores/stats');
const { global, byDifficulty } = await response.json();

console.log(`Total de parties: ${global.total_games}`);
console.log(`Meilleur score: ${global.highest_score}`);
console.log(`Score moyen: ${global.average_score}`);
```

## 🏆 Hall of Fame (Légendes)

### Récupérer les légendes

```javascript
// Toutes les légendes approuvées
const response = await fetch('http://localhost:3001/api/legends?approved=true');
const { data: legends } = await response.json();
```

### Filtrer par catégorie

```javascript
const response = await fetch('http://localhost:3001/api/legends?category=mangeur&approved=true');
const { data: legendsMangeurs } = await response.json();
```

### Proposer une légende

```javascript
const formData = new FormData();
formData.append('name', 'Jean-Michel');
formData.append('anecdote', 'A mangé 20 kebabs en une soirée !');
formData.append('category', 'mangeur');
formData.append('image', fileInput.files[0]); // optionnel

const response = await fetch('http://localhost:3001/api/legends', {
  method: 'POST',
  body: formData
});

const { data: legend } = await response.json();
// Si non-admin, legend.approved sera false
```

### Voter pour une légende

```javascript
const legendId = 'uuid-de-la-legende';

await fetch(`http://localhost:3001/api/legends/${legendId}/vote`, {
  method: 'POST'
});
```

### Approuver une légende (Admin)

```javascript
const token = localStorage.getItem('token');
const legendId = 'uuid-de-la-legende';

await fetch(`http://localhost:3001/api/legends/${legendId}/approve`, {
  method: 'PATCH',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

## 🛠️ Administration (Admin uniquement)

### Approuver un post

```javascript
const token = localStorage.getItem('token');
const postId = 'uuid-du-post';

await fetch(`http://localhost:3001/api/posts/${postId}/approve`, {
  method: 'PATCH',
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
```

### Ajouter un item au menu

```javascript
const token = localStorage.getItem('token');

const formData = new FormData();
formData.append('categoryId', 'uuid-categorie-sandwiches');
formData.append('name', 'Nouveau Kebab');
formData.append('description', 'Un kebab innovant');
formData.append('badge', '🆕 NOUVEAU');
formData.append('prices', JSON.stringify([
  { label: 'Seul', price: 7 },
  { label: 'Menu', price: 9 }
]));
formData.append('popular', 'true');
formData.append('image', fileInput.files[0]);

const response = await fetch('http://localhost:3001/api/menu/items', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`
  },
  body: formData
});
```

### Modifier la disponibilité d'un item

```javascript
const token = localStorage.getItem('token');
const itemId = 'uuid-item';

await fetch(`http://localhost:3001/api/menu/items/${itemId}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  },
  body: JSON.stringify({
    available: false // Marquer comme indisponible
  })
});
```

## 🔄 Gestion des Erreurs

### Exemple complet avec gestion d'erreurs

```javascript
async function getPosts() {
  try {
    const response = await fetch('http://localhost:3001/api/posts');
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Erreur lors de la récupération');
    }
    
    const { data: posts } = await response.json();
    return posts;
    
  } catch (error) {
    console.error('Erreur:', error.message);
    // Afficher un message à l'utilisateur
    throw error;
  }
}
```

### Gestion du token expiré

```javascript
async function fetchWithAuth(url, options = {}) {
  const token = localStorage.getItem('token');
  
  const response = await fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`
    }
  });
  
  if (response.status === 403) {
    // Token expiré ou invalide
    localStorage.removeItem('token');
    window.location.href = '/login';
    throw new Error('Session expirée');
  }
  
  return response;
}
```

## 🎨 Hooks React Personnalisés

### useAuth Hook

```javascript
import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    fetch('http://localhost:3001/api/auth/me', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.ok ? res.json() : Promise.reject())
      .then(data => setUser(data.user))
      .catch(() => {
        localStorage.removeItem('token');
        setUser(null);
      })
      .finally(() => setLoading(false));
  }, []);

  const login = async (email, password) => {
    const res = await fetch('http://localhost:3001/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    localStorage.setItem('token', data.token);
    setUser(data.user);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
  };

  return { user, loading, login, logout };
}
```

### usePosts Hook

```javascript
import { useState, useEffect } from 'react';

export function usePosts(page = 1, approved = true) {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3001/api/posts?page=${page}&approved=${approved}`)
      .then(res => res.json())
      .then(data => {
        setPosts(data.data);
        setPagination(data.pagination);
      })
      .finally(() => setLoading(false));
  }, [page, approved]);

  return { posts, loading, pagination };
}
```

---

**📚 Pour plus d'informations, consultez [README.md](./README.md)**

