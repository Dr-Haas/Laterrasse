export const errorHandler = (err, req, res, next) => {
  console.error('❌ Erreur:', err);

  // Erreur Multer (upload)
  if (err.name === 'MulterError') {
    if (err.code === 'LIMIT_FILE_SIZE') {
      return res.status(400).json({ 
        error: 'Fichier trop volumineux',
        message: 'La taille maximale est de 5MB'
      });
    }
    return res.status(400).json({ error: err.message });
  }

  // Erreur de validation
  if (err.name === 'ValidationError') {
    return res.status(400).json({ 
      error: 'Erreur de validation',
      details: err.details 
    });
  }

  // Erreur PostgreSQL
  if (err.code && err.code.startsWith('23')) {
    if (err.code === '23505') { // Violation de contrainte unique
      return res.status(409).json({ 
        error: 'Conflit',
        message: 'Cette ressource existe déjà'
      });
    }
    if (err.code === '23503') { // Violation de clé étrangère
      return res.status(400).json({ 
        error: 'Référence invalide',
        message: 'La ressource référencée n\'existe pas'
      });
    }
  }

  // Erreur par défaut
  res.status(err.status || 500).json({
    error: err.message || 'Erreur serveur interne',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
};

export const notFound = (req, res, next) => {
  res.status(404).json({ 
    error: 'Route introuvable',
    path: req.originalUrl 
  });
};

