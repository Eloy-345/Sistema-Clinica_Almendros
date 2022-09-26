create database Base;

  use Base;

 -- -----------------------------------------------------
-- Table 'Login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
-- -----------------------------------------------------
INSERT INTO `users` (`id`, `username`, `password`) VALUES
(1, 'admin', 'clinicaalmendros');
INSERT INTO `users` (`id`, `username`, `password`) VALUES
(2, 'reumatologo', 'clinicaalmendros');
INSERT INTO `users` (`id`, `username`, `password`) VALUES
(3, 'traumatologo', 'clinicaalmendros');
INSERT INTO `users` (`id`, `username`, `password`) VALUES
(4, 'oftamologa', 'clinicaalmendros');
 -- -----------------------------------------------------
-- Table 'Login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user1` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
-- -----------------------------------------------------
INSERT INTO `user1` (`id`, `username`, `password`) VALUES
(1, 'reumatologo', '123');
INSERT INTO `user1` (`id`, `username`, `password`) VALUES
(2, 'admin', 'clinicaalmendros');
 -- -----------------------------------------------------
-- Table 'Login traumatologo`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user2` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
-- -----------------------------------------------------
INSERT INTO `user2` (`id`, `username`, `password`) VALUES
(1, 'traumatologo', '123');
INSERT INTO `user2` (`id`, `username`, `password`) VALUES
(2, 'admin', 'clinicaalmendros');
 -- -----------------------------------------------------
-- Table 'Login`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `user3` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
-- -----------------------------------------------------
INSERT INTO `user3` (`id`, `username`, `password`) VALUES
(1, 'oftamologa', '123'),
(2, 'admin', 'clinicaalmendros');
-- Table 'agenda`

-- Tabla de receta medica reumatologia

-- ----------------------------------------------------
CREATE TABLE IF NOT EXISTS `agenda` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `fecha_i` varchar(50) NOT NULL,
  `hora_i` varchar(25) NOT NULL,
  `fecha_f` varchar(50) NOT NULL,
  `hora_f` varchar(25) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(25) NOT NULL,
  `costo` int(5) NOT NULL,
  `medico` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `tabla` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `fechaI` varchar(50) NOT NULL,
  `horaI` varchar(25) NOT NULL,
  `fechaF` varchar(50) NOT NULL,
  `horaF` varchar(25) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `paciente` varchar(25) NOT NULL,
  `costo` int(5) NOT NULL,
  `medico` varchar(25) NOT NULL,
  `color` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


CREATE TABLE IF NOT EXISTS `agendaF` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `fecha_i` varchar(50) NOT NULL,
  `hora_i` varchar(25) NOT NULL,
  `fecha_f` varchar(50) NOT NULL,
  `hora_f` varchar(25) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `descripcion` varchar(25) NOT NULL,
  `costo` int(5) NOT NULL,
  `medico` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;


-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `autos1` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `marca` varchar(30) NOT NULL,
  `modelo` varchar(25) NOT NULL,
  `precio` int(10) NOT NULL,
  `combustible` varchar(25) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
-- ----------------------------------------------------- 
CREATE TABLE IF NOT EXISTS `autos` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha` varchar(25) NOT NULL,
  `precio` int(10) NOT NULL,
  `hora` varchar(25) NOT NULL,
  `medico` varchar(30) NOT NULL,
  `color` varchar(25) NOT NULL,
  `paciente` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
-- ----------------------------------------------------- 
CREATE TABLE IF NOT EXISTS `tarea2` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha` varchar(25) NOT NULL,
  `precio` int(10) NOT NULL,
  `hora` varchar(25) NOT NULL,
  `medico` varchar(30) NOT NULL,
  `color` varchar(25) NOT NULL,
  `paciente` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
 -- -----------------------------------------------------
 -- ----------------------------------------------------- 
