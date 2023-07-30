import db from '../database/index.js';

class Consulta {
  constructor({ fecha, hora, numero_box, MedicoId, PacienteId }) {
    this.fecha = fecha;
    this.hora = hora;
    this.numero_box = numero_box;
    this.MedicoId = MedicoId;
    this.PacienteId = PacienteId;
  }

  async crear() {
    try {
      const result = await db.Consulta.create(this);
      return result;
    } catch (error) {
      console.log(error);
      if (error.name === 'SequelizeUniqueConstraintError') return error;

      return false;
    }
  }

  static async obtener(id) {
    try {
      const result = await db.Consulta.findByPk(id);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static async obtenerTodos() {
    try {
      const result = await db.Consulta.findAll();
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async actualizar(id) {
    try {
      const result = await db.Consulta.update(this, {
        where: { id: id },
      });
      return result[0];
    } catch (error) {
      console.log(error);
      if (error.name === 'SequelizeUniqueConstraintError') return error;
      return result;
    }
  }

  static async borrar(id) {
    try {
      const result = await db.Consulta.destroy({
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
export { Consulta };
