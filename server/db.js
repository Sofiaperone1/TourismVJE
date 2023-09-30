import {createPool} from 'mysql2/promise'


export const pool = createPool({
  host: 'localhost',      // Dirección del servidor MySQL
  user: 'sofiaperone1',     // Nombre de usuario de MySQL
  password: 'sofiaperone1', // Contraseña de MySQL
  database: 'teddy' // Nombre de la base de datos
});

