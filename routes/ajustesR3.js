const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const AjustesController = require('../controller/ajustes3Controller')

router.get('/', AjustesController.obtenerTodos);

router.get('/:id', AjustesController.obtenerById);

//update
router.put('/', AjustesController.actualizarAgenda);



module.exports = router                  