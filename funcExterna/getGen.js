const {getApi} = require('./getApi')

function getGeracao(geracao, min, max) {
    for(let i=min; i<=max; i++) {
        let url = `https://pokeapi.co/api/v2/pokemon/${i}`
        geracao.pokemon[i-1] = getApi(url).then(res => {
                if(res.types.length == 2) {
                    var type = [res.types[0].type.name, res.types[1].type.name]
                    var secondType = true
                } else {
                    var type = [res.types[0].type.name]
                    var secondType = false
                }              
                var x = {
                    name: res.name,
                    img: res.sprites.front_default,
                    type: type,
                    secondType: secondType,
                    id: res.id
                }
            return x 
        })
    }
    geracao.pokemon.splice(0, (min-1))
    return geracao
}

function getGen(numGen) {
    geracao = null
    switch(numGen) {
        case 1:
            var geracao = {
                geracao: "Geração I",
                pokemon: []
            }
            geracao = getGeracao(geracao, 1, 151)
            break
        case 2:
            var geracao = {
                geracao: "Geração II",
                pokemon: []
            }
            geracao = getGeracao(geracao, 152, 251)
            break
        case 3:
            var geracao = {
                geracao: "Geração III",
                pokemon: []
            }
            geracao = getGeracao(geracao, 252, 386)
            break
        case 4:
            var geracao = {
                geracao: "Geração IV",
                pokemon: []
            }
            geracao = getGeracao(geracao, 387, 493)
            break
        case 5:
            var geracao = {
                geracao: "Geração V",
                pokemon: []
            }
            geracao = getGeracao(geracao, 494, 649)
            break
        case 6:
            var geracao = {
                geracao: "Geração VI",
                pokemon: []
            }
            geracao = getGeracao(geracao, 650, 721)
            console.log(geracao)
            break
        case 7:
            var geracao = {
                geracao: "Geração VII",
                pokemon: []
            }
            geracao = getGeracao(geracao, 722, 809)
            break
        case 8:
            var geracao = {
                geracao: "Geração VIII",
                pokemon: []
            }
            geracao = getGeracao(geracao, 810, 905)
            break
        case 9:
            var geracao = {
                geracao: "Geração IX",
                pokemon: []
            }
            geracao = getGeracao(geracao, 906, 1025)
            break
        default:
            console.log("Não foi possivel requisitar essa geração")
    }
    return geracao
    
}

module.exports = {getGen}