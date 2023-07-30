import { createServer } from 'http';
import app from './app.js';
import db from './database/index.js';
import constraints from './database/constraints.js';

const server = createServer(app);

// Primero se sincroniza la base de datos para que se creen las tablas.
// Luego se pueden alterar(constraints()).
// constraints() crea composite unique constraints

await db.sync();
// Las restricciones se pueden crear una sola vez por lo cual tal vez sea mejor agregarlas directamente a la base de datos
// await constraints();

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
