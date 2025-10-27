import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

// Configuration de la connexion MySQL
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'laterrasse_db',
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
  // SSL pour connexion sécurisée (OVH, etc.)
  ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : false
});

// Test de connexion
pool.getConnection()
  .then(connection => {
    console.log('✅ Connecté à MySQL');
    connection.release();
  })
  .catch(err => {
    console.error('❌ Erreur de connexion MySQL:', err.message);
  });

// Fonction helper pour exécuter des requêtes
export const query = async (text, params = []) => {
  const start = Date.now();
  try {
    // Utiliser pool.query() au lieu de pool.execute() pour éviter les problèmes
    // de prepared statements avec LIMIT/OFFSET sur certaines versions MySQL
    const [rows] = await pool.query(text, params);
    const duration = Date.now() - start;
    console.log('Requête exécutée', { duration, affectedRows: rows.affectedRows || rows.length });
    return { rows: Array.isArray(rows) ? rows : [rows], rowCount: rows.affectedRows || rows.length };
  } catch (error) {
    console.error('Erreur de requête:', error.message);
    throw error;
  }
};

// Fonction pour obtenir une connexion du pool (transactions)
export const getClient = async () => {
  return await pool.getConnection();
};

export default pool;
