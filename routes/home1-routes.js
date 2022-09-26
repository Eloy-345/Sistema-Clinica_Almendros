const express = require('express');
const {homeview, generatePdf}  = require('../controller/PDFController');
const conexion = require('../database/conexiondb')
const router = express.Router();

router.get('/', homeview);
router.get('/download1', generatePdf);

module.exports = {
    routes: router
}