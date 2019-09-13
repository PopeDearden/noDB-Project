import React, { Component } from 'react'
import axios from 'axios'
import BurgerCollection from './BurgerCollection'
// import lettuce from './images/lettuce1.png'
// import bottombun from './images/bottombun1.png'
// import tomato from './images/tomato1.png'
// import topbun from './images/topbun1.png'
// import meat from './images/meat.png'
// import test from './images/secondtest.png'

export default class SavedBurgerDisplay extends Component {
  constructor() {
    super()
    this.state = {
      burgers: [],
    }
    this.saveName = this.saveName.bind(this)
    this.deleteBurger = this.deleteBurger.bind(this)
    // this.refreshBurgers=this.refreshBurgers(this)
    //   this.loadBurgers = this.loadBurgers.bind(this)
  }


  refreshBurgers() {
    axios.get('/api/savedburgers').then(res => {
      this.setState({ burgers: res.data })
      console.log(this.state.burgers)
      console.log('refreshed')
    })
  }

  saveName(id, body) {
    axios.put(`/api/savedName/${id}`, body).then(res => {
      this.setState({ burgers: res.data })
    })
    this.refreshBurgers()
  }

  deleteBurger(id) {
    axios.delete(`api/ingredientsDead/${id}`).then(res => {
      this.setState({ burgers: res.data })
    })
    this.refreshBurgers()
  }

  render() {
    return (
      <div className='SavedBurgersRow'>
        <div className='GetRecipie'>
          <button onClick={() => this.refreshBurgers()}>Get Recipe</button>
        </div>
        <div className='SavedBurgers'>


          {this.state.burgers.map(el => (
            <BurgerCollection
              deleteBurger={this.deleteBurger}
              key={el.name}
              burgers={el}
              saveFn={this.saveName}
            />
          ))}
        </div>
      </div>
    )
  }
}
