const express = require('express');
const {homeview, generatePdf}  = require('../controller/PDF2Controller');

const router = express.Router();

router.get('/', homeview);
router.get('/download3', generatePdf);

module.exports = {
    routes: router
}