const express = require('express')
const app = express()
const pokeRouter = require('./router/pokemon')

app.set('views', './views');
app.set('view engine', 'ejs')

app.use("/pokemon", pokeRouter)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})



app.listen(3000, console.log("Server on"))