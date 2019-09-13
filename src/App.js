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
    // this.addIngredient = this.addIngredient.bind(this)
    // this.clearBurgerItem = this.clearBurgerItem.bind(this)
    // this.clearBurger = this.clearBurger.bind(this)
  }

  componentDidMount() {
    axios.get('/api/ingredients').then(({ data }) => {
      // console.log(data)
      this.setState({ ingredients: data })
    })
  }

  addIngredient = body => {
    axios.post('/api/ingredients', body).then(({ data }) => {
      this.setState({ burgerBuild: data })
    })
    // console.log(this.state.burgerBuild)
  }
  clearBurger = () => {
    axios.delete(`/api/clearedBurger`).then(({ data }) => {
      this.setState({ burgerBuild: data })
    })
    console.log('cleared')
  }

  clearBurgerItem = id => {
    // console.log(id)
    axios.delete(`/api/ingredients/${id}`).then(({ data }) => {
      this.setState({ burgerBuild: data })
    })
  }

  render() {
    const {
      state: {
        ingredients,
        burgerBuild,
      },
      addIngredient,
      clearBurger,
      clearBurgerItem,
    } = this;
    return (
      <div className="App">
        <header>
          <h1>Le Holy Hamburger Originator</h1>
        </header>
        <div className="TopPart">
          <div className="LeftSide">
            <IngredientDisplay
              ingredients={ingredients}
              addIngredient={addIngredient} />
          </div>
          <div className="Middle">
            <h1>Instructions</h1>
            <ol>
              <li>Select ingredients from ingredient bar on the left side.</li>
              <li>Build Burger in order from bottom up.</li>
              <li>To remove ingredient form burger, click directly on the ingredient in the burger building display to the right. To clear the entire burger, select clear.</li>
              <li>When done, click "save".</li>
              <li>Select "Get Recipe" to view recipes of burgers you've made, scroll down to view.</li>
              <li>Select Burger title to edit name.</li>
            </ol>
            <h3>*Magic sauce, inherently has mystical properties that produce whatever flavor you desire. For example: pickles, ketchup, mustard, Dr Pepper, hot sauce, or onions. If you can dream it, the magic sauce can do it!</h3>
          </div>
          <div className="RightSide">
            <BurgerBuild
              clearBurger={clearBurger}
              burgerBuild={burgerBuild}
              clearBurgerItem={clearBurgerItem} />
          </div>
        </div>
        <SavedBurgerDisplay
        />
      </div>
    )
  }
}