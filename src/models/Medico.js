import db from '../database/index.js';

class Medico {
  constructor({ nombre, rut, direccion, EspecialidadId }) {
    this.nombre = nombre;
    this.rut = rut;
    this.direccion = direccion;
    this.EspecialidadId = EspecialidadId;
  }

  async crear() {
    try {
      const result = await db.Medico.create(this);
      return result;
    } catch (error) {
      console.log(error);
      if (error.name === 'SequelizeUniqueConstraintError') return error.name;
      return false;
    }
  }

  static async obtener(id) {
    try {
      const result = await db.Medico.findByPk(id);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static async obtenerTodos() {
    try {
      const result = await db.Medico.findAll();
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async actualizar(id) {
    try {
      const result = await db.Medico.update(this, {
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
      const result = await db.Medico.destroy({
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
export { Medico };
