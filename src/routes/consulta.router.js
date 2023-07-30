import { Router } from 'express';
import {
  crearConsulta,
  obtenerConsulta,
  obtenerTodos,
  actualizarConsulta,
  borrarConsulta,
} from '../controllers/consulta.controller.js';

const router = Router();

router.post('/', crearConsulta);
router.get('/:id', obtenerConsulta);
router.get('/', obtenerTodos);
router.put('/:id', actualizarConsulta);
router.delete('/:id', borrarConsulta);

export default router;
