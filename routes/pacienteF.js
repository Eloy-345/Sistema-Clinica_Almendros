const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const PacienteController = require('../controller/pacienteControllerF')

router.get('/', PacienteController.obtenerTodos);

router.get('/:id', PacienteController.obtenerById);

//insertar
router.post('/', PacienteController.insertarPaciente);

//update
router.put('/', PacienteController.actualizarPaciente);

//Delete 
router.delete('/', PacienteController.eliminarPaciente);



module.exports = router                  