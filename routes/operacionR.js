const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const OperacionController = require('../controller/operacionController')

router.get('/', OperacionController.obtenerTodos);

router.get('/:id', OperacionController.obtenerById);

//insertar
router.post('/', OperacionController.insertarNota);

//update
router.put('/', OperacionController.actualizarNota);


//Delete 
router.delete('/', OperacionController.eliminarNota);



module.exports = router                  