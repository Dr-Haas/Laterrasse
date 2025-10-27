import express from 'express';
import {
  getCategories,
  getFullMenu,
  getItemsByCategory,
  getItemById,
  createCategory,
  createItem,
  updateItem,
  deleteItem
} from '../controllers/menuController.js';
import { authenticateToken, requireAdmin } from '../middleware/auth.js';
import upload from '../middleware/upload.js';

const router = express.Router();

/**
 * @route   GET /api/menu
 * @desc    Obtenir le menu complet (catégories + items)
 * @access  Public
 */
router.get('/', getFullMenu);

/**
 * @route   GET /api/menu/categories
 * @desc    Obtenir toutes les catégories
 * @access  Public
 */
router.get('/categories', getCategories);

/**
 * @route   GET /api/menu/category/:categoryId
 * @desc    Obtenir les items d'une catégorie
 * @access  Public
 */
router.get('/category/:categoryId', getItemsByCategory);

/**
 * @route   GET /api/menu/item/:id
 * @desc    Obtenir un item par ID
 * @access  Public
 */
router.get('/item/:id', getItemById);

/**
 * @route   POST /api/menu/categories
 * @desc    Créer une nouvelle catégorie
 * @access  Private (admin uniquement)
 */
router.post('/categories', authenticateToken, requireAdmin, createCategory);

/**
 * @route   POST /api/menu/items
 * @desc    Créer un nouvel item
 * @access  Private (admin uniquement)
 */
router.post('/items', authenticateToken, requireAdmin, upload.single('image'), createItem);

/**
 * @route   PUT /api/menu/items/:id
 * @desc    Mettre à jour un item
 * @access  Private (admin uniquement)
 */
router.put('/items/:id', authenticateToken, requireAdmin, updateItem);

/**
 * @route   DELETE /api/menu/items/:id
 * @desc    Supprimer un item
 * @access  Private (admin uniquement)
 */
router.delete('/items/:id', authenticateToken, requireAdmin, deleteItem);

export default router;

