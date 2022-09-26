const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    usado = []
    res.render('medicos/medico1', {usado})
})
module.exports = router