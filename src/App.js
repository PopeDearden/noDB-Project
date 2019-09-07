import React, { Component } from 'react'
import './App.css'
import axios from 'axios'
import IngredientDisplay from './components/IngredientDisplay'
import BurgerBuild from './components/BurgerBuild'
import SavedBurgerDisplay from './components/SavedBurgerDisplay'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      ingredients: [],
      burgerBuild: [],
    }
    // this.getIngredients = this.getIngredients.bind(this)
    this.addIngredient = this.addIngredient.bind(this)
    this.clearBurgerItem = this.clearBurgerItem.bind(this)
  }

  componentDidMount() {
    axios.get('/api/ingredients').then(res => {
      // console.log(res.data)
      this.setState({ ingredients: res.data })
    })
  }

  addIngredient(body) {
    axios.post('/api/ingredients', body).then(res => {
      this.setState({ burgerBuild: res.data })
    })
    // console.log(this.state.burgerBuild)
  }
 

  clearBurgerItem(id) {
    // console.log(id)
    axios.delete(`/api/ingredients/${id}`).then(res => {
      this.setState({ burgerBuild: res.data })
    })
  }

  render() {
    return (
      <div className="App">
        <div className="TopPart">
          <IngredientDisplay
            ingredients={this.state.ingredients}
            addIngredient={this.addIngredient} />
          <BurgerBuild
            burgerBuild={this.state.burgerBuild}
            clearBurgerItem={this.clearBurgerItem} />

        </div>
        <SavedBurgerDisplay
        />
      </div>
    )
  }
}