CREATE TABLE IF NOT EXISTS `reporte1` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha` varchar(25) NOT NULL,
  `precio` int(10) NOT NULL,
  `hora` varchar(25) NOT NULL,
  `medico` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
 -- -----------------------------------------------------
 -- ----------------------------------------------------- 
CREATE TABLE IF NOT EXISTS `reporte2` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha` varchar(25) NOT NULL,
  `precio` int(10) NOT NULL,
  `hora` varchar(25) NOT NULL,
  `medico` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
 -- -----------------------------------------------------
 -- ----------------------------------------------------- 
CREATE TABLE IF NOT EXISTS `reporte3` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha` varchar(25) NOT NULL,
  `precio` int(10) NOT NULL,
  `hora` varchar(25) NOT NULL,
  `medico` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
 -- -----------------------------------------------------
 -- ----------------------------------------------------- 
CREATE TABLE IF NOT EXISTS `tarea3` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(200) NOT NULL,
  `fecha` varchar(25) NOT NULL,
  `precio` int(10) NOT NULL,
  `hora` varchar(25) NOT NULL,
  `medico` varchar(30) NOT NULL,
  `color` varchar(25) NOT NULL,
  `paciente` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
 -- -----------------------------------------------------
 -- -----------------------------------------------------
-- Table 'datos`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `datos` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `ide` varchar(30) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  `telefono` int(10) NOT NULL,
  `fecha` varchar(25) NOT NULL,
  `hora` varchar(25) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1;
 -- -----------------------------------------------------
-- insertar informacion en la tabla 'datos`
-- -----------------------------------------------------

INSERT INTO `datos` (`id`, `ide`, `nombre`, `email`, `telefono`, `fecha`, `hora`) VALUES
(1,'333', 'configuroweb', '1234abcd..',999999,'1209-2000','12:09');
 -- -----------------------------------------------------
-- Table 'pacientes`
-- -----------------------------------------------------

CREATE TABLE IF NOT EXISTS `pacientes` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `ide` varchar(30) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `email` varchar(25) NOT NULL,
  `telefono` int(10) NOT NULL,
  `edad` int(25) NOT NULL,
  `sexo` varchar(25) NOT NULL,
  `escolaridad` varchar(25) NOT NULL,
  `estado` varchar(25) NOT NULL,
  `dominancia` varchar(25) NOT NULL,
  `ocupacion` varchar(25) NOT NULL,
  `residencia` varchar(25) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- crear tabla de nota
CREATE TABLE IF NOT EXISTS `nota` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(70) NOT NULL,
  `edad` int(3) NOT NULL,
  `medico` varchar(70) NOT NULL,
  `fecha` varchar(30) NOT NULL,
  `esp1` varchar(5000) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
-- ingresar datos en la tabla de nota
-- INSERT INTO `nota` (`id`, `nombre`, `edad`,`medico`, `fecha`, `esp1`) VALUES (1,'oscarr',45,'masculino','12-08-2022','soltero,dominancia, profesor,las vegas');
-- crear tabla de nota oftamologa
CREATE TABLE IF NOT EXISTS `notaO` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(70) NOT NULL,
  `edad` int(3) NOT NULL,
  `medico` varchar(70) NOT NULL,
  `fecha` varchar(30) NOT NULL,
  `esp1` varchar(5000) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
-- ingresar datos en la tabla de nota
-- INSERT INTO `notaO` (`id`, `nombre`, `edad`,`medico`, `fecha`, `esp1`) VALUES (1,'oscarr',45,'masculino','12-08-2022','soltero,dominancia, profesor,las vegas');
-- crear tabla de nota Traumatologo
CREATE TABLE IF NOT EXISTS `notaT` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(70) NOT NULL,
  `edad` int(3) NOT NULL,
  `medico` varchar(70) NOT NULL,
  `fecha` varchar(30) NOT NULL,
  `esp1` varchar(5000) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- tabla nota medica
CREATE TABLE IF NOT EXISTS `notaC` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(40) NOT NULL,
  `cirugia` varchar(40) NOT NULL,
  `domicilio` varchar(40) NOT NULL,
  `edad` int(3) NOT NULL,
  `responsable` varchar(40) NOT NULL,
  `telefono` varchar(40) NOT NULL,
  `medico` varchar(40) NOT NULL,
  `esp1` varchar(200) NOT NULL,
  
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- insertar datos en la tabla de nota clinica
INSERT INTO `notaC` (`id`, `nombre`, `cirugia`,`domicilio`, `edad`, `responsable`,`telefono`,`medico`,`esp1`)
 VALUES (1,'oscarr','brazo','las vegas',12,'soltero','1234567890','Dr Marlon Perez','el caver bien seguro, para que me la pelas');

-- tabla de carta de consentimiento
CREATE TABLE `carta` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `edad` int(3) NOT NULL,
  `domicilio` varchar(45) DEFAULT NULL,
  `repre` varchar(45) DEFAULT NULL,
  `edad2` varchar(45) DEFAULT NULL,
  `dom2` varchar(45) DEFAULT NULL,
  `calidad` varchar(45) DEFAULT NULL,
  `esp1` varchar(45) DEFAULT NULL,
  `esp2` varchar(45) DEFAULT NULL,
  `esp3` varchar(45) DEFAULT NULL,
  `esp4` varchar(45) DEFAULT NULL,
  `esp5` varchar(45) DEFAULT NULL,
  `esp6` varchar(45) DEFAULT NULL,
  `esp7` varchar(45) DEFAULT NULL,
  `esp8` varchar(45) DEFAULT NULL,
  `esp9` varchar(45) DEFAULT NULL,
  `esp10` varchar(45) DEFAULT NULL,
  `esp11` varchar(45) DEFAULT NULL,
  `esp12` varchar(45) DEFAULT NULL,
  `esp13` varchar(45) DEFAULT NULL,
  `esp14` varchar(45) DEFAULT NULL,
  `esp15` varchar(45) DEFAULT NULL,
  `esp16` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
-- ta,fc,x1,fr,temp,peso,cabeza,cuello,abdomen,pelvicos,toracicos,antecedentes,menarca,cesareas,ivsa,aborto,gestas,paras
-- tabla de carta de consentimiento
CREATE TABLE `cartaO` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) DEFAULT NULL,
  `edad` int(3) NOT NULL,
  `domicilio` varchar(45) DEFAULT NULL,
  `repre` varchar(45) DEFAULT NULL,
  `edad2` varchar(45) DEFAULT NULL,
  `dom2` varchar(45) DEFAULT NULL,
  `calidad` varchar(45) DEFAULT NULL,
  `esp1` varchar(45) DEFAULT NULL,
  `esp2` varchar(45) DEFAULT NULL,
  `esp3` varchar(45) DEFAULT NULL,
  `esp4` varchar(45) DEFAULT NULL,
  `esp5` varchar(45) DEFAULT NULL,
  `esp6` varchar(45) DEFAULT NULL,
  `esp7` varchar(45) DEFAULT NULL,
  `esp8` varchar(45) DEFAULT NULL,
  `esp9` varchar(45) DEFAULT NULL,
  `esp10` varchar(45) DEFAULT NULL,
  `esp11` varchar(45) DEFAULT NULL,
  `esp12` varchar(45) DEFAULT NULL,
  `esp13` varchar(45) DEFAULT NULL,
  `esp14` varchar(45) DEFAULT NULL,
  `esp15` varchar(45) DEFAULT NULL,
  `esp16` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
-- datos de la tabla carta de consentimiento

