import db from '../database/index.js';

class Especialidad {
  constructor({ codigo, descripcion }) {
    this.codigo = codigo;
    this.descripcion = descripcion;
  }

  async crear() {
    try {
      const result = await db.Especialidad.create(this);
      return result;
    } catch (error) {
      console.log(error);
      if (error.name === 'SequelizeUniqueConstraintError') return error.name;
      return false;
    }
  }

  static async obtener(id) {
    try {
      const result = await db.Especialidad.findByPk(id);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static async obtenerTodos() {
    try {
      const result = await db.Especialidad.findAll();
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async actualizar(id) {
    try {
      const result = await db.Especialidad.update(this, {
        where: { id: id },
      });
      return result[0];
    } catch (error) {
      console.log(error);
      return result;
    }
  }

  static async borrar(id) {
    try {
      const result = await db.Especialidad.destroy({
        where: { id: id },
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
export { Especialidad };
