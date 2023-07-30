import { Medico } from '../models/Medico.js';

async function crearMedico(req, res) {
  const response = {
    message: 'Crear médico',
    data: null,
    error: null,
  };

  const { nombre, rut, direccion, EspecialidadId } = req.body;

  if (!nombre || !rut || !direccion || !EspecialidadId) {
    response.error = 'Faltan parámetros';
    return res.status(400).send(response);
  }

  const medico = new Medico(req.body);
  const result = await medico.crear();

  if (result === false) {
    response.error = 'Error al crear médico';
    return res.status(500).send(response);
  }

  if (result === 'SequelizeUniqueConstraintError') {
    response.error = 'El rut ingresado ya existe';
    return res.status(422).send(response);
  }

  response.data = result;
  return res.status(201).send(response);
}

async function obtenerMedico(req, res) {
  const response = {
    message: 'Obtener médico',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await Medico.obtener(id);

  if (result === false) {
    response.error = 'Error al obtener médico';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function obtenerTodos(req, res) {
  const response = {
    message: 'Obtener médicos',
    data: null,
    error: null,
  };

  const result = await Medico.obtenerTodos();

  if (result === false) {
    response.error = 'Error al obtener los médicos';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function actualizarMedico(req, res) {
  const response = {
    message: 'Actualizar médico',
    data: null,
    error: null,
  };

  const { id } = req.params;
  const { nombre, rut, direccion, EspecialidadId } = req.body;

  if (!nombre || !rut || !direccion || EspecialidadId) {
    response.error = 'Faltan parámetros';
    return res.status(400).send(response);
  }

  const medico = new Medico(req.body);
  const result = await medico.actualizar(id);

  if (result === false) {
    response.error = 'Error actualizando médico';
    return res.status(500).send(response);
  }

  if (result === 0) {
    response.error = 'El médico no está registrado';
    return res.status(404).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function borrarMedico(req, res) {
  const response = {
    message: 'Borrar médico',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await Medico.borrar(id);

  if (result === false) {
    response.error = 'Error borrando médico';
    return res.status(500).send(response);
  }

  if (result === 0) {
    response.error = 'El médico no está registrado';
    return res.status(404).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

export { crearMedico, obtenerMedico, obtenerTodos, actualizarMedico, borrarMedico };
