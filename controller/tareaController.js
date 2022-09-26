const conexion = require('../database/conexiondb')

const AutosController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM autos', (error, tuplas) => {
            if (!error) {
                res.render('tareas/tarea1', { alumnos: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM autos WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    insertarTarea: async function (req, res) {
        const {nombre,fecha,precio,hora,medico,color,paciente} = req.body
        await conexion.query('INSERT INTO autos(nombre,fecha,precio,hora,medico,color,paciente) values (?,?,?,?,?,?,?)', [nombre,fecha,precio,hora,medico,color,paciente], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/tarea1')
            }
        })
    },
    
    actualizarTarea: async function (req, res) {
        const {id,nombre,fecha,precio,hora,medico,color,paciente} = req.body
        conexion.query('UPDATE autos SET nombre=?, fecha=?, precio=?, hora=?,medico=?, color=?, paciente=? WHERE id=?', [nombre,fecha,precio,hora,medico,color,paciente, id], (error)=>{
        if (error) {
            res.json({status: 'error al actualizar'})
        }else{
            res.json({r:'ffff'})
        }
    })
    
    },

    eliminarTarea: async function (req, res){
        const {id} = req.body
        await conexion.query('DELETE FROM autos WHERE id = ?', [id], (error)=>{
        if (error) {
            res.json({estado: 'No se pudo eliminar'})
        }else{
            res.json({status:'fila eliminada'})
        }
    })
    }
}

module.exports = AutosController