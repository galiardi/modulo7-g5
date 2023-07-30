import { Router } from 'express';
import {
  crearPaciente,
  obtenerPaciente,
  obtenerTodos,
  actualizarPaciente,
  borrarPaciente,
} from '../controllers/paciente.controller.js';

const router = Router();

router.post('/', crearPaciente);
router.get('/:id', obtenerPaciente);
router.get('/', obtenerTodos);
router.put('/:id', actualizarPaciente);
router.delete('/:id', borrarPaciente);

export default router;
