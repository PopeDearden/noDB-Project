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
app.get('/api/savedburgers', ingredientsCtrl.getBurgers)
app.post('/api/ingredients', ingredientsCtrl.buildBurger)
app.delete('/api/ingredients/:id', ingredientsCtrl.deleteItem)
app.put('/api/savedName/:id', ingredientsCtrl.updateBurger)
app.post('/api/saveburger', ingredientsCtrl.saveBurger)
app.listen(SERVER_PORT, () => console.log(`${SERVER_PORT} burgers being made`))
app.delete('/api/clearedBurger', ingredientsCtrl.clearBurger)