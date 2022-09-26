const conexion = require('../database/conexiondb')

const AutosController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM autos', (error, tuplas) => {
            if (!error) {
                res.render('autos/autosp', { alumnos: tuplas })
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
    insertarAlumno: async function (req, res) {
        const { marca, modelo,precio, combustible } = req.body
        await conexion.query('INSERT INTO autos(marca, modelo,precio, combustible) values (?,?,?,?)', [marca, modelo,precio, combustible], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/autosp')
            }
        })
    },
    
    actualizarAlumno: async function (req, res) {
        const {id,marca, modelo,precio, combustible} = req.body
        conexion.query('UPDATE autos SET marca=?, modelo=?, precio=?, combustible=? WHERE id=?', [marca, modelo,precio, combustible, id], (error)=>{
        if (error) {
            res.json({status: 'error al actualizar'})
        }else{
            res.json({r:'ffff'})
        }
    })
    
    },

    eliminarAlumno: async function (req, res){
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