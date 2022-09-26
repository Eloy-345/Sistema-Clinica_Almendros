const express = require('express')
const router = express.Router()
const conexion = require('../database/conexiondb')
const Tarea1Controller = require('../controller/tareaController2')

router.get('/', Tarea1Controller.obtenerTodos);

router.get('/:id', Tarea1Controller.obtenerById);

//insertar
router.post('/', Tarea1Controller.insertarTarea);

//update
router.put('/', Tarea1Controller.actualizarTarea);


//Delete 
router.delete('/', Tarea1Controller.eliminarTarea);



module.exports = router                  