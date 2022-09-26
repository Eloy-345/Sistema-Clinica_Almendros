const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    usado = []
    res.render('medicos/fisio', {usado})
})
module.exports = router