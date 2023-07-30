import { Router } from 'express';
import {
  crearLicencia,
  obtenerLicencia,
  obtenerTodos,
  actualizarLicencia,
  borrarLicencia,
} from '../controllers/licencia.controller.js';

const router = Router();

router.post('/', crearLicencia);
router.get('/:id', obtenerLicencia);
router.get('/', obtenerTodos);
router.put('/:id', actualizarLicencia);
router.delete('/:id', borrarLicencia);

export default router;
