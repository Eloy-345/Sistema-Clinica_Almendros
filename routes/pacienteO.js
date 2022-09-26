const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const PacienteController = require('../controller/pacienteControllerO')

router.get('/', PacienteController.obtenerTodos);

router.get('/:id', PacienteController.obtenerById);

//insertar
router.post('/', PacienteController.insertarPaciente);

//update
router.put('/', PacienteController.actualizarPaciente);
router.get('/update/:id',PacienteController.edit);
router.get('/update1/:id',PacienteController.edit1);
//Delete 
router.delete('/', PacienteController.eliminarPaciente);



module.exports = router                  