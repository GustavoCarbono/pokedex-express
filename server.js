const express = require('express')
const app = express()
const pokeRouter = require('./router/pokemon')
const genRouter = require('./router/geracao')

app.set('views', './views');
app.set('view engine', 'ejs')

app.use("/pokemon", pokeRouter)
app.use("/generation", genRouter)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index', {text: "ola mundo"})
})



app.listen(3000, console.log("Server on"))