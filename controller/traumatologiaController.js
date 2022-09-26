const conexion = require('../database/conexiondb')

const PacienteController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM pacientes', (error, tuplas) => {
            if (!error) {
                res.render('nota_medica/traumatologia', { paciente: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM pacientes WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    insertarPaciente: async function (req, res) {
    const { ide,nombre,email,telefono,edad,sexo,escolaridad,estado,dominancia,ocupacion,residencia} = req.body
        await conexion.query('INSERT INTO pacientes(ide,nombre,email,telefono,edad,sexo,escolaridad,estado,dominancia,ocupacion,residencia) values (?,?,?,?,?,?,?,?,?,?,?)', [ide, nombre,email, telefono, edad,sexo,escolaridad,estado,dominancia,ocupacion,residencia], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/traumatologia')
            }
        })
    },
    
    actualizarPaciente: async function (req, res) {
        const {id,ide, nombre,email, telefono, edad,sexo,escolaridad,estado,dominancia,ocupacion,residencia} = req.body
        conexion.query('UPDATE pacientes SET ide=?, nombre=?,email=?, telefono=?, edad=?,sexo=?,escolaridad=?,estado=?,dominancia=?,ocupacion=?,residencia=? WHERE id=?', [ide, nombre,email, telefono, edad,sexo,escolaridad,estado,dominancia,ocupacion,residencia, id], (error)=>{
        if (error) {
            res.json({status: 'error al actualizar'})
        }else{
            res.json({r:'ffff'})
        }
    })
    
    },

    eliminarPaciente: async function (req, res){
        const {id} = req.body
        await conexion.query('DELETE FROM pacientes WHERE id = ?', [id], (error)=>{
        if (error) {
            res.json({estado: 'No se pudo eliminar'})
        }else{
            res.json({status:'fila eliminada'})
        }
    })
    }
}

module.exports = PacienteController