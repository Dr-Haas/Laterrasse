import { query } from '../config/database.js';

// Obtenir toutes les catégories
export const getCategories = async (req, res, next) => {
  try {
    const { visible = 'true' } = req.query;

    let whereClause = '';
    const params = [];

    if (visible !== 'all') {
      whereClause = 'WHERE visible = ?';
      params.push(visible === 'true' ? 1 : 0);
    }

    const result = await query(
      `SELECT * FROM menu_categories
       ${whereClause}
       ORDER BY display_order ASC, name ASC`,
      params
    );

    res.json({ data: result.rows });
  } catch (error) {
    next(error);
  }
};

// Obtenir le menu complet (catégories + items)
export const getFullMenu = async (req, res, next) => {
  try {
    // Récupérer les catégories
    const categoriesResult = await query(
      `SELECT * FROM menu_categories
       WHERE visible = 1
       ORDER BY display_order ASC`
    );

    // Récupérer les items pour chaque catégorie
    const menuPromises = categoriesResult.rows.map(async (category) => {
      const itemsResult = await query(
        `SELECT * FROM menu_items
         WHERE category_id = ? AND available = 1
         ORDER BY display_order ASC, name ASC`,
        [category.id]
      );

      return {
        ...category,
        items: itemsResult.rows
      };
    });

    const menu = await Promise.all(menuPromises);

    res.json({ data: menu });
  } catch (error) {
    next(error);
  }
};

// Obtenir les items d'une catégorie
export const getItemsByCategory = async (req, res, next) => {
  try {
    const { categoryId } = req.params;
    const { available = 'true' } = req.query;

    let whereClause = 'WHERE category_id = ?';
    const params = [categoryId];

    if (available !== 'all') {
      whereClause += ' AND available = ?';
      params.push(available === 'true' ? 1 : 0);
    }

    const result = await query(
      `SELECT * FROM menu_items
       ${whereClause}
       ORDER BY display_order ASC, name ASC`,
      params
    );

    res.json({ data: result.rows });
  } catch (error) {
    next(error);
  }
};

// Obtenir un item par ID
export const getItemById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await query(
      `SELECT 
        mi.*,
        mc.name as category_name,
        mc.slug as category_slug
      FROM menu_items mi
      JOIN menu_categories mc ON mi.category_id = mc.id
      WHERE mi.id = ?`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item introuvable' });
    }

    res.json({ data: result.rows[0] });
  } catch (error) {
    next(error);
  }
};

// Créer une catégorie (admin)
export const createCategory = async (req, res, next) => {
  try {
    const { name, slug, description, icon, displayOrder } = req.body;

    if (!name || !slug) {
      return res.status(400).json({ error: 'Nom et slug requis' });
    }

    const result = await query(
      `INSERT INTO menu_categories (name, slug, description, icon, display_order)
       VALUES (?, ?, ?, ?, ?)
       `,
      [name, slug, description || null, icon || null, displayOrder || 0]
    );

    res.status(201).json({
      message: 'Catégorie créée',
      data: result.rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// Créer un item (admin)
export const createItem = async (req, res, next) => {
  try {
    const { categoryId, name, description, badge, prices, allergens, displayOrder, popular } = req.body;

    if (!categoryId || !name || !prices) {
      return res.status(400).json({ error: 'categoryId, name et prices requis' });
    }

    // Vérifier que prices est un array valide
    if (!Array.isArray(prices) || prices.length === 0) {
      return res.status(400).json({ error: 'prices doit être un array non vide' });
    }

    let imageUrl = null;
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    const result = await query(
      `INSERT INTO menu_items 
       (category_id, name, description, badge, prices, image_url, allergens, display_order, popular)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
       `,
      [
        categoryId,
        name,
        description || null,
        badge || null,
        JSON.stringify(prices),
        imageUrl,
        allergens || null,
        displayOrder || 0,
        popular ? 1 : 0  // MySQL attend 1/0 au lieu de true/false
      ]
    );

    res.status(201).json({
      message: 'Item créé',
      data: result.rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// Mettre à jour un item (admin)
export const updateItem = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, description, badge, prices, allergens, available, popular } = req.body;

    const updates = [];
    const values = [];
    let paramCount = 0;

    if (name) {
      paramCount++;
      updates.push(`name = $${paramCount}`);
      values.push(name);
    }

    if (description !== undefined) {
      paramCount++;
      updates.push(`description = $${paramCount}`);
      values.push(description);
    }

    if (badge !== undefined) {
      paramCount++;
      updates.push(`badge = $${paramCount}`);
      values.push(badge);
    }

    if (prices) {
      paramCount++;
      updates.push(`prices = $${paramCount}`);
      values.push(JSON.stringify(prices));
    }

    if (allergens !== undefined) {
      paramCount++;
      updates.push(`allergens = $${paramCount}`);
      values.push(allergens);
    }

    if (available !== undefined) {
      paramCount++;
      updates.push(`available = $${paramCount}`);
      values.push(available);
    }

    if (popular !== undefined) {
      paramCount++;
      updates.push(`popular = $${paramCount}`);
      values.push(popular);
    }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'Aucune mise à jour fournie' });
    }

    paramCount++;
    values.push(id);

    const result = await query(
      `UPDATE menu_items SET ${updates.join(', ')} WHERE id = $${paramCount} `,
      values
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item introuvable' });
    }

    res.json({
      message: 'Item mis à jour',
      data: result.rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// Supprimer un item (admin)
export const deleteItem = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await query(
      'DELETE FROM menu_items WHERE id = ? ',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Item introuvable' });
    }

    res.json({ message: 'Item supprimé' });
  } catch (error) {
    next(error);
  }
};

