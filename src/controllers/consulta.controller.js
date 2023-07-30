import { Consulta } from '../models/Consulta.js';

async function crearConsulta(req, res) {
  const response = {
    message: 'Crear Consulta',
    data: null,
    error: null,
  };

  const { fecha, hora, numero_box } = req.body;

  if ((!fecha, !hora, !numero_box)) {
    response.error = 'Faltan parámetros';
    return res.status(400).send(response);
  }

  const consulta = new Consulta(req.body);
  const result = await consulta.crear();

  if (result === false) {
    response.error = 'Error al crear Consulta';
    return res.status(500).send(response);
  }

  if (result.name === 'SequelizeUniqueConstraintError') {
    response.error = result.errors[0].message;
    return res.status(422).send(response);
  }

  response.data = result;
  return res.status(201).send(response);
}

async function obtenerConsulta(req, res) {
  const response = {
    message: 'Obtener Consulta',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await Consulta.obtener(id);

  if (result === false) {
    response.error = 'Error al obtener Consulta';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function obtenerTodos(req, res) {
  const response = {
    message: 'Obtener Consultas',
    data: null,
    error: null,
  };

  const result = await Consulta.obtenerTodos();

  if (result === false) {
    response.error = 'Error al obtener las Consultas';
    return res.status(500).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function actualizarConsulta(req, res) {
  const response = {
    message: 'Actualizar Consulta',
    data: null,
    error: null,
  };

  const { id } = req.params;
  const { fecha, hora, numero_box } = req.body;

  if ((!fecha, !hora, !numero_box)) {
    response.error = 'Faltan parámetros';
    return res.status(400).send(response);
  }

  const consulta = new Consulta(req.body);
  const result = await consulta.actualizar(id);

  if (result === false) {
    response.error = 'Error actualizando Consulta';
    return res.status(500).send(response);
  }

  if (result.name === 'SequelizeUniqueConstraintError') {
    response.error = result.errors[0].message;
    return res.status(422).send(response);
  }

  if (result === 0) {
    response.error = 'La consulta no está registrada';
    return res.status(404).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

async function borrarConsulta(req, res) {
  const response = {
    message: 'Borrar Consulta',
    data: null,
    error: null,
  };

  const { id } = req.params;

  const result = await Consulta.borrar(id);

  if (result === false) {
    response.error = 'Error borrando Consulta';
    return res.status(500).send(response);
  }

  if (result === 0) {
    response.error = 'El Consulta no está registrado';
    return res.status(404).send(response);
  }

  response.data = result;
  return res.status(200).send(response);
}

export {
  crearConsulta,
  obtenerConsulta,
  obtenerTodos,
  actualizarConsulta,
  borrarConsulta,
};
