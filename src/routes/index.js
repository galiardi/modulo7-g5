import { Router } from 'express';
import pacienteRouter from './paciente.router.js';
import medicoRouter from './medico.router.js';
import especialidadRouter from './especialidad.router.js';
import consultaRouter from './consulta.router.js';
import licenciaRouter from './licencia.router.js';

const router = Router();

router.use('/paciente', pacienteRouter);
router.use('/medico', medicoRouter);
router.use('/especialidad', especialidadRouter);
router.use('/consulta', consultaRouter);
router.use('/licencia', licenciaRouter);

export default router;
