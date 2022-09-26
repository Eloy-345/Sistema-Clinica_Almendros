const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const PacienteController = require('../controller/pacienteControllerTerapia')

router.get('/', PacienteController.obtenerTodos);

router.get('/:id', PacienteController.obtenerById);

//insertar
router.post('/', PacienteController.insertarPaciente);
//router.post('/', PacienteController.insertarAntecedente);
//router.post('/', PacienteController.insertarAnalisis);
//update
router.put('/', PacienteController.actualizarPaciente);


//Delete 
router.delete('/', PacienteController.eliminarPaciente);
//DomingoXWare


module.exports = router                  