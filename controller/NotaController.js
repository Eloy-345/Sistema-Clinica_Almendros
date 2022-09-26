const conexion = require('../database/conexiondb')

const NotaController = {
    obtenerTodos: async function (req, res) {
        await conexion.query('SELECT * FROM nota', (error, tuplas) => {
            if (!error) {
                res.render('nota_medica/nota', { alumnos: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conexion.query('SELECT *FROM nota WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    insertarNota: async function (req, res) {
        const { nombre, edad, medico, fecha, esp1 } = req.body
        await conexion.query('INSERT INTO nota(nombre,edad,medico,fecha,esp1) values (?,?,?,?,?)', [nombre, edad, medico, fecha, esp1], (error, tuplas) => {
            if (error) {
                res.json({ status: 'error al insertar' })
            } else {
                res.redirect('/nota')
            }
        })
    },

    actualizarNota: async function (req, res) {
        const { id, nombre, edad, medico, fecha, esp1 } = req.body
        conexion.query('UPDATE nota SET nombre=?, edad=?, medico=?, fecha=?, esp1=? WHERE id=?', [nombre, edad, medico, fecha, esp1, id], (error) => {
            if (error) {
                res.json({ status: 'error al actualizar' })
            } else {
                res.json({ r: 'ffff' })
            }
        })

    },

    eliminarNota: async function (req, res) {
        const { id } = req.body
        await conexion.query('DELETE FROM nota WHERE id = ?', [id], (error) => {
            if (error) {
                res.json({ estado: 'No se pudo eliminar' })
            } else {
                res.json({ status: 'fila eliminada' })
            }
        })
    }

}
/*controller.edit = (req, res) => {
    const { id } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT *FROM nota WHERE id = ?', [id], (err, nota) => {
            res.render('nota_edit', {
                data: nota[0]
            });
        });
    });
}

controller.update = (req, res) => {
    const { id } = req.params;
    const newCustomer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE nota set ? WHERE id = ?', [newCustomer, id], (err, rows) => {
            res.redirect('/nota');
        });
    });
};*/
module.exports = NotaController