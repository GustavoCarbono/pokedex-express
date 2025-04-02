const express = require("express")
const router = express.Router()
const {getGen} = require('../funcExterna/getGen')


router.get('/:generation', (req, res) => {
    
    let x = getGen(1)
    let pokemon = Promise.all(x.pokemon)
    

    pokemon.then(gen => {
        geracao = {
            geracao: x.geracao,
            pokemon: gen,
            count: gen.length
        }
        res.render('geracao', geracao)
    })

    
})

module.exports = router