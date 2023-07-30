import db from './index.js';

/*
(composite unique constrains
La tabla Consulta necesita tres restricciones:
-La combinacion fecha-hora-numero_box debe ser unica
-La combinacion fecha-hora-MedicoId debe ser unica
-La combinacion fecha-hora-PacienteId debe ser unica

Ejemplo en SQL para la primera:
  ALTER TABLE Consulta
  ADD CONSTRAINT fecha-hora-box UNIQUE(fecha, hora, numero_box);
*/

export default async function () {
  const queryInterface = db.getQueryInterface();

  const constraint1 = queryInterface.addConstraint('Consulta', {
    fields: ['fecha', 'hora', 'numero_box'],
    type: 'unique',
    name: 'fecha-hora-box',
  });

  const constraint2 = queryInterface.addConstraint('Consulta', {
    fields: ['fecha', 'hora', 'MedicoId'],
    type: 'unique',
    name: 'fecha-hora-medico',
  });

  const constraint3 = queryInterface.addConstraint('Consulta', {
    fields: ['fecha', 'hora', 'PacienteId'],
    type: 'unique',
    name: 'fecha-hora-paciente',
  });

  await Promise.all([constraint1, constraint2, constraint3]);

  console.log('Restricciones listas');
}
