const conexion = require('../database/conexiondb')

const AgendaController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM tarea2', (error, tuplas) => {
            if (!error) {
                res.render('agenda/agendaT', { agenda: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM tarea2 WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    insertarAgenda: async function (req, res) {
        const {nombre,fecha,precio,hora,fecha1,hora2,medico,color,paciente} = req.body
        await conexion.query('INSERT INTO tarea2(nombre,fecha,precio,hora,fecha1,hora2,medico,color,paciente) values (?,?,?,?,?,?,?,?,?)', [nombre,fecha,precio,hora,fecha1,hora2,medico,color,paciente], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/agendaT')
            }
        })
    },
    
    actualizarAgenda: async function (req, res) {
        const {id,fecha_i, hora_i,fecha_f, hora_f, titulo, descripcion} = req.body
        conexion.query('UPDATE tarea2 SET fecha_i=?, hora_i=?, fecha_f=?, hora_f=?, titulo=?, descripcion=? WHERE id=?', [fecha_i, hora_i,fecha_f, hora_f, titulo, descripcion , id], (error)=>{
        if (error) {
            res.json({status: 'error al actualizar'})
        }else{
            res.json({r:'ffff'})
        }
    })
    
    },

    eliminarAgenda: async function (req, res){
        const {id} = req.body
        await conexion.query('DELETE FROM tarea2 WHERE id = ?', [id], (error)=>{
        if (error) {
            res.json({estado: 'No se pudo eliminar'})
        }else{
            res.json({status:'fila eliminada'})
        }
    })
    }
}

module.exports = AgendaController