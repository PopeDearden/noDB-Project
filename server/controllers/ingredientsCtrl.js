const axios = require('axios')
const ingredients = require ('./data.js')

module.exports = {
  getIngredients: (req, res) => {
          res.status(200).send(ingredients)
        }
}

