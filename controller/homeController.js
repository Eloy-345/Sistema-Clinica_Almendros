const fs = require('fs');
const pdf = require('pdf-creator-node');
const path = require('path');
const options = require('../helpers/options');
//const data = require('../helpers/data');
const connection = require('../database/conexiondb')

const homeview = (req, res, next) => {
    res.render('home');
}

const generatePdf = async (req, res, next) => {
    const html = fs.readFileSync(path.join(__dirname, '../vistas/template.html'), 'utf-8');
    const filename = Math.random() + '_formato' + '.pdf';
    let array = [];
    const { id } = req.params
    connection.query('SELECT *FROM nota WHERE id= ?', [id], function (err, result) {
        if (err) throw err;
    
        console.log("fetched data", result)
    
        console.log(result);
        const prod = {
            name: result.paciente,
            description: result.medico,
            unit: result.edad,
            quantity: result.fecha,
            price: tuplas.esp1
        }
        array.push(prod);
        let subtotal = 0;
        array.forEach(i => {
            subtotal += i.total
        });
        const tax = (subtotal * 20) / 100;
        const grandtotal = subtotal - tax;
        const obj = {
            prodlist: array,
            subtotal: subtotal,
            tax: tax,
            gtotal: grandtotal
        }
        const document = {
            html: html,
            path: './docs/' + filename
        }
        pdf.create(document, options)
            .then(res => {
                console.log(res);
            }).catch(error => {
                console.log(error);
            });
        const filepath = 'http://localhost:3000/docs/' + filename;

        res.render('download', {
            path: filepath
        });
    })

}


module.exports = {
    homeview,
    generatePdf
}