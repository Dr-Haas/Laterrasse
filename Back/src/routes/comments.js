import express from 'express';
import { getComments, createComment, deleteComment } from '../controllers/commentsController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

/**
 * @route   GET /api/comments/:postId
 * @desc    Obtenir les commentaires d'un post
 * @access  Public
 */
router.get('/:postId', getComments);

/**
 * @route   POST /api/comments/:postId
 * @desc    Créer un commentaire sur un post
 * @access  Private
 */
router.post('/:postId', authenticateToken, createComment);

/**
 * @route   DELETE /api/comments/:id
 * @desc    Supprimer un commentaire
 * @access  Private (auteur ou admin)
 */
router.delete('/:id', authenticateToken, deleteComment);

export default router;

