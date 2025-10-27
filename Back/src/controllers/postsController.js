import { query } from '../config/database.js';

// Obtenir tous les posts (galerie)
export const getPosts = async (req, res, next) => {
  try {
    const { page = '1', limit = '20', approved = 'true' } = req.query;
    
    // Convertir en nombres valides pour MySQL
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const offset = (isNaN(pageNum) ? 1 : pageNum - 1) * (isNaN(limitNum) ? 20 : limitNum);

    let whereClause = '';
    const params = [];
    
    if (approved !== 'all') {
      whereClause = 'WHERE p.approved = ?';
      // MySQL attend 1/0 plutôt qu'un booléen JavaScript
      params.push(approved === 'true' ? 1 : 0);
    }
    
    // Ajouter limit et offset À LA FIN (MySQL2 veut des nombres valides)
    params.push(isNaN(limitNum) ? 20 : limitNum);
    params.push(isNaN(offset) ? 0 : offset);

    const result = await query(
      `SELECT 
        p.id, p.message, p.image_url, p.likes_count, p.comments_count, 
        p.approved, p.created_at, p.updated_at,
        u.id as user_id, u.username, u.email, u.avatar_url
      FROM posts p
      JOIN users u ON p.user_id = u.id
      ${whereClause}
      ORDER BY p.created_at DESC
      LIMIT ? OFFSET ?`,
      params
    );

    // Compter le total
    const countResult = await query(
      `SELECT COUNT(*) AS count FROM posts p ${whereClause}`,
      approved !== 'all' ? [approved === 'true' ? 1 : 0] : []
    );

    const total = parseInt(countResult.rows[0].count);
    const hasMore = offset + result.rows.length < total;

    res.json({
      data: result.rows,
      pagination: {
        page: isNaN(pageNum) ? 1 : pageNum,
        limit: isNaN(limitNum) ? 20 : limitNum,
        total,
        hasMore
      }
    });
  } catch (error) {
    next(error);
  }
};

// Obtenir un post par ID
export const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await query(
      `SELECT 
        p.id, p.message, p.image_url, p.likes_count, p.comments_count,
        p.approved, p.created_at, p.updated_at,
        u.id as user_id, u.username, u.email, u.avatar_url
      FROM posts p
      JOIN users u ON p.user_id = u.id
      WHERE p.id = ?`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post introuvable' });
    }

    res.json({ data: result.rows[0] });
  } catch (error) {
    next(error);
  }
};

// Créer un post
export const createPost = async (req, res, next) => {
  try {
    const { message } = req.body;
    const userId = req.user.id;

    if (!message || message.trim().length === 0) {
      return res.status(400).json({ error: 'Le message est requis' });
    }

    let imageUrl = null;
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    // MySQL attend 1/0 au lieu de true/false
    const approved = req.user.role === 'admin' ? 1 : 0;

    const result = await query(
      `INSERT INTO posts (user_id, message, image_url, approved)
       VALUES (?, ?, ?, ?)`,
      [userId, message, imageUrl, approved]
    );

    // MySQL : récupérer le post créé avec l'insertId
    const insertId = result.rows.insertId;
    const postResult = await query(
      `SELECT 
        p.id, p.message, p.image_url, p.likes_count, p.comments_count, 
        p.approved, p.created_at, p.updated_at,
        u.id as user_id, u.username, u.email, u.avatar_url
      FROM posts p
      JOIN users u ON p.user_id = u.id
      WHERE p.id = ?`,
      [insertId]
    );

    res.status(201).json({
      data: postResult.rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// Mettre à jour un post
export const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { message } = req.body;

    // Vérifier que le post appartient à l'utilisateur ou qu'il est admin
    const checkResult = await query(
      'SELECT user_id FROM posts WHERE id = ?',
      [id]
    );

    if (checkResult.rows.length === 0) {
      return res.status(404).json({ error: 'Post introuvable' });
    }

    if (checkResult.rows[0].user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Non autorisé' });
    }

    const result = await query(
      'UPDATE posts SET message = ? WHERE id = ? ',
      [message, id]
    );

    res.json({ data: result.rows[0] });
  } catch (error) {
    next(error);
  }
};

// Supprimer un post
export const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Vérifier les permissions
    const checkResult = await query(
      'SELECT user_id FROM posts WHERE id = ?',
      [id]
    );

    if (checkResult.rows.length === 0) {
      return res.status(404).json({ error: 'Post introuvable' });
    }

    if (checkResult.rows[0].user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Non autorisé' });
    }

    await query('DELETE FROM posts WHERE id = ?', [id]);

    res.json({ message: 'Post supprimé avec succès' });
  } catch (error) {
    next(error);
  }
};

// Approuver un post (admin uniquement)
export const approvePost = async (req, res, next) => {
  try {
    const { id } = req.params;

    // MySQL attend 1 au lieu de true
    const result = await query(
      'UPDATE posts SET approved = 1 WHERE id = ? ',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Post introuvable' });
    }

    res.json({ 
      message: 'Post approuvé',
      data: result.rows[0] 
    });
  } catch (error) {
    next(error);
  }
};

// Liker un post
export const likePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    // Vérifier si le post existe
    const postCheck = await query('SELECT id FROM posts WHERE id = ?', [id]);
    if (postCheck.rows.length === 0) {
      return res.status(404).json({ error: 'Post introuvable' });
    }

    // Vérifier si déjà liké
    const likeCheck = await query(
      'SELECT id FROM likes WHERE user_id = ? AND post_id = ?',
      [userId, id]
    );

    if (likeCheck.rows.length > 0) {
      return res.status(409).json({ error: 'Déjà liké' });
    }

    // Créer le like
    await query(
      'INSERT INTO likes (user_id, post_id) VALUES (?, ?)',
      [userId, id]
    );

    res.status(201).json({ message: 'Like ajouté' });
  } catch (error) {
    next(error);
  }
};

// Unliker un post
export const unlikePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.user.id;

    const result = await query(
      'DELETE FROM likes WHERE user_id = ? AND post_id = ? ',
      [userId, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Like introuvable' });
    }

    res.json({ message: 'Like supprimé' });
  } catch (error) {
    next(error);
  }
};

