const conexion = require('../database/conexiondb')

const AutosController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM datos', (error, tuplas) => {
            if (!error) {
                res.render('agenda/agendaMostrar', { alumnos: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM datos WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    insertarAlumno: async function (req, res) {
        const { ide,nombre,email,telefono,fecha,hora} = req.body
        await conexion.query('INSERT INTO datos(ide,nombre,email,telefono,fecha,hora) values (?,?,?,?)', [ide,nombre,email,telefono,fecha,hora], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/agendaMostrar')
            }
        })
    },
    
    actualizarAlumno: async function (req, res) {
        const {id,ide,nombre,email,telefono,fecha,hora} = req.body
        conexion.query('UPDATE datos SET ide=?, nombre=?, email=?, telefono=?, fecha=?, hora=? WHERE id=?', [ide,nombre,email,telefono,fecha,hora, id], (error)=>{
        if (error) {
            res.json({status: 'error al actualizar'})
        }else{
            res.json({r:'ffff'})
        }
    })
    
    },

    eliminarAlumno: async function (req, res){
        const {id} = req.body
        await conexion.query('DELETE FROM datos WHERE id = ?', [id], (error)=>{
        if (error) {
            res.json({estado: 'No se pudo eliminar'})
        }else{
            res.json({status:'fila eliminada'})
        }
    })
    }
}

module.exports = AutosController