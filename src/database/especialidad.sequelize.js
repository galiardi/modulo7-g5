import { DataTypes } from 'sequelize';

export default function (db) {
  const Especialidad = db.define('Especialidad', {
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return Especialidad;
}
