require('dotenv').config()
const express = require('express')
const app = express()
const {SERVER_PORT} = process.env
const ingredientsCtrl = require ('./controllers/ingredientsCtrl')
// const ingredients = require('./data')




// TOP LEVEL MIDDLEWARE
app.use(express.json())

// ENDPOINTS
app.get('/api/ingredients', ingredientsCtrl.getIngredients)


app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} things be happening`))