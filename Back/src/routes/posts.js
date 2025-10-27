import express from 'express';
import {
  getPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
  approvePost,
  likePost,
  unlikePost
} from '../controllers/postsController.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

/**
 * @route   GET /api/posts
 * @desc    Obtenir tous les posts
 * @access  Public
 */
router.get('/', getPosts);

/**
 * @route   GET /api/posts/:id
 * @desc    Obtenir un post par ID
 * @access  Public
 */
router.get('/:id', getPostById);

/**
 * @route   POST /api/posts
 * @desc    Créer un nouveau post
 * @access  Private
 */
router.post('/', authenticateToken, upload.single('image'), createPost);

/**
 * @route   PUT /api/posts/:id
 * @desc    Mettre à jour un post
 * @access  Private (auteur ou admin)
 */
router.put('/:id', authenticateToken, updatePost);

/**
 * @route   DELETE /api/posts/:id
 * @desc    Supprimer un post
 * @access  Private (auteur ou admin)
 */
router.delete('/:id', authenticateToken, deletePost);

/**
 * @route   PATCH /api/posts/:id/approve
 * @desc    Approuver un post
 * @access  Private (admin uniquement)
 */
router.patch('/:id/approve', authenticateToken, requireAdmin, approvePost);

/**
 * @route   POST /api/posts/:id/like
 * @desc    Liker un post
 * @access  Private
 */
router.post('/:id/like', authenticateToken, likePost);

/**
 * @route   DELETE /api/posts/:id/like
 * @desc    Unliker un post
 * @access  Private
 */
router.delete('/:id/like', authenticateToken, unlikePost);

export default router;

