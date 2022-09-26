const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const AjustesController = require('../controller/ajustesController')

router.get('/', AjustesController.obtenerTodos);

router.get('/:id', AjustesController.obtenerById);

//update
router.put('/', AjustesController.actualizarAgenda);



module.exports = router                  