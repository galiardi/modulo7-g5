CREATE TABLE Especialidad (
  id INT NOT NULL AUTO_INCREMENT,
  descripcion VARCHAR(100),
  PRIMARY KEY (id)
);

CREATE TABLE Medico (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(60) NOT NULL,
  rut VARCHAR(12) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  EspecialidadId INT NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (EspecialidadId) REFERENCES Especialidad(id)
);

CREATE TABLE Paciente (
  id INT NOT NULL AUTO_INCREMENT,
  nombre VARCHAR(60) NOT NULL,
  rut VARCHAR(12) NOT NULL,
  direccion VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE Licencia (
  id INT NOT NULL AUTO_INCREMENT,
  MedicoId INT NOT NULL,
  PacienteId INT NOT NULL,
  diagnostico VARCHAR(60) NOT NULL,
  fecha_inicio DATE NOT NULL,
  fecha_termino DATE NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (MedicoId) REFERENCES Medico(id),
  FOREIGN KEY (PacienteId) REFERENCES Paciente(id)
);

CREATE TABLE Consulta (
  id INT NOT NULL AUTO_INCREMENT,
  MedicoId INT NOT NULL,
  PacienteId INT NOT NULL,
  fecha DATE NOT NULL,
  hora TIME NOT NULL,
  numero_box INT NOT NULL NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (MedicoId) REFERENCES Medico(id),
  FOREIGN KEY (PacienteId) REFERENCES Paciente(id)
);

