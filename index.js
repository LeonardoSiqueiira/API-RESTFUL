// CONFIG INICIAL

const express = require("express")
const mongoose = require("mongoose")
require('dotenv').config()
const app = express()




// LER JSON

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json())

// ROTAS API 

const personrouter = require("./routes/personrouter")
app.use('/person', personrouter)


// ROTA INICIAL / ENDPOINT

app.get('/', (req, res) => {

    // mostrar req

    res.json({message: 'Oi express'})
})

// ENTREGAR UMA PORTA
const DB_USE = process.env.DB_USER
const DB_PASS = encodeURIComponent(process.env.DB_PASS)

mongoose
.connect(
    `mongodb+srv://${DB_USE}:${DB_PASS}@apicluster.q2enkqp.mongodb.net/bancodaapi?retryWrites=true&w=majority`
)
.then(() => {
    console.log('Conectado ao MongoDB')
    app.listen(3000)
})
.catch((err) => console.log(err))

