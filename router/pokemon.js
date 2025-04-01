const express = require("express")
const router = express.Router()

const {getApi} = require("../funcExterna/getApi")

router.get("/:idPokemon", (req, res) =>{
    let url = `https://pokeapi.co/api/v2/pokemon/${req.params.idPokemon}`
    getApi(url).then(response => {
        console.log(response)
    })
    
})

router.get("/", (req, res) =>{
    
})

module.exports = router