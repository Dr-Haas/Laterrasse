import { query } from '../config/database.js';

// Obtenir les meilleurs scores
export const getTopScores = async (req, res, next) => {
  try {
    const { difficulty = 'all', limit = '10' } = req.query;

    let whereClause = '';
    const params = [];
    
    if (difficulty !== 'all' && ['easy', 'medium', 'hard'].includes(difficulty)) {
      whereClause = 'WHERE difficulty = ?';
      params.push(difficulty);
    }
    
    // MySQL2 veut un nombre valide, pas NaN - FORCER la valeur par défaut
    const limitNum = parseInt(limit, 10);
    const safeLimitNum = (isNaN(limitNum) || limitNum <= 0) ? 10 : limitNum;
    params.push(safeLimitNum);

    const result = await query(
      `SELECT 
        id, player_name, score, difficulty, game_duration, created_at
      FROM game_scores
      ${whereClause}
      ORDER BY score DESC, created_at DESC
      LIMIT ?`,
      params
    );

    res.json({ data: result.rows });
  } catch (error) {
    next(error);
  }
};

// Obtenir tous les scores avec pagination
export const getAllScores = async (req, res, next) => {
  try {
    const { page = '1', limit = '20', difficulty = 'all' } = req.query;
    
    // Convertir en nombres valides pour MySQL - FORCER les valeurs par défaut
    const pageNum = parseInt(page, 10);
    const limitNum = parseInt(limit, 10);
    const safePageNum = (isNaN(pageNum) || pageNum <= 0) ? 1 : pageNum;
    const safeLimitNum = (isNaN(limitNum) || limitNum <= 0) ? 20 : limitNum;
    const offset = (safePageNum - 1) * safeLimitNum;

    let whereClause = '';
    const params = [];
    
    if (difficulty !== 'all' && ['easy', 'medium', 'hard'].includes(difficulty)) {
      whereClause = 'WHERE difficulty = ?';
      params.push(difficulty);
    }
    
    // MySQL2 veut des nombres valides - utiliser les valeurs sécurisées
    params.push(safeLimitNum);
    params.push(offset);

    const result = await query(
      `SELECT 
        id, player_name, score, difficulty, game_duration, created_at
      FROM game_scores
      ${whereClause}
      ORDER BY score DESC, created_at DESC
      LIMIT ? OFFSET ?`,
      params
    );

    // Compter le total
    const countParams = difficulty !== 'all' ? [difficulty] : [];
    const countResult = await query(
      `SELECT COUNT(*) AS count FROM game_scores ${whereClause}`,
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

// Créer un nouveau score
export const createScore = async (req, res, next) => {
  try {
    const { playerName, playerEmail, score, difficulty, gameDuration } = req.body;

    // Validation
    if (!playerName || playerName.trim().length === 0) {
      return res.status(400).json({ error: 'Le nom du joueur est requis' });
    }

    if (playerEmail && (!playerEmail.includes('@') || playerEmail.length < 3)) {
      return res.status(400).json({ error: 'Email invalide' });
    }

    if (typeof score !== 'number' || score < 0) {
      return res.status(400).json({ error: 'Score invalide' });
    }

    if (!['easy', 'medium', 'hard'].includes(difficulty)) {
      return res.status(400).json({ error: 'Difficulté invalide' });
    }

    const result = await query(
      `INSERT INTO game_scores (player_name, player_email, score, difficulty, game_duration)
       VALUES (?, ?, ?, ?, ?)`,
      [playerName.trim(), playerEmail?.trim() || null, score, difficulty, gameDuration || null]
    );

    res.status(201).json({ 
      message: 'Score enregistré',
      data: {
        id: result.rows.insertId,
        playerName: playerName.trim(),
        playerEmail: playerEmail?.trim() || null,
        score,
        difficulty,
        gameDuration: gameDuration || null
      }
    });
  } catch (error) {
    next(error);
  }
};

// Obtenir les statistiques
export const getStats = async (req, res, next) => {
  try {
    const result = await query(
      `SELECT 
        COUNT(*) as total_games,
        MAX(score) as highest_score,
        CAST(AVG(score) AS SIGNED) as average_score,
        difficulty,
        SUM(CASE WHEN difficulty = 'easy' THEN 1 ELSE 0 END) as easy_games,
        SUM(CASE WHEN difficulty = 'medium' THEN 1 ELSE 0 END) as medium_games,
        SUM(CASE WHEN difficulty = 'hard' THEN 1 ELSE 0 END) as hard_games
      FROM game_scores
      GROUP BY difficulty
      ORDER BY difficulty`
    );

    // Statistiques globales
    const globalResult = await query(
      `SELECT 
        COUNT(*) as total_games,
        MAX(score) as highest_score,
        CAST(AVG(score) AS SIGNED) as average_score,
        CAST(AVG(game_duration) AS SIGNED) as average_duration
      FROM game_scores`
    );

    res.json({
      global: globalResult.rows[0],
      byDifficulty: result.rows
    });
  } catch (error) {
    next(error);
  }
};

