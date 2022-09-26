const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')

const customerController = require('../controller/pdf_Controller');

router.get('/', customerController.obtenerTodos);

router.get('/:id', customerController.obtenerById);

router.get('/update/:id',customerController.edit);

module.exports = router;
