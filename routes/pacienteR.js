const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const PacienteController = require('../controller/pacienteController')


router.get('/', PacienteController.obtenerTodos);

router.get('/:id', PacienteController.obtenerById);

// base de datos nota
router.get('/', PacienteController.obtenerTodos1);

router.get('/:id', PacienteController.obtenerById1);

//insertar
router.post('/', PacienteController.insertarNota);
//update

//router.put('/', PacienteController.actualizarPaciente);
router.put('/', PacienteController.actualizar_Nota);

router.get('/update/:id',PacienteController.edit);
router.put('/update/:id',PacienteController.update);
//Delete 
router.delete('/', PacienteController.eliminarPaciente);
router.delete('/', PacienteController.eliminarPaciente2);


module.exports = router                  