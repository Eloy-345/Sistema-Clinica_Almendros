const express = require('express');
const router = express.Router();

const customerController = require('../controllers/customerController');

router.get('/customerss' ,customerController.lists);
router.get('/customers' ,customerController.list);
router.post('/add',customerController.save);
router.get('/update/:id',customerController.edit);
router.post('/update/:id',customerController.update);

module.exports = router;