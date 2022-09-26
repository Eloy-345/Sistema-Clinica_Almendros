const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const NotaController = require('../controller/NotaController')

router.get('/', NotaController.obtenerTodos);

router.get('/:id', NotaController.obtenerById);

//insertar
router.post('/', NotaController.insertarNota);

//update
router.put('/', NotaController.actualizarNota);


router.delete('/', NotaController.eliminarNota);

/*editar
router.get('/update/:id',NotaController.edit);
router.post('/update/:id',NotaController.update);*/


module.exports = router                  