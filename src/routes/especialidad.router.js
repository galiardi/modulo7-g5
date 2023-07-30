import { Router } from 'express';
import {
  crearEspecialidad,
  obtenerEspecialidad,
  obtenerTodos,
  actualizarEspecialidad,
  borrarEspecialidad,
} from '../controllers/especialidad.controller.js';

const router = Router();

router.post('/', crearEspecialidad);
router.get('/:id', obtenerEspecialidad);
router.get('/', obtenerTodos);
router.put('/:id', actualizarEspecialidad);
router.delete('/:id', borrarEspecialidad);

export default router;
