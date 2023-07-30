import db from '../database/index.js';

class Paciente {
  constructor({ nombre, rut, direccion }) {
    this.nombre = nombre;
    this.rut = rut;
    this.direccion = direccion;
  }

  async crear() {
    try {
      const result = await db.Paciente.create(this);
      return result;
    } catch (error) {
      console.log(error);
      if (error.name === 'SequelizeUniqueConstraintError') return error.name;
      return false;
    }
  }

  static async obtener(id) {
    try {
      const result = await db.Paciente.findByPk(id);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static async obtenerTodos() {
    try {
      const result = await db.Paciente.findAll();
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async actualizar(id) {
    try {
      const result = await db.Paciente.update(this, {
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
      const result = await db.Paciente.destroy({
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
export { Paciente };
