const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    usado = []
    res.render('calendario/calendario', {usado})
})
module.exports = router