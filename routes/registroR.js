const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const AutosController = require('../controller/agendasController')

router.get('/', AutosController.obtenerTodos);

router.get('/:id', AutosController.obtenerById);

//insertar
router.post('/', AutosController.insertarAgenda);

//update
router.put('/', AutosController.actualizarAgenda);


//Delete 
router.delete('/', AutosController.eliminarAgenda);



module.exports = router                  