const conexion = require('../database/conexiondb')

const NotaController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM cartaO', (error, tuplas) => {
            if (!error) {
                res.render('nota_medica/cartaO', { alumnos: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM cartaO WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    insertarNota: async function (req, res) {
        const { nombre,edad,domicilio,repre,edad2,dom2,calidad,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10,esp11,esp12,esp13,esp14,esp15,esp16} = req.body
        await conexion.query('INSERT INTO cartaO(nombre,edad,domicilio,repre,edad2,dom2,calidad,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10,esp11,esp12,esp13,esp14,esp15, esp16) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)', [nombre,edad,domicilio,repre,edad2,dom2,calidad,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10,esp11,esp12,esp13,esp14,esp15,esp16], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/cartaO')
            }
        })
    },
    
    actualizarNota: async function (req, res) {
        const {id,nombre,edad,domicilio,repre,edad2,nom2,dom2,calidad,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10,esp11,esp12,esp13,esp14,esp15,esp16} = req.body
        conexion.query('UPDATE cartaO SET nombre=?, edad=?, domicilio=?, repre=?, edad2=?, dom2=?, calidad=?, esp1=?, esp2=?, esp3=?, esp4=?, esp5=?, esp6=?, esp7=?, esp8=?, esp9=?, esp10=?, esp11=?, esp12=?, esp13=?, esp14=?, esp15=?, esp16=? WHERE id=?', [id,nombre,edad,domicilio,repre,edad2,dom2,calidad,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10,esp11,esp12,esp13,esp14,esp15,esp16, id], (error)=>{
        if (error) {
            res.json({status: 'error al actualizar'})
        }else{
            res.json({r:'ffff'})
        }
    })
    
    },

    eliminarNota: async function (req, res){
        const {id} = req.body
        await conexion.query('DELETE FROM cartaO WHERE id = ?', [id], (error)=>{
        if (error) {
            res.json({estado: 'No se pudo eliminar'})
        }else{
            res.json({status:'fila eliminada'})
        }
    })
    }
}

module.exports = NotaController