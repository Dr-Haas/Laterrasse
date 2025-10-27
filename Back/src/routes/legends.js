import express from 'express';
import {
  getLegends,
  getLegendById,
  createLegend,
  updateLegend,
  deleteLegend,
  approveLegend,
  voteLegend
} from '../controllers/legendsController.js';
import { authenticateToken, requireAdmin, optionalAuth } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

/**
 * @route   GET /api/legends
 * @desc    Obtenir toutes les légendes
 * @access  Public
 */
router.get('/', getLegends);

/**
 * @route   GET /api/legends/:id
 * @desc    Obtenir une légende par ID
 * @access  Public
 */
router.get('/:id', getLegendById);

/**
 * @route   POST /api/legends
 * @desc    Créer une nouvelle légende
 * @access  Public (avec approbation automatique si admin)
 */
router.post('/', optionalAuth, upload.single('image'), createLegend);

/**
 * @route   PUT /api/legends/:id
 * @desc    Mettre à jour une légende
 * @access  Private (admin uniquement)
 */
router.put('/:id', authenticateToken, requireAdmin, updateLegend);

/**
 * @route   DELETE /api/legends/:id
 * @desc    Supprimer une légende
 * @access  Private (admin uniquement)
 */
router.delete('/:id', authenticateToken, requireAdmin, deleteLegend);

/**
 * @route   PATCH /api/legends/:id/approve
 * @desc    Approuver une légende
 * @access  Private (admin uniquement)
 */
router.patch('/:id/approve', authenticateToken, requireAdmin, approveLegend);

/**
 * @route   POST /api/legends/:id/vote
 * @desc    Voter pour une légende
 * @access  Public
 */
router.post('/:id/vote', voteLegend);

export default router;

