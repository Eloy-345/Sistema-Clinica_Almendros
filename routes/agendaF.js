const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const AutosController = require('../controller/agendaFController')

router.get('/', AutosController.obtenerTodos);

router.get('/:id', AutosController.obtenerById);

//insertar
router.post('/', AutosController.insertarAlumno);

//update
router.put('/', AutosController.actualizarAlumno);


//Delete 
router.delete('/', AutosController.eliminarAlumno);



module.exports = router                  