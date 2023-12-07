const express = require('express')
const mydb = require('./config/db')

const app = express(); //object from express
const rout = require('./routes/routers')
//TODO this new i dont now this 
const bodyparser = require('body-parser')
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use(rout)


app.listen(3001, () => {
    console.log('server is runneing...')
})

