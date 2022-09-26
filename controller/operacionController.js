const conexion = require('../database/conexiondb')

const NotaController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM hoja5', (error, tuplas) => {
            if (!error) {
                res.render('nota_medica/operacion', { alumnos: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM hoja5 WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    insertarNota: async function (req, res) {
        const {nombre,edad,peso,talla,cama,expediente,fecha,fisico,asa,rr,rcv,rte,riesgo,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10} = req.body
        await conexion.query('INSERT INTO hoja5(nombre,edad,peso,talla,cama,expediente,fecha,fisico,asa,rr,rcv,rte,riesgo,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [nombre,edad,peso,talla,cama,expediente,fecha,fisico,asa,rr,rcv,rte,riesgo,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/operacion')
            }
        })
    },
    
    actualizarNota: async function (req, res) {
        const {id,ide,nombre,email,telefono,fecha,hora} = req.body
        conexion.query('UPDATE datos SET ide=?, nombre=?, email=?, telefono=?, fecha=?, hora=? WHERE id=?', [ide,nombre,email,telefono,fecha,hora, id], (error)=>{
        if (error) {
            res.json({status: 'error al actualizar'})
        }else{
            res.json({r:'ffff'})
        }
    })
    
    },

    eliminarNota: async function (req, res){
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

module.exports = NotaController