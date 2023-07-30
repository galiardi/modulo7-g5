import { DataTypes } from 'sequelize';

export default function (db) {
  const Consulta = db.define('Consulta', {
    // no es necesario crear id, porque se crean automaticamente
    /*
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    */
    fecha: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    hora: {
      type: DataTypes.TIME,
      allowNull: false,
    },
    numero_box: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });

  return Consulta;
}
