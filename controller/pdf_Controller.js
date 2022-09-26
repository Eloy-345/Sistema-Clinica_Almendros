const conn = require('../database/conexiondb')

const controller = {
    obtenerTodos: async function (req, res) {
        await conn.query('SELECT * FROM nota', (error, tuplas) => {
            if (!error) {
                res.render('template1', { data: tuplas })
            } else {
                console.log('Error: ', error)
            }
        })
    },
    obtenerById: async function (req, res) {
        const { id } = req.params
        //res.json({status:'obteniendo por id', id:id})
        await conn.query('SELECT *FROM nota WHERE id= ?', [id], (error, tuplas) => {
            if (!error) {
                res.json(tuplas[0])
            } else {
                res.json({ status: 'error' })
            }
        })
    },
    edit: async function (req, res) {
        const { id } = req.params;
        req.getConnection((err, conn) => {
            conn.query('SELECT *FROM nota WHERE id=?', [id], (error, nota) => {
                res.render('template1', {
                    data: nota[0]
                });
            })
        });
    },
    update: async function (req, res) {
        const data = req.params;
        const newCustomer = req.body;
        conn.query('UPDATE nota set ? WHERE id =', [newCustomer, id], (error, rows) => {
            res.redirect('template');
        });
    },



}

module.exports = controller;