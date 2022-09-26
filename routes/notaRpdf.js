const express = require('express');
const router = express.Router();
const connection = require('../database/conexiondb')

const fs = require("fs");
const pdf = require("pdfkit");
var doc = new pdf({ size: "A4", margin: 50 });
const filename = Math.random() + '_Nota' + '.pdf';

//creating a new pdf document
const { createInvoice } = require("./crearnotapdf.js");

router.get('/', function (req, res) {
  res.render('index');

});

router.get('/', (req, res) => {
  res.render('template6');

});


router.post('/pdf', function (req, res) {
  let invoice_id = req.body.invoice_id;
  console.log("invo id", invoice_id)
  const { id } = req.params
  connection.query("select * from nota  WHERE id = ? ",[req.body.invoice_id], function(err,result){
    if (err) throw err;

    console.log("fetched data", result)

    console.log(result);

//expediente,nombre,fecha,edad,sexo,estado_civil,religion,lugar_origen,ocupacion,domicilio,telefono,padecimiento_madre
    const invoice = {
      shipping: {
        name: result[0].nombre,
        edad: result[0].edad,
        medico: result[0].medico,
        espacio: result[0].esp1,
      }
    };

   //createInvoice(invoice, "notaR.pdf");
    const path = './docs/' + filename

    createInvoice(invoice, path);
    const filepath = 'http://localhost:3000/docs/' + filename;

    res.render('download', {
      path: filepath
    });





  })

  //res.render('addproduct');
})



module.exports = router;
