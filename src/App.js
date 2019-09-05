import React, { Component } from 'react'
import './App.css'
import axios from 'axios'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      ingredients: []
    }
    // this.getIngredients = this.getIngredients.bind(this)

  }

  componentDidMount() {
    axios.get('/api/ingredients').then(res => {
      console.log(res.data)
      this.setState({ ingredients: res.data })
    })
  }
  render() {
    return (
      <div className="App">
      
      </div>
    )
  }
}