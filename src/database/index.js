import { Sequelize } from 'sequelize';
import { config } from 'dotenv';
import paciente from './paciente.sequelize.js';
import medico from './medico.sequelize.js';
import especialidad from './especialidad.sequelize.js';
import consulta from './consulta.sequelize.js';
import licencia from './licencia.sequelize.js';

config();

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_DATABASE } = process.env;

const db = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql',
  pool: {
    max: 151, // 151 max_connections by default in MySQL
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: { freezeTableName: true },
});

// tablas
db.Especialidad = especialidad(db);
db.Medico = medico(db);
db.Consulta = consulta(db);
db.Paciente = paciente(db);
db.Licencia = licencia(db);

// One to many (Especialidad-Medico)
// foreign key EspecialidadId references Especialidad(id)
db.Especialidad.hasMany(db.Medico, {
  foreignKey: {
    allowNull: false,
  },
});
db.Medico.belongsTo(db.Especialidad);

// One to many (Medico-Consulta)
// foreign key MedicoId references Medico(id)
db.Medico.hasMany(db.Consulta, {
  foreignKey: {
    allowNull: false,
  },
});
db.Consulta.belongsTo(db.Medico);

// One to many (Paciente-Consulta)
// foreign key PacienteId references Paciente(id)
db.Paciente.hasMany(db.Consulta, {
  foreignKey: {
    allowNull: false,
  },
});
db.Consulta.belongsTo(db.Paciente);

// One to many (Medico-Licencia)
// foreign key MedicoId references Medico(id)
db.Medico.hasMany(db.Licencia, {
  foreignKey: {
    allowNull: false,
  },
});
db.Licencia.belongsTo(db.Medico);

// One to many (Paciente-Licencia)
// foreign key PacienteId references Paciente(id)
db.Paciente.hasMany(db.Licencia, {
  foreignKey: {
    allowNull: false,
  },
});
db.Licencia.belongsTo(db.Paciente);

export default db;
