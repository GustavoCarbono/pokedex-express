const express = require("express")
const router = express.Router()

const {getApi} = require("../funcExterna/getApi")

router.get("/:idPokemon", (req, res) =>{
    let url = `https://pokeapi.co/api/v2/pokemon/${req.params.idPokemon}`
    getApi(url).then(response => {
        let pokemon = {name: response.name}
        res.render('pokemon', pokemon)
    })
    
})

router.get("/", (req, res) =>{
    
})

module.exports = router