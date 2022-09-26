const conexion = require('../database/conexiondb')

const RecetaController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM recetaR', (error, tuplas) => {
            if (!error) {
                res.render('receta/recetaR', { alumnos: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM recetaR WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    insertarReceta: async function (req, res) {
        const {nota} = req.body
        await conexion.query('INSERT INTO recetaR(nota) values (?)', [nota], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/recetaR')
            }
        })
    },
    
    actualizarReceta: async function (req, res) {
        const {id,nota} = req.body
        conexion.query('UPDATE recetaR SET nota=? WHERE id=?', [nota, id], (error)=>{
        if (error) {
            res.json({status: 'error al actualizar'})
        }else{
            res.json({r:'ffff'})
        }
    })
    
    },

    eliminarReceta: async function (req, res){
        const {id} = req.body
        await conexion.query('DELETE FROM recetaR WHERE id = ?', [id], (error)=>{
        if (error) {
            res.json({estado: 'No se pudo eliminar'})
        }else{
            res.json({status:'fila eliminada'})
        }
    })
    }
}

module.exports = RecetaController