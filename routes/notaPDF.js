const express = require('express');
const router = express.Router();

const customerController = require('../controller/PDFnotaController');


router.get('/customerss' ,customerController.lists);
router.get('/customers' ,customerController.list);
router.get('/update/:id',customerController.edit);
router.post('/update/:id',customerController.update);

module.exports = router;
