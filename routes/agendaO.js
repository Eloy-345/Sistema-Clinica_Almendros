const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const AgendaController = require('../controller/agenda3_Controller')

router.get('/', AgendaController.obtenerTodos);

router.get('/:id', AgendaController.obtenerById);

//insertar
router.post('/', AgendaController.insertarAgenda);

//update
router.put('/', AgendaController.actualizarAgenda);


//Delete 
router.delete('/', AgendaController.eliminarAgenda);




module.exports = router                  