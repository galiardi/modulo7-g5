import { Especialidad } from '../models/Especialidad.js';

async function crearEspecialidad(req, res) {
  const response = {
    message: 'Crear Especialidad',
    data: null,
    error: null,
  };

  const { codigo, descripcion } = req.body;

  if (!codigo || !descripcion) {
    response.error = 'Faltan parámetros';
    return res.status(400).send(response);
  }

  const especialidad = new Especialidad({ codigo, descripcion });
  const result = await especialidad.crear();

  if (result === false) {
    response.error = 'Error al crear Especialidad';
    return res.status(500).send(response);
  }

  if (result === 'SequelizeUniqueConstraintError') {
    response.error = 'El código ingresado ya existe';
    return res.status(422).send(response);
  }

  response.data = result;
  return res.status(201).send(response);
}

async function obtenerEspecialidad(req, res) {
  const response = {
    message: 'Obtener Especialidad',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await Especialidad.obtener(id);

  if (result === false) {
    response.error = 'Error al obtener Especialidad';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function obtenerTodos(req, res) {
  const response = {
    message: 'Obtener Especialidads',
    data: null,
    error: null,
  };

  const result = await Especialidad.obtenerTodos();

  if (result === false) {
    response.error = 'Error al obtener los Especialidads';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function actualizarEspecialidad(req, res) {
  const response = {
    message: 'Actualizar Especialidad',
    data: null,
    error: null,
  };

  const { id } = req.params;
  const { codigo, descripcion } = req.body;

  if (!codigo || !descripcion) {
    response.error = 'Faltan parámetros';
    return res.status(400).send(response);
  }

  const especialidad = new Especialidad({ codigo, descripcion });
  const result = await especialidad.actualizar(id);

  if (result === false) {
    response.error = 'Error actualizando Especialidad';
    return res.status(500).send(response);
  }

  if (result === 0) {
    response.error = 'El Especialidad no está registrado';
    return res.status(404).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function borrarEspecialidad(req, res) {
  const response = {
    message: 'Borrar Especialidad',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await Especialidad.borrar(id);

  if (result === false) {
    response.error = 'Error borrando Especialidad';
    return res.status(500).send(response);
  }

  if (result === 0) {
    response.error = 'El Especialidad no está registrado';
    return res.status(404).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

export {
  crearEspecialidad,
  obtenerEspecialidad,
  obtenerTodos,
  actualizarEspecialidad,
  borrarEspecialidad,
};