-- tabla de hoja 2
CREATE TABLE `hoja2` (
  `id` int(55) NOT NULL AUTO_INCREMENT,
  `expediente` varchar(45) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `fecha` varchar(30) NOT NULL,
  `edad` int(3) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `estado_civil` varchar(45) NOT NULL,
  `religion` varchar(45) NOT NULL,
  `lugar_origen` varchar(70) NOT NULL,
  `ocupacion` varchar(70) NOT NULL,
  `domicilio` varchar(45) NOT NULL,
  `telefono` varchar (20) NOT NULL,-- ----
  `padecimiento_madre` varchar(45) NOT NULL,
  `fallecido` varchar(45) NOT NULL,
  `causa` varchar(45) NOT NULL,
  `padecimiento_padre` varchar(45) NOT NULL,
  `fallecido2` varchar(45) NOT NULL,
  `causa2` varchar(45) NOT NULL,
  `alergia_medicamento` varchar(45) NOT NULL,
  `alergia_alimentos` varchar(45) NOT NULL,
  `alergia_sustancias` varchar(45) NOT NULL,
  `cirugias` varchar(45) NOT NULL,
  `transfusiones` varchar(45) NOT NULL,
  `fracturas` varchar(45) NOT NULL,
  `alcoholismo` varchar(45) NOT NULL,
  `tabaquismo` varchar(45) NOT NULL,
  `drogas` varchar(45) NOT NULL,
   `dm` varchar(45) NOT NULL,
  `tiempo` varchar(45) NOT NULL,
  `has` varchar(45) NOT NULL,
  `tiempo2` varchar(45) NOT NULL,
  `ir` varchar(45) NOT NULL,
  `otras` varchar(45) NOT NULL,-- 
  `ta` varchar(45) NOT NULL,
  `fc` varchar(45) NOT NULL,
  `x1` varchar(45) NOT NULL,
  `fr` varchar(45) NOT NULL,
  `temp` varchar(45) NOT NULL,
  `peso` varchar(10) NOT NULL,
  `cabeza` varchar(45) NOT NULL,
  `cuello` varchar(45) NOT NULL,
  `abdomen` varchar(45) NOT NULL,
  `pelvicos` varchar(45) NOT NULL,
  `toracicos` varchar(45) NOT NULL,
  `menarca` varchar(45) NOT NULL,
  `cesareas` varchar(45) NOT NULL, 
  `ivsa` varchar(45) NOT NULL,
  `aborto` varchar(45) NOT NULL,
  `gestas` varchar(45) NOT NULL,
  `paras` varchar(45) NOT NULL, -- aqui
  `hemoglobina` varchar(45) NOT NULL,
  `hematocrito` varchar(45) NOT NULL,
  `plaquetas` varchar(45) NOT NULL,
  `glucosa` varchar(45) NOT NULL,
  `urea` varchar(45) NOT NULL,
  `creatinina` varchar(45) NOT NULL,
  `rx` varchar(45) NOT NULL,
  `usg` varchar(45) NOT NULL,
  `medico` varchar(45) NOT NULL,
  `quirurgico` varchar(45) NOT NULL,
  `diagnostico` varchar(1000) NOT NULL,
  `elaboro` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- Pacientes oftamologo
CREATE TABLE `oftamologo` (
  `id` int(55) NOT NULL AUTO_INCREMENT,
  `expediente` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `fecha` varchar(30) NOT NULL,
  `edad` int(3) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `estado_civil` varchar(45) NOT NULL,
  `religion` varchar(70) NOT NULL,
  `lugar_origen` varchar(75) NOT NULL,
  `ocupacion` varchar(75) NOT NULL,
  `domicilio` varchar(75) NOT NULL,
  `telefono` varchar (20) NOT NULL,-- ----
  `padecimiento_madre` varchar(45) NOT NULL,
  `fallecido` varchar(45) NOT NULL,
  `causa` varchar(45) NOT NULL,
  `padecimiento_padre` varchar(45) NOT NULL,
  `fallecido2` varchar(45) NOT NULL,
  `causa2` varchar(45) NOT NULL,
  `alergia_medicamento` varchar(45) NOT NULL,
  `alergia_alimentos` varchar(45) NOT NULL,
  `alergia_sustancias` varchar(45) NOT NULL,
  `cirugias` varchar(45) NOT NULL,
  `transfusiones` varchar(45) NOT NULL,
  `fracturas` varchar(45) NOT NULL,
  `alcoholismo` varchar(45) NOT NULL,
  `tabaquismo` varchar(45) NOT NULL,
  `drogas` varchar(45) NOT NULL,
   `dm` varchar(45) NOT NULL,
  `tiempo` varchar(45) NOT NULL,
  `has` varchar(45) NOT NULL,
  `tiempo2` varchar(45) NOT NULL,
  `ir` varchar(45) NOT NULL,
  `otras` varchar(45) NOT NULL,-- 
  `ta` varchar(45) NOT NULL,
  `fc` varchar(45) NOT NULL,
  `x1` varchar(45) NOT NULL,
  `fr` varchar(45) NOT NULL,
  `temp` varchar(45) NOT NULL,
  `peso` varchar(10) NOT NULL,
  `cabeza` varchar(45) NOT NULL,
  `cuello` varchar(45) NOT NULL,
  `abdomen` varchar(45) NOT NULL,
  `pelvicos` varchar(45) NOT NULL,
  `toracicos` varchar(45) NOT NULL,
  `menarca` varchar(45) NOT NULL,
  `cesareas` varchar(45) NOT NULL, 
  `ivsa` varchar(45) NOT NULL,
  `aborto` varchar(45) NOT NULL,
  `gestas` varchar(45) NOT NULL,
  `paras` varchar(45) NOT NULL, -- aqui
  `hemoglobina` varchar(45) NOT NULL,
  `hematocrito` varchar(45) NOT NULL,
  `plaquetas` varchar(45) NOT NULL,
  `glucosa` varchar(45) NOT NULL,
  `urea` varchar(45) NOT NULL,
  `creatinina` varchar(45) NOT NULL,
  `rx` varchar(45) NOT NULL,
  `usg` varchar(45) NOT NULL,
  `medico` varchar(45) NOT NULL,
  `quirurgico` varchar(45) NOT NULL,
  `cirugiaP` varchar(45) NOT NULL,
  `cirugiaR` varchar(45) NOT NULL,
  `hallazgos` varchar(45) NOT NULL,
  `complicaciones` varchar(45) NOT NULL,
  `cirujano` varchar(45) NOT NULL,
  `ayudante` varchar(45) NOT NULL,
  `instrumentista` varchar(45) NOT NULL,
  `anestesiologo` varchar(45) NOT NULL,
  `circulante` varchar(45) NOT NULL,
  `esp1` varchar(45) NOT NULL,
  `esp2` varchar(45) NOT NULL,
  `diagnostico` varchar(1000) NOT NULL,
  `elaboro` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
-- pacientes traumatologo 

CREATE TABLE `traumatologo` (
  `id` int(55) NOT NULL AUTO_INCREMENT,
  `expediente` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `fecha` varchar(30) NOT NULL,
  `edad` int(3) NOT NULL,
  `sexo` varchar(45) NOT NULL,
  `estado_civil` varchar(45) NOT NULL,
  `religion` varchar(45) NOT NULL,
  `lugar_origen` varchar(45) NOT NULL,
  `ocupacion` varchar(45) NOT NULL,
  `domicilio` varchar(45) NOT NULL,
  `telefono` int (20) NOT NULL,-- ----
  `padecimiento_madre` varchar(45) NOT NULL,
  `fallecido` varchar(45) NOT NULL,
  `causa` varchar(45) NOT NULL,
  `padecimiento_padre` varchar(45) NOT NULL,
  `fallecido2` varchar(45) NOT NULL,
  `causa2` varchar(45) NOT NULL,
  `alergia_medicamento` varchar(45) NOT NULL,
  `alergia_alimentos` varchar(45) NOT NULL,
  `alergia_sustancias` varchar(45) NOT NULL,
  `cirugias` varchar(45) NOT NULL,
  `transfusiones` varchar(45) NOT NULL,
  `fracturas` varchar(45) NOT NULL,
  `alcoholismo` varchar(45) NOT NULL,
  `tabaquismo` varchar(45) NOT NULL,
  `drogas` varchar(45) NOT NULL,
   `dm` varchar(45) NOT NULL,
  `tiempo` varchar(45) NOT NULL,
  `has` varchar(45) NOT NULL,
  `tiempo2` varchar(45) NOT NULL,
  `ir` varchar(45) NOT NULL,
  `otras` varchar(45) NOT NULL,-- 
  `ta` varchar(45) NOT NULL,
  `fc` varchar(45) NOT NULL,
  `x1` varchar(45) NOT NULL,
  `fr` varchar(45) NOT NULL,
  `temp` varchar(45) NOT NULL,
  `peso` varchar(10) NOT NULL,
  `cabeza` varchar(45) NOT NULL,
  `cuello` varchar(45) NOT NULL,
  `abdomen` varchar(45) NOT NULL,
  `pelvicos` varchar(45) NOT NULL,
  `toracicos` varchar(45) NOT NULL,
  `menarca` varchar(45) NOT NULL,
  `cesareas` varchar(45) NOT NULL, 
  `ivsa` varchar(45) NOT NULL,
  `aborto` varchar(45) NOT NULL,
  `gestas` varchar(45) NOT NULL,
  `paras` varchar(45) NOT NULL, -- aqui
  `hemoglobina` varchar(45) NOT NULL,
  `hematocrito` varchar(45) NOT NULL,
  `plaquetas` varchar(45) NOT NULL,
  `glucosa` varchar(45) NOT NULL,
  `urea` varchar(45) NOT NULL,
  `creatinina` varchar(45) NOT NULL,
  `rx` varchar(45) NOT NULL,
  `usg` varchar(45) NOT NULL,
  `medico` varchar(45) NOT NULL,
  `quirurgico` varchar(45) NOT NULL,
  `cirugiaP` varchar(45) NOT NULL,
  `cirugiaR` varchar(45) NOT NULL,
  `hallazgos` varchar(45) NOT NULL,
  `complicaciones` varchar(45) NOT NULL,
  `cirujano` varchar(45) NOT NULL,
  `ayudante` varchar(45) NOT NULL,
  `instrumentista` varchar(45) NOT NULL,
  `anestesiologo` varchar(45) NOT NULL,
  `circulante` varchar(45) NOT NULL,
  `esp1` varchar(45) NOT NULL,
  `esp2` varchar(45) NOT NULL,
  `diagnostico` varchar(45) NOT NULL,
  `elaboro` varchar(1000) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

CREATE TABLE IF NOT EXISTS `hoja5` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `edad` int (5) NOT NULL,
  `peso` varchar(5) NOT NULL,
  `talla` varchar(5) NOT NULL,
  `cama` int (5) NOT NULL,
  `expediente` varchar(45) NOT NULL,
  `fecha` varchar(45) NOT NULL,
  `fisico` varchar(45) NOT NULL,
  `asa` varchar(45) NOT NULL,
  `rr` varchar(45) NOT NULL,
  `rcv` varchar(45) NOT NULL,
  `rte` varchar(45) NOT NULL,
  `riesgo` varchar(45) NOT NULL,
  `esp1` varchar(45) NOT NULL,
  `esp2` varchar(45) NOT NULL,
  `esp3` varchar(45) NOT NULL,
  `esp4` varchar(45) NOT NULL,
  `esp5` varchar(45) NOT NULL,
  `esp6` varchar(45) NOT NULL,
  `esp7` varchar(45) NOT NULL,
  `esp8` varchar(45) NOT NULL,
  `esp9` varchar(45) NOT NULL,
  `esp10` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;
