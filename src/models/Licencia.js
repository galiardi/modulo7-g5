import db from '../database/index.js';

class Licencia {
  constructor({ diagnostico, fecha_inicio, fecha_termino, MedicoId, PacienteId }) {
    this.diagnostico = diagnostico;
    this.fecha_inicio = fecha_inicio;
    this.fecha_termino = fecha_termino;
    this.MedicoId = MedicoId;
    this.PacienteId = PacienteId;
  }

  async crear() {
    try {
      const result = await db.Licencia.create(this);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static async obtener(id) {
    try {
      const result = await db.Licencia.findByPk(id);
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  static async obtenerTodos() {
    try {
      const result = await db.Licencia.findAll();
      return result;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async actualizar(id) {
    try {
      const result = await db.Licencia.update(this, {
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
      const result = await db.Licencia.destroy({
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
export { Licencia };
