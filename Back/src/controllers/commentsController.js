import { query } from '../config/database.js';

// Obtenir les commentaires d'un post
export const getComments = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { page = '1', limit = '50' } = req.query;
    
    // Convertir en nombres valides pour MySQL
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const offset = (isNaN(pageNum) ? 1 : pageNum - 1) * (isNaN(limitNum) ? 50 : limitNum);

    const result = await query(
      `SELECT 
        c.id, c.content, c.created_at, c.updated_at,
        u.id as user_id, u.username, u.email, u.avatar_url
      FROM comments c
      JOIN users u ON c.user_id = u.id
      WHERE c.post_id = ?
      ORDER BY c.created_at ASC
      LIMIT ? OFFSET ?`,
      [postId, isNaN(limitNum) ? 50 : limitNum, isNaN(offset) ? 0 : offset]
    );

    res.json({ data: result.rows });
  } catch (error) {
    next(error);
  }
};

// Créer un commentaire
export const createComment = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { content } = req.body;
    const userId = req.user.id;

    if (!content || content.trim().length === 0) {
      return res.status(400).json({ error: 'Le contenu est requis' });
    }

    // Vérifier que le post existe
    const postCheck = await query('SELECT id FROM posts WHERE id = ?', [postId]);
    if (postCheck.rows.length === 0) {
      return res.status(404).json({ error: 'Post introuvable' });
    }

    const result = await query(
      `INSERT INTO comments (user_id, post_id, content)
       VALUES (?, ?, ?)`,
      [userId, postId, content]
    );

    // MySQL : récupérer le commentaire créé avec l'insertId
    const insertId = result.rows.insertId;
    const commentResult = await query(
      `SELECT 
        c.id, c.content, c.created_at, c.updated_at,
        u.id as user_id, u.username, u.email, u.avatar_url
      FROM comments c
      JOIN users u ON c.user_id = u.id
      WHERE c.id = ?`,
      [insertId]
    );

    res.status(201).json({
      data: commentResult.rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// Supprimer un commentaire
export const deleteComment = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Vérifier les permissions
    const checkResult = await query(
      'SELECT user_id FROM comments WHERE id = ?',
      [id]
    );

    if (checkResult.rows.length === 0) {
      return res.status(404).json({ error: 'Commentaire introuvable' });
    }

    if (checkResult.rows[0].user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Non autorisé' });
    }

    await query('DELETE FROM comments WHERE id = ?', [id]);

    res.json({ message: 'Commentaire supprimé' });
  } catch (error) {
    next(error);
  }
};

