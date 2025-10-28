import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Import des routes
import authRoutes from './routes/auth.js';
import postsRoutes from './routes/posts.js';
import commentsRoutes from './routes/comments.js';
import gameScoresRoutes from './routes/gameScores.js';
import legendsRoutes from './routes/legends.js';
import menuRoutes from './routes/menu.js';

// Import des middlewares
import { errorHandler, notFound } from './middleware/errorHandler.js';

// Configuration
dotenv.config();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

// ========================================
// Middlewares globaux
// ========================================

// CORS - Configuration pour accepter plusieurs origins
const allowedOrigins = [
  'http://localhost:3000', 
  'http://localhost:3434',          // Frontend local
  'https://laterrasse.dikio.fr',     // Frontend production
  'http://laterrasse.dikio.fr',
  process.env.FRONTEND_URL           // Variable d'environnement custom
].filter(Boolean); // Retire les valeurs null/undefined

app.use(cors({
  origin: (origin, callback) => {
    // Autoriser les requêtes sans origin (mobile apps, Postman, curl, etc.)
    if (!origin) return callback(null, true);
    
    // Vérifier si l'origin est dans la liste autorisée
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      console.warn(`⚠️  Origin non autorisée: ${origin}`);
      callback(new Error('Non autorisé par CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Servir les fichiers statiques (uploads)
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Logger de requêtes (en développement)
if (process.env.NODE_ENV === 'development') {
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
  });
}

// ========================================
// Routes
// ========================================

// Route de santé
app.get('/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'La Terrasse API is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV
  });
});

// Routes API
app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/game-scores', gameScoresRoutes);
app.use('/api/legends', legendsRoutes);
app.use('/api/menu', menuRoutes);

// ========================================
// Gestion des erreurs
// ========================================

// Route 404
app.use(notFound);

// Gestionnaire d'erreurs global
app.use(errorHandler);
 
// ========================================
// Démarrage du serveur
// ========================================

app.listen(PORT, () => {
  console.log('\n🚀 Serveur démarré avec succès !');
  console.log(`📍 URL: http://localhost:${PORT}`);
  console.log(`🌍 Environnement: ${process.env.NODE_ENV || 'development'}`);
  console.log(`🔗 Frontend: ${process.env.FRONTEND_URL || 'http://localhost:3000'}`);
  console.log('\n📚 Routes disponibles:');
  console.log('  - GET  /health');
  console.log('  - POST /api/auth/register');
  console.log('  - POST /api/auth/login');
  console.log('  - GET  /api/auth/me');
  console.log('  - GET  /api/posts');
  console.log('  - GET  /api/menu');
  console.log('  - GET  /api/game-scores/top');
  console.log('  - GET  /api/legends');
  console.log('\n✨ La Terrasse API est prête !\n');
});

// Gestion des erreurs non capturées
process.on('unhandledRejection', (err) => {
  console.error('❌ Erreur non gérée:', err);
  process.exit(1);
});

process.on('SIGTERM', () => {
  console.log('👋 SIGTERM reçu, arrêt du serveur...');
  process.exit(0);
});

export default app;

