const express = require('express');
const router = express.Router();
const connection = require('../database/conexiondb')

const fs = require("fs");
const pdf = require("pdfkit");
var doc = new pdf({ size: "A4", margin: 50 });

//creating a new pdf document
const { createInvoice } = require("./createexpedienteO.js");
const filename = Math.random() + 'ExpedienteO' + '.pdf';
router.get('/', (req, res) => {
  res.render('template7');

});

router.post('/pdf', function (req, res) {
  let invoice_id = req.body.invoice_id;
  console.log("invo id", invoice_id)
  const { id } = req.params
  connection.query("select * from oftamologo WHERE id = ? ", [req.body.invoice_id], function (err, result) {
    if (err) throw err;

    console.log("fetched data", result)

    console.log(result);

    //cirugias,transfusiones,fracturas,alcoholismo,tabaquismo,drogas 
    const invoice = {
      shipping: {
        name: result[0].expediente,
        a: result[0].nombre,
        b: result[0].edad,
        c: result[0].sexo,
        d: result[0].estado_civil,
        e: result[0].religion,
        f: result[0].lugar_origen,
        g: result[0].ocupacion,
        h: result[0].domicilio,
        i: result[0].telefono,
        j: result[0].padecimiento_madre,
        k: result[0].fallecido,
        l: result[0].causa,
        o: result[0].padecimiento_padre,
        p: result[0].fallecido2,
        q: result[0].causa2,
        s: result[0].alergia_medicamento,
        t: result[0].alergia_alimentos,
        y: result[0].alergia_sustancias,
        x: result[0].cirugias,
        w: result[0].transfusiones,
        aa: result[0].fracturas,
        bb: result[0].alcoholismo,
        cc: result[0].tabaquismo,
        dd: result[0].drogas,
        ff: result[0].dm,
        gg: result[0].tiempo,
        hh: result[0].has,
        jj: result[0].tiempo2,
        ll: result[0].ir,
        ii: result[0].otras,
        mm: result[0].otras,
        nn: result[0].ta,
        oo: result[0].fc,
        pp: result[0].x1,
        qq: result[0].fr,
        rr: result[0].temp,
        ss: result[0].peso,
        tt: result[0].cabeza,
        xx: result[0].cuello,
        zz: result[0].abdomen,
        yy: result[0].pelvicos,
        ww: result[0].toracicos,
        aaa: result[0].menarca,
        bbb: result[0].cesareas,
        ccc: result[0].ivsa,
        ddd: result[0].aborto,
        eee: result[0].gestas,
        fff: result[0].paras,
        hhh: result[0].hemoglobina,
        ggg: result[0].hematocrito,
        jjj: result[0].plaquetas,
        iii: result[0].glucosa,
        mmm: result[0].urea,
        nnn: result[0].creatinina,
        ooo: result[0].rx,
        ppp: result[0].usg,
        qqq: result[0].medico,
        rrr: result[0].quirurgico,
        az: result[0].cirugiaP,
        bz: result[0].cirugiaR,
        cz: result[0].hallazgos,
        dz: result[0].complicaciones,
        ez: result[0].cirujano,
        fz: result[0].ayudante,
        gz: result[0].instrumentista,
        hz: result[0].anestesiologo,
        jz: result[0].circulante,
        iz: result[0].esp1,
        kz: result[0].esp2,
        sss: result[0].diagnostico,
        ttt: result[0].elaboro,
        postal_code: "+91 7899577586",
      }
    };

    createInvoice(invoice, "ExpedienteO.pdf");
    //creates pdf with the name of the user

    /* const doc = new pdf({bufferPage: true});
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

 // res.render('template7');
})



module.exports = router;
