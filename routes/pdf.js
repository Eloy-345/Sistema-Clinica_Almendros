const express = require('express')
const router = express.Router()
const path = require('path');
const pdf = require("html-pdf")
const fs = require("fs");
const options = require('../confs/options');
const connection = require('../database/conexiondb')

// Constantes propias del programa
const ubicacionPlantilla = require.resolve('../vistas/plantilla.html');
let contenidoHtml = fs.readFileSync(ubicacionPlantilla, 'utf8');
//const contenidoHtml = fs.readFileSync(path.join(__dirname, '../vistas/template.html'), 'utf-8');
// Definir rutas
router.get('/', (peticion, respuesta) => {
    // Podemos acceder a la petición HTTP
    const valorPasadoPorNode = "Soy un valor enviado desde las vegas con unas plebonas";
    contenidoHtml = contenidoHtml.replace("{{valor}}", valorPasadoPorNode);
    pdf.create(contenidoHtml, options).toStream((error, stream) => {
        if (error) {
            respuesta.end("Error creando PDF: " + error)
        } else {
            respuesta.setHeader("Content-Type", "application/pdf");
            stream.pipe(respuesta);
        }
    });
});

router.post('/', function (req, res) {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM nota', (err, plantilla) => {
            if (err) {
                res.json(err);
            }
            res.render('plantilla.html', {
                data: plantilla
            });
        });
    });
})

module.exports = router   