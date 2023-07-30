import { Licencia } from '../models/Licencia.js';

async function crearLicencia(req, res) {
  const response = {
    message: 'Crear Licencia',
    data: null,
    error: null,
  };

  const { diagnostico, fecha_inicio, fecha_termino, MedicoId, PacienteId } = req.body;

  if (!diagnostico || !fecha_inicio || !fecha_termino || !MedicoId || !PacienteId) {
    response.error = 'Faltan parámetros';
    return res.status(400).send(response);
  }

  const licencia = new Licencia(req.body);
  const result = await licencia.crear();

  if (result === false) {
    response.error = 'Error al crear Licencia';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(201).send(response);
}

async function obtenerLicencia(req, res) {
  const response = {
    message: 'Obtener Licencia',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await Licencia.obtener(id);

  if (result === false) {
    response.error = 'Error al obtener Licencia';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function obtenerTodos(req, res) {
  const response = {
    message: 'Obtener Licencias',
    data: null,
    error: null,
  };

  const result = await Licencia.obtenerTodos();

  if (result === false) {
    response.error = 'Error al obtener Licencias';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function actualizarLicencia(req, res) {
  const response = {
    message: 'Actualizar Licencia',
    data: null,
    error: null,
  };

  const { id } = req.params;
  const { diagnostico, fecha_inicio, fecha_termino, MedicoId, PacienteId } = req.body;

  if (!diagnostico || !fecha_inicio || !fecha_termino || !MedicoId || !PacienteId) {
    response.error = 'Faltan parámetros';
    return res.status(400).send(response);
  }

  const licencia = new Licencia(req.body);
  const result = await licencia.actualizar(id);

  if (result === false) {
    response.error = 'Error actualizando Licencia';
    return res.status(500).send(response);
  }

  if (result === 0) {
    response.error = 'La licencia no está registrada';
    return res.status(404).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function borrarLicencia(req, res) {
  const response = {
    message: 'Borrar Licencia',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await Licencia.borrar(id);

  if (result === false) {
    response.error = 'Error borrando Licencia';
    return res.status(500).send(response);
  }

  if (result === 0) {
    response.error = 'La licencia no está registrada';
    return res.status(404).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

export {
  crearLicencia,
  obtenerLicencia,
  obtenerTodos,
  actualizarLicencia,
  borrarLicencia,
};
