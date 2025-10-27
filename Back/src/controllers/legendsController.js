import { query } from '../config/database.js';

// Obtenir toutes les légendes
export const getLegends = async (req, res, next) => {
  try {
    const { category = 'all', approved = 'true', page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;

    let whereConditions = [];
    const params = [limit, offset];
    let paramCount = 2;

    if (approved !== 'all') {
      paramCount++;
      whereConditions.push(`approved = $${paramCount}`);
      params.push(approved === 'true');
    }

    if (category !== 'all' && ['mangeur', 'fidele', 'drole', 'ambassadeur', 'autre'].includes(category)) {
      paramCount++;
      whereConditions.push(`category = $${paramCount}`);
      params.push(category);
    }

    const whereClause = whereConditions.length > 0 
      ? 'WHERE ' + whereConditions.join(' AND ')
      : '';

    const result = await query(
      `SELECT 
        id, name, anecdote, category, image_url, approved, votes_count, created_at, updated_at
      FROM legends
      ${whereClause}
      ORDER BY votes_count DESC, created_at DESC
      LIMIT $1 OFFSET $2`,
      params
    );

    // Compter le total
    const countParams = params.slice(2);
    const countResult = await query(
      `SELECT COUNT(*) FROM legends ${whereClause}`,
      countParams
    );

    const total = parseInt(countResult.rows[0].count);
    const hasMore = offset + result.rows.length < total;

    res.json({
      data: result.rows,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total,
        hasMore
      }
    });
  } catch (error) {
    next(error);
  }
};

// Obtenir une légende par ID
export const getLegendById = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await query(
      'SELECT * FROM legends WHERE id = $1',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Légende introuvable' });
    }

    res.json({ data: result.rows[0] });
  } catch (error) {
    next(error);
  }
};

// Créer une légende
export const createLegend = async (req, res, next) => {
  try {
    const { name, anecdote, category } = req.body;

    // Validation
    if (!name || name.trim().length === 0) {
      return res.status(400).json({ error: 'Le nom est requis' });
    }

    if (!anecdote || anecdote.trim().length === 0) {
      return res.status(400).json({ error: 'L\'anecdote est requise' });
    }

    if (!['mangeur', 'fidele', 'drole', 'ambassadeur', 'autre'].includes(category)) {
      return res.status(400).json({ error: 'Catégorie invalide' });
    }

    let imageUrl = null;
    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    // Les admins peuvent créer des légendes déjà approuvées
    const approved = req.user && req.user.role === 'admin';

    const result = await query(
      `INSERT INTO legends (name, anecdote, category, image_url, approved)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name.trim(), anecdote.trim(), category, imageUrl, approved]
    );

    res.status(201).json({
      message: 'Légende créée',
      data: result.rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// Mettre à jour une légende
export const updateLegend = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { name, anecdote, category } = req.body;

    const updates = [];
    const values = [];
    let paramCount = 0;

    if (name) {
      paramCount++;
      updates.push(`name = $${paramCount}`);
      values.push(name.trim());
    }

    if (anecdote) {
      paramCount++;
      updates.push(`anecdote = $${paramCount}`);
      values.push(anecdote.trim());
    }

    if (category) {
      if (!['mangeur', 'fidele', 'drole', 'ambassadeur', 'autre'].includes(category)) {
        return res.status(400).json({ error: 'Catégorie invalide' });
      }
      paramCount++;
      updates.push(`category = $${paramCount}`);
      values.push(category);
    }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'Aucune mise à jour fournie' });
    }

    paramCount++;
    values.push(id);

    const result = await query(
      `UPDATE legends SET ${updates.join(', ')} WHERE id = $${paramCount} RETURNING *`,
      values
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Légende introuvable' });
    }

    res.json({
      message: 'Légende mise à jour',
      data: result.rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// Supprimer une légende
export const deleteLegend = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await query(
      'DELETE FROM legends WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Légende introuvable' });
    }

    res.json({ message: 'Légende supprimée' });
  } catch (error) {
    next(error);
  }
};

// Approuver une légende (admin)
export const approveLegend = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await query(
      'UPDATE legends SET approved = true WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Légende introuvable' });
    }

    res.json({
      message: 'Légende approuvée',
      data: result.rows[0]
    });
  } catch (error) {
    next(error);
  }
};

// Voter pour une légende
export const voteLegend = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await query(
      'UPDATE legends SET votes_count = votes_count + 1 WHERE id = $1 RETURNING *',
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Légende introuvable' });
    }

    res.json({
      message: 'Vote enregistré',
      data: result.rows[0]
    });
  } catch (error) {
    next(error);
  }
};

