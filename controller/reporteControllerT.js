const conexion = require('../database/conexiondb')

const AutosController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM reporte2', (error, tuplas) => {
            if (!error) {
                res.render('reportes/tarea2', { alumnos: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM reporte2 WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    insertarTarea: async function (req, res) {
        const {nombre,fecha,precio,hora,medico} = req.body
        await conexion.query('INSERT INTO reporte2(nombre,fecha,precio,hora,medico) values (?,?,?,?,?)', [nombre,fecha,precio,hora,medico], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/tarea2')
            }
        })
    },
    
    actualizarTarea: async function (req, res) {
        const {id,nombre,fecha,precio,hora,medico} = req.body
        conexion.query('UPDATE reporte2 SET nombre=?, fecha=?, precio=?, hora=?,medico=? WHERE id=?', [nombre,fecha,precio,hora,medico, id], (error)=>{
        if (error) {
            res.json({status: 'error al actualizar'})
        }else{
            res.json({r:'ffff'})
        }
    })
    
    },

    eliminarTarea: async function (req, res){
        const {id} = req.body
        await conexion.query('DELETE FROM reporte2 WHERE id = ?', [id], (error)=>{
        if (error) {
            res.json({estado: 'No se pudo eliminar'})
        }else{
            res.json({status:'fila eliminada'})
        }
    })
    }
}

module.exports = AutosController