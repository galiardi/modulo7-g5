import { DataTypes } from 'sequelize';

export default function (db) {
  const Paciente = db.define('Paciente', {
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

  return Paciente;
}
