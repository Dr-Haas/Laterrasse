import { query } from '../config/database.js';

// Obtenir les commentaires d'un post
export const getComments = async (req, res, next) => {
  try {
    const { postId } = req.params;
    const { page = 1, limit = 50 } = req.query;
    const offset = (page - 1) * limit;

    const result = await query(
      `SELECT 
        c.id, c.content, c.created_at, c.updated_at,
        u.id as user_id, u.username, u.email, u.avatar_url
      FROM comments c
      JOIN users u ON c.user_id = u.id
      WHERE c.post_id = $1
      ORDER BY c.created_at ASC
      LIMIT $2 OFFSET $3`,
      [postId, limit, offset]
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
    const postCheck = await query('SELECT id FROM posts WHERE id = $1', [postId]);
    if (postCheck.rows.length === 0) {
      return res.status(404).json({ error: 'Post introuvable' });
    }

    const result = await query(
      `INSERT INTO comments (user_id, post_id, content)
       VALUES ($1, $2, $3)
       RETURNING *`,
      [userId, postId, content]
    );

    const comment = result.rows[0];

    // Récupérer les infos utilisateur
    const userResult = await query(
      'SELECT id, username, email, avatar_url FROM users WHERE id = $1',
      [userId]
    );

    res.status(201).json({
      data: {
        ...comment,
        user: userResult.rows[0]
      }
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
      'SELECT user_id FROM comments WHERE id = $1',
      [id]
    );

    if (checkResult.rows.length === 0) {
      return res.status(404).json({ error: 'Commentaire introuvable' });
    }

    if (checkResult.rows[0].user_id !== req.user.id && req.user.role !== 'admin') {
      return res.status(403).json({ error: 'Non autorisé' });
    }

    await query('DELETE FROM comments WHERE id = $1', [id]);

    res.json({ message: 'Commentaire supprimé' });
  } catch (error) {
    next(error);
  }
};

