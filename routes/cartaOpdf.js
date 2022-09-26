const express = require('express');
const router = express.Router();
const connection = require('../database/conexiondb')

const pdf = require("pdfkit");


//creating a new pdf document
const { createInvoice } = require("./crearpdfcartaO.js");
const filename = Math.random() + 'CartaO' + '.pdf';
router.get('/', (req, res) => {
  res.render('template3');

});





router.post('/pdf', function (req, res) {
  let invoice_id = req.body.invoice_id;
  console.log("invo id", invoice_id)
  const { id } = req.params
  connection.query("select * from cartaO WHERE id = ? ", [req.body.invoice_id], function (err, result) {
    if (err) throw err;

    console.log("fetched data", result)

    console.log(result);

    //nombre,edad,domicilio,repre,edad2,dom2,calidad,esp1,esp2,esp3,esp4,esp5,esp6,esp7,esp8,esp9,esp10,esp11,esp12,esp13,esp14,esp15,esp16
    const invoice = {
      shipping: {
        a: result[0].nombre,
        b: result[0].edad,
        c: result[0].domicilio,
        d: result[0].edad2,
        e: result[0].repre,
        f: result[0].dom2,
        h: result[0].calidad,
        g: result[0].esp1, 
        i: result[0].esp2,
        j: result[0].esp3,
        k: result[0].esp4,
        l: result[0].esp5, 
        m: result[0].esp6,
        n: result[0].esp7,
        o: result[0].esp8,
        p: result[0].esp9,
        q: result[0].esp10,
        r: result[0].esp11,
        s: result[0].esp12,
        t: result[0].esp13,
        x: result[0].esp14,
        z: result[0].esp15,
        y: result[0].esp16,
      }
    };

    //createInvoice(invoice, "CARTAO.pdf");
    //creates pdf with the name of the user
    //var doc = new pdf({ size: "A4", margin: 50 });
    /*const doc = new pdf({bufferPages: true});
    const filename = `Carta${Date.now()}.pdf`;
    let buffers = [];
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
        let pdfData = Buffer.concat(buffers);
        res.writeHead(200, {
        'Content-Length': Buffer.byteLength(pdfData),
        'Content-Type': 'application/pdf',
        'Content-disposition': `attachment;filename=${filename}`
        .end(pdfData)
      });
    });*/
    const path = './docs/' + filename

     createInvoice(invoice, path);
     const filepath = 'http://localhost:3000/docs/' + filename;
 
     res.render('download', {
       path: filepath
     });


  })

  //res.render('template3');
})



module.exports = router;
