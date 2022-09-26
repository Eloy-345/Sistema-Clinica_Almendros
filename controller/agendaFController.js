const conexion = require('../database/conexiondb')

const AutosController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM agendaF', (error, tuplas) => {
            if (!error) {
                res.render('calendario/agendaF', { alumnos: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM agendaF WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    insertarAlumno: async function (req, res) {
        const { fecha_i, hora_i,fecha_f, hora_f, titulo, descripcion, costo,medico  } = req.body
        await conexion.query('INSERT INTO agendaF(fecha_i, hora_i,fecha_f, hora_f, titulo, descripcion, costo,medico ) values (?,?,?,?,?,?,?,?)', [fecha_i, hora_i,fecha_f, hora_f, titulo, descripcion,costo,medico], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/agendaF')
            }
        })
    },
    
    actualizarAlumno: async function (req, res) {
        const {id,fecha_i, hora_i,fecha_f, hora_f, titulo, descripcion,costo,medico} = req.body
        conexion.query('UPDATE agendaF SET fecha_i=?, hora_i=?, fecha_f=?, hora_f=?, titulo=?, descripcion=?, costo=?, medico=? WHERE id=?', [fecha_i, hora_i,fecha_f, hora_f, titulo, descripcion ,costo,medico, id], (error)=>{
        if (error) {
            res.json({status: 'error al actualizar'})
        }else{
            res.json({r:'ffff'})
        }
    })
    
    },

    eliminarAlumno: async function (req, res){
        const {id} = req.body
        await conexion.query('DELETE FROM agendaF WHERE id = ?', [id], (error)=>{
        if (error) {
            res.json({estado: 'No se pudo eliminar'})
        }else{
            res.json({status:'fila eliminada'})
        }
    })
    }
}

module.exports = AutosController