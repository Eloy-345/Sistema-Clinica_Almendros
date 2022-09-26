const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    casco = []
    res.render('home/homeP', {casco})
})
module.exports = router