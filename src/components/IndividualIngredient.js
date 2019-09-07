import React, { Component } from 'react'
import lettuce from './images/lettuce1.png'
import bottombun from './images/bottombun1.png'
import tomato from './images/tomato1.png'
import topbun from './images/topbun1.png'
import meat from './images/meat.png'
import test from './images/secondtest.png'

export default class IndividualIngredient extends Component {

  render() {
  
    return (
      <div className='IndividualIngredient'>
       <img src= {this.props.ingredientData.name === 'lettuce' ? lettuce
            : this.props.ingredientData.name === 'tomato' ? tomato
            : this.props.ingredientData.name === 'bottom bun' ? bottombun
            : this.props.ingredientData.name === 'top bun' ? topbun
            : this.props.ingredientData.name === 'meat' ? meat
            : test } 
          alt={this.props.ingredientData.name}/>
        <button onClick = {()=>this.props.addIngredient(this.props.ingredientData)}>add</button>
          
      </div>

    )
  }
}