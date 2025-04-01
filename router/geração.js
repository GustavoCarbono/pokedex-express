const express = require("express")
const router = express.Router()


router.get('/:generation', (req, res) => {
    
    console.log(geracao)
    res.render('geração', geracao)
})

module.exports = router