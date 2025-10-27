import { query } from '../config/database.js';

// Obtenir les meilleurs scores
export const getTopScores = async (req, res, next) => {
  try {
    const { difficulty = 'all', limit = 10 } = req.query;

    let whereClause = '';
    const params = [limit];
    
    if (difficulty !== 'all' && ['easy', 'medium', 'hard'].includes(difficulty)) {
      whereClause = 'WHERE difficulty = $2';
      params.push(difficulty);
    }

    const result = await query(
      `SELECT 
        id, player_name, score, difficulty, game_duration, created_at
      FROM game_scores
      ${whereClause}
      ORDER BY score DESC, created_at DESC
      LIMIT $1`,
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
    const { page = 1, limit = 20, difficulty = 'all' } = req.query;
    const offset = (page - 1) * limit;

    let whereClause = '';
    const params = [limit, offset];
    
    if (difficulty !== 'all' && ['easy', 'medium', 'hard'].includes(difficulty)) {
      whereClause = 'WHERE difficulty = $3';
      params.push(difficulty);
    }

    const result = await query(
      `SELECT 
        id, player_name, score, difficulty, game_duration, created_at
      FROM game_scores
      ${whereClause}
      ORDER BY score DESC, created_at DESC
      LIMIT $1 OFFSET $2`,
      params
    );

    // Compter le total
    const countParams = difficulty !== 'all' ? [difficulty] : [];
    const countResult = await query(
      `SELECT COUNT(*) FROM game_scores ${whereClause}`,
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

// Créer un nouveau score
export const createScore = async (req, res, next) => {
  try {
    const { playerName, score, difficulty, gameDuration } = req.body;

    // Validation
    if (!playerName || playerName.trim().length === 0) {
      return res.status(400).json({ error: 'Le nom du joueur est requis' });
    }

    if (typeof score !== 'number' || score < 0) {
      return res.status(400).json({ error: 'Score invalide' });
    }

    if (!['easy', 'medium', 'hard'].includes(difficulty)) {
      return res.status(400).json({ error: 'Difficulté invalide' });
    }

    const result = await query(
      `INSERT INTO game_scores (player_name, score, difficulty, game_duration)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [playerName.trim(), score, difficulty, gameDuration || null]
    );

    res.status(201).json({ 
      message: 'Score enregistré',
      data: result.rows[0] 
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
        AVG(score)::INTEGER as average_score,
        difficulty,
        COUNT(*) FILTER (WHERE difficulty = 'easy') as easy_games,
        COUNT(*) FILTER (WHERE difficulty = 'medium') as medium_games,
        COUNT(*) FILTER (WHERE difficulty = 'hard') as hard_games
      FROM game_scores
      GROUP BY difficulty
      ORDER BY difficulty`
    );

    // Statistiques globales
    const globalResult = await query(
      `SELECT 
        COUNT(*) as total_games,
        MAX(score) as highest_score,
        AVG(score)::INTEGER as average_score,
        AVG(game_duration)::INTEGER as average_duration
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

