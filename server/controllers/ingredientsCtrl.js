const axios = require('axios')
const ingredients = require('./data.js')

let builtBurger = []
const savedBurgers = []
let counter = 0
let burgerCounter = 0
module.exports = {
  getIngredients: (req, res) => {
    res.status(200).send(ingredients)
  },
  buildBurger: (req, res) => {
    const burger = {
      name: req.body.name,
      value: req.body.value,
      id: ++counter
    }
    builtBurger.push(burger)
    res.status(200).send(builtBurger)
  },
  deleteItem: (req, res) => {
    const { id } = req.params
    // console.log(id)
    const index = builtBurger.findIndex(el => el.id === +id) // find the burgerItem of the pokemon with the id we give
    builtBurger.splice(index, 1)
    // console.log(index)
    res.status(200).send(builtBurger)
  },
  saveBurger: (req, res) => {
    const savedBurger = {
      name: `Burger ${++burgerCounter}`,
      ingredients: req.body,
      id: ++burgerCounter
    }
    savedBurgers.push(savedBurger)
    console.log(savedBurgers)
    res.status(200).send(savedBurgers)
  },
  getBurgers: (req, res) => {
    res.status(200).send(savedBurgers)
  },
  updateBurger: (req, res) => {
    const { id } = req.params
    const { newName } = req.body
    const index = savedBurgers.findIndex(el => el.id === +id) // find the index of the pokemon with the id we give
    savedBurgers[index].name = newName
    res.status(200).send(savedBurgers)
  },

  clearBurger: (req, res) => {
    builtBurger.splice(0, builtBurger.length)
    res.status(200).send(builtBurger)
  }
}

