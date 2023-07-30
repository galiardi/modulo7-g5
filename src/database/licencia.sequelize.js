import { DataTypes } from 'sequelize';

export default function (db) {
  const Licencia = db.define('Licencia', {
    diagnostico: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_inicio: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    fecha_termino: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  });

  return Licencia;
}
