const conexion = require('../database/conexiondb')

const NotaController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM notaT', (error, tuplas) => {
            if (!error) {
                res.render('nota_medica/notaT', { alumnos: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM notaT WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    insertarNota: async function (req, res) {
        const {nombre,edad,medico,fecha,esp1} = req.body
        await conexion.query('INSERT INTO notaT(nombre,edad,medico,fecha,esp1) values (?,?,?,?,?)', [nombre,edad,medico,fecha,esp1], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/notaT')
            }
        })
    },
    
    actualizarNota: async function (req, res) {
        const {id,nombre,edad,medico,fecha,esp1} = req.body
        conexion.query('UPDATE notaT SET nombre=?, edad=?, medico=?, fecha=?, esp1=? WHERE id=?', [nombre,edad,medico,fecha,esp1, id], (error)=>{
        if (error) {
            res.json({status: 'error al actualizar'})
        }else{
            res.json({r:'ffff'})
        }
    })
    
    },

    eliminarNota: async function (req, res){
        const {id} = req.body
        await conexion.query('DELETE FROM notaT WHERE id = ?', [id], (error)=>{
        if (error) {
            res.json({estado: 'No se pudo eliminar'})
        }else{
            res.json({status:'fila eliminada'})
        }
    })
    }
}

module.exports = NotaController