-- Accidente                         |
-- | AreasTrabajo                      |
-- | AreasTrabajo_PuestosTrabajo       |
-- | Areas_PuestosTrabajo              |
-- | Capacitacion                      |
-- | Empresa                           |
-- | EquiposSeguridad                  |
-- | EquiposSeguridad_AreasTrabajo     |
-- | Establecimiento                   |
-- | Inspeccion                        |
-- | Novedad                           |
-- | Persona                           |
-- | Personas_Capacitacion             |
-- | Personas_Establecimiento          |
-- | Personas_PuestosTrabajo           |
-- | PuestosTrabajo                    |
-- | PuestosTrabajo_Equipo             |
-- | Riesgo  
-- source
SET FOREIGN_KEY_CHECKS=0;
-- DROP DATABASE i2solutions_development;
-- CREATE DATABASE i2solutions_development;
-- USE i2solutions_development;

INSERT INTO Persona 
(nombres, apellidos, correo, cedula, clave, telefono, fecha_nacimiento, perfil_ocupacional, usuario, rol, fechaActualizacion, fechaCreacion)
VALUES
('Joel Eduardo', 'Rodriguez Llamuca', 'joelerll@gmail.com', '123456', '123', '123456', '1995-02-10T19:27:28.576Z', 'espol', 'joelerll', 'empleado', '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO Empresa
(nombre, activida_comercial, razon_social, fechaActualizacion, fechaCreacion)
VALUES
('Mi empresita', 'venta de cosas', '1231', '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO AreasTrabajo
(actividad, nombre, foto_url, metros_cuadrados, descripcion_lugar, fechaActualizacion, fechaCreacion)
VALUES
('Ventas de productos', 'Recepcion', '', '21x21', 'cosas', '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO AreasTrabajo_PuestosTrabajo
(areas_trabajo_id, puestos_trabajo_id, fechaActualizacion, fechaCreacion)
VALUES
(1, 1, '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO Capacitacion
(nombre, descripcion, tema, establecimientos_id, fechaActualizacion, fechaCreacion)
VALUES
('Primera Capacitacion', 'Mi capacitacion', 'Cosas', 1, '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO EquiposSeguridad
(nombre, descripcion, foto_url, fechaActualizacion, fechaCreacion)
VALUES
('Extintor', 'Mi equipo', 'url/api', '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

-- esta tabla tenia PuestosTrabajoId, revisar
INSERT INTO EquiposSeguridad 
(nombre, descripcion, foto_url, fechaActualizacion, fechaCreacion)
VALUES
('Extintor', 'Mi equipo', 'url/api', '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO EquiposSeguridad_AreasTrabajo 
(cantidad, areas_trabajo_id, equipos_id, fechaActualizacion, fechaCreacion)
VALUES
(5, 1, 1, '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO Establecimiento 
(nombres, direccion, ruc, empresas_id, fechaActualizacion, fechaCreacion)
VALUES
('Sucursal', 'casa de cosa', '1365998', 1, '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO Inspeccion 
(nombre, fecha_inicio, tipo_inspeccion, fecha_fin, fechaActualizacion, fechaCreacion)
VALUES
('Inspeccion 1', '2015-11-05 14:29:36', 'local', '2015-11-05 14:29:36', '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO Novedad 
(nombre, descripcion, prioridad, fecha, foto_url, fue_atendida, puestos_trabajo_id, fechaActualizacion, fechaCreacion)
VALUES
('Novedad 1', 'descripcion', 'alta', '2015-11-05 14:29:36', 'aaa', 0, 1,'2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO Personas_Capacitacion 
(personas_id, capacitaciones_id, fechaActualizacion, fechaCreacion)
VALUES
(1, 1, '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO Personas_Establecimiento 
(rol, establecimientos_id, personas_id, fechaActualizacion, fechaCreacion)
VALUES
('casa', 1, 1, '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO Personas_PuestosTrabajo 
(personas_id, puestos_trabajo_id, fechaActualizacion, fechaCreacion)
VALUES
(1, 1, '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO PuestosTrabajo 
(nombre, descripcion, fechaActualizacion, fechaCreacion)
VALUES
('Puesto 1', 'descripcion', '2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO PuestosTrabajo_Equipo 
(cantidad, equipos_id, puestos_trabajo_id, fechaActualizacion, fechaCreacion)
VALUES
(2, 1, 1,'2015-11-05 14:29:36', '2015-11-05 14:29:36' );

INSERT INTO Riesgo 
(tipo_riesgo, personas_expuestas, valoracion, valoracion_literal, fecha, porcentaje_riesgo, puestos_trabajo_id, fechaActualizacion, fechaCreacion)
VALUES
('nose', 'aaa', 'alto', 'aaa', '2015-11-05 14:29:36', '50', 1,'2015-11-05 14:29:36', '2015-11-05 14:29:36' );


INSERT INTO Accidente 
(descripcion, nombre, heridos, atendido_en_empresa, muertos, fecha, puestos_trabajo_id, fechaActualizacion, fechaCreacion)
VALUES
('nose', 'aaa', 0, 'no', 0, '2015-11-05 14:29:36', 1,'2015-11-05 14:29:36', '2015-11-05 14:29:36' );