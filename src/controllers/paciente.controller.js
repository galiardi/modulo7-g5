import { Paciente } from '../models/Paciente.js';

async function crearPaciente(req, res) {
  const response = {
    message: 'Crear paciente',
    data: null,
    error: null,
  };

  const { nombre, rut, direccion } = req.body;

  if (!nombre || !rut || !direccion) {
    response.error = 'Faltan parámetros';
    return res.status(400).send(response);
  }

  const paciente = new Paciente(req.body);
  const result = await paciente.crear();

  if (result === false) {
    response.error = 'Error al crear paciente';
    return res.status(500).send(response);
  }

  if (result === 'SequelizeUniqueConstraintError') {
    response.error = 'El rut ingresado ya existe';
    return res.status(422).send(response);
  }

  response.data = result;
  return res.status(201).send(response);
}

async function obtenerPaciente(req, res) {
  const response = {
    message: 'Obtener paciente',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await Paciente.obtener(id);

  if (result === false) {
    response.error = 'Error al obtener paciente';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function obtenerTodos(req, res) {
  const response = {
    message: 'Obtener pacientes',
    data: null,
    error: null,
  };

  const result = await Paciente.obtenerTodos();

  if (result === false) {
    response.error = 'Error al obtener los pacientes';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function actualizarPaciente(req, res) {
  const response = {
    message: 'Actualizar paciente',
    data: null,
    error: null,
  };

  const { id } = req.params;
  const { nombre, rut, direccion } = req.body;

  if (!nombre || !rut || !direccion) {
    response.error = 'Faltan parámetros';
    return res.status(400).send(response);
  }

  const paciente = new Paciente(req.body);
  const result = await paciente.actualizar(id);

  if (result === false) {
    response.error = 'Error actualizando paciente';
    return res.status(500).send(response);
  }

  if (result === 0) {
    response.error = 'El paciente no está registrado';
    return res.status(404).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function borrarPaciente(req, res) {
  const response = {
    message: 'Borrar paciente',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await Paciente.borrar(id);

  if (result === false) {
    response.error = 'Error borrando paciente';
    return res.status(500).send(response);
  }

  if (result === 0) {
    response.error = 'El paciente no está registrado';
    return res.status(404).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

export {
  crearPaciente,
  obtenerPaciente,
  obtenerTodos,
  actualizarPaciente,
  borrarPaciente,
};
