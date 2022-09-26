const conexion = require('../database/conexiondb')

const AjustesController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM user3', (error, tuplas) => {
            if (!error) {
                res.render('ajustes/ajustes3', { ajustes: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM user3 WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
   
 
    actualizarAgenda: async function (req, res) {
        const {id, username,password} = req.body
        conexion.query('UPDATE user3 SET username=?, password=? WHERE id=?', [username,password,id], (error)=>{
        if (error) {
            res.json({status: 'error al actualizar'})
        }else{
            res.json({r:'ffff'})
        }
    })
    
    },

}

module.exports = AjustesController