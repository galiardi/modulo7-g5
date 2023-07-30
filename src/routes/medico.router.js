import { Router } from 'express';
import {
  crearMedico,
  obtenerMedico,
  obtenerTodos,
  actualizarMedico,
  borrarMedico,
} from '../controllers/medico.controller.js';

const router = Router();

router.post('/', crearMedico);
router.get('/:id', obtenerMedico);
router.get('/', obtenerTodos);
router.put('/:id', actualizarMedico);
router.delete('/:id', borrarMedico);

export default router;
