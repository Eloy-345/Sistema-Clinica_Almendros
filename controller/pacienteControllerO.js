const conexion = require('../database/conexiondb')

const PacienteController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM oftamologo', (error, tuplas) => {
            if (!error) {
                res.render('paciente/pacienteO', { paciente: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM oftamologo WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    insertarPaciente: async function (req, res) {
        const { ide, nombre, email, telefono, edad, sexo, escolaridad, estado, dominancia, ocupacion, residencia } = req.body
        await conexion.query('INSERT INTO pacientes(ide,nombre,email,telefono,edad,sexo,escolaridad,estado,dominancia,ocupacion,residencia) values (?,?,?,?,?,?,?,?,?,?,?)', [ide, nombre, email, telefono, edad, sexo, escolaridad, estado, dominancia, ocupacion, residencia], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/pacienteO')
            }
        })
    },

    actualizarPaciente: async function (req, res) {
        const { id, nombre, edad, medico, fecha, esp1 } = req.body
        conexion.query('UPDATE notaO SET nombre=?, edad=?, medico=?, fecha=?, esp1=? WHERE id=?', [nombre, edad, medico, fecha, esp1, id], (error) => {
            if (error) {
                res.json({ status: 'error al actualizar' })
            } else {
                res.json({ r: 'ffff' })
            }
        })

    },

    eliminarPaciente: async function (req, res) {
        const { id } = req.body
        await conexion.query('DELETE FROM oftamologo WHERE id = ?', [id], (error) => {
            if (error) {
                res.json({ estado: 'No se pudo eliminar' })
            } else {
                res.json({ status: 'fila eliminada' })
            }
        })
    },
    edit: async function (req, res) {
        const { id } = req.params;
        conexion.query('SELECT *FROM notaO WHERE id=?', [id], (error, nota) => {
            res.render('template3', {
                paciente: nota[0]
            });
        })
    },
    edit1: async function (req, res) {
        const { id } = req.params;
        conexion.query('SELECT *FROM cartaO WHERE id=?', [id], (error, nota) => {
            res.render('template4', {
                paciente: nota[0]
            });
        })
    },
}

module.exports = PacienteController