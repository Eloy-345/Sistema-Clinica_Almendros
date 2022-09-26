const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const NotaController = require('../controller/NotaControllerC')

router.get('/', NotaController.obtenerTodos);

router.get('/:id', NotaController.obtenerById);

//insertar
router.post('/', NotaController.insertarNota);

//update
router.put('/', NotaController.actualizarNota);


//Delete 
router.delete('/', NotaController.eliminarNota);



module.exports = router                  