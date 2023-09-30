import { Router } from "express";
import {pool} from '../../db.js'

const router = Router ();

// Ejemplo de uso en una ruta de Express
router.get('/users', async (req, res) => {
    try {
        const query = 'SELECT * FROM users'; // Consulta SQL para seleccionar todos los usuarios
        const [rows] = await pool.query(query);
        res.json(rows);
    }
   catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).json({ error: 'Error al obtener los usuarios' });
  }
});

export default router;
