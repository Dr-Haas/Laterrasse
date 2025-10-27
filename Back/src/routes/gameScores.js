import express from 'express';
import {
  getTopScores,
  getAllScores,
  createScore,
  getStats
} from '../controllers/gameScoresController.js';

const router = express.Router();

/**
 * @route   GET /api/game-scores/top
 * @desc    Obtenir les meilleurs scores
 * @access  Public
 */
router.get('/top', getTopScores);

/**
 * @route   GET /api/game-scores/stats
 * @desc    Obtenir les statistiques du jeu
 * @access  Public
 */
router.get('/stats', getStats);

/**
 * @route   GET /api/game-scores
 * @desc    Obtenir tous les scores avec pagination
 * @access  Public
 */
router.get('/', getAllScores);

/**
 * @route   POST /api/game-scores
 * @desc    Enregistrer un nouveau score
 * @access  Public
 */
router.post('/', createScore);

export default router;

