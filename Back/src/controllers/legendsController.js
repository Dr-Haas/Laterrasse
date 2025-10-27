import { query } from '../config/database.js';

// Obtenir toutes les légendes
export const getLegends = async (req, res, next) => {
  try {
    const { category = 'all', approved = 'true', page = '1', limit = '20' } = req.query;
    
    // Convertir en nombres valides pour MySQL - FORCER les valeurs par défaut
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const safePageNum = (isNaN(pageNum) || pageNum <= 0) ? 1 : pageNum;
    const safeLimitNum = (isNaN(limitNum) || limitNum <= 0) ? 20 : limitNum;
    const offset = (safePageNum - 1) * safeLimitNum;

    let whereConditions = [];
    const params = [];

    if (approved !== 'all') {
      whereConditions.push(`approved = ?`);
      params.push(approved === 'true' ? 1 : 0);
    }

    if (category !== 'all' && ['mangeur', 'fidele', 'drole', 'ambassadeur', 'autre'].includes(category)) {
      whereConditions.push(`category = ?`);
      params.push(category);
    }

    const whereClause = whereConditions.length > 0 
      ? 'WHERE ' + whereConditions.join(' AND ')
      : '';
    
    // Ajouter limit et offset à la fin - utiliser les valeurs sécurisées
    params.push(safeLimitNum);
    params.push(offset);

    // DEBUG : Logger les paramètres avant la requête
    console.log('🔍 DEBUG getLegends - params:', params.map(p => ({ value: p, type: typeof p })));

    const result = await query(
      `SELECT 
        id, name, anecdote, category, image_url, approved, votes_count, created_at, updated_at
      FROM legends
      ${whereClause}
      ORDER BY votes_count DESC, created_at DESC
      LIMIT ? OFFSET ?`,
      params
    );

    // Compter le total
    const countParams = params.slice(0, whereConditions.length); // Seulement les conditions WHERE
    const countResult = await query(
      `SELECT COUNT(*) AS count FROM legends ${whereClause}`,
      countParams
    );

    const total = parseInt(countResult.rows[0].count);
    const hasMore = offset + result.rows.length < total;

    res.json({
      data: result.rows,
      pagination: {
        page: safePageNum,
        limit: safeLimitNum,
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
      'SELECT * FROM legends WHERE id = ?',
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
    // MySQL attend 1/0 au lieu de true/false
    const approved = (req.user && req.user.role === 'admin') ? 1 : 0;

    const result = await query(
      `INSERT INTO legends (name, anecdote, category, image_url, approved)
       VALUES (?, ?, ?, ?, ?)`,
      [name.trim(), anecdote.trim(), category, imageUrl, approved]
    );

    // MySQL: récupérer l'ID inséré
    const insertId = result.rows.insertId;
    
    // Récupérer la légende créée
    const legendResult = await query(
      'SELECT * FROM legends WHERE id = ?',
      [insertId]
    );

    res.status(201).json({
      message: 'Légende créée',
      data: legendResult.rows[0]
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

    if (name) {
      updates.push(`name = ?`);
      values.push(name.trim());
    }

    if (anecdote) {
      updates.push(`anecdote = ?`);
      values.push(anecdote.trim());
    }

    if (category) {
      if (!['mangeur', 'fidele', 'drole', 'ambassadeur', 'autre'].includes(category)) {
        return res.status(400).json({ error: 'Catégorie invalide' });
      }
      updates.push(`category = ?`);
      values.push(category);
    }

    if (updates.length === 0) {
      return res.status(400).json({ error: 'Aucune mise à jour fournie' });
    }

    values.push(id);

    await query(
      `UPDATE legends SET ${updates.join(', ')} WHERE id = ?`,
      values
    );

    // Récupérer la légende mise à jour
    const result = await query(
      'SELECT * FROM legends WHERE id = ?',
      [id]
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
      'DELETE FROM legends WHERE id = ?',
      [id]
    );

    if (result.rowCount === 0) {
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

    // MySQL attend 1 au lieu de true
    await query(
      'UPDATE legends SET approved = 1 WHERE id = ?',
      [id]
    );
    
    // Récupérer la légende approuvée
    const result = await query(
      'SELECT * FROM legends WHERE id = ?',
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

    await query(
      'UPDATE legends SET votes_count = votes_count + 1 WHERE id = ?',
      [id]
    );
    
    // Récupérer la légende mise à jour
    const result = await query(
      'SELECT * FROM legends WHERE id = ?',
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

