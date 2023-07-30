import { DataTypes } from 'sequelize';

export default function (db) {
  const Medico = db.define('Medico', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rut: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    direccion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Medico;
}
