import React, { Component } from 'react'
import lettuce from './images/lettuce1.png'
import bottombun from './images/bottombun1.png'
import tomato from './images/tomato1.png'
import topbun from './images/topbun1.png'
import meat from './images/meat.png'
import test from './images/secondtest.png'

export default class BurgerBuilder extends Component {

  render() {
  
    return (
      <div className='BurgerBuilder'>
       <img  onClick={()=>this.props.clearBurgerItem(this.props.burgerBuild.id)}
        src= {this.props.burgerBuild.name === 'lettuce' ? lettuce
            : this.props.burgerBuild.name === 'tomato' ? tomato
            : this.props.burgerBuild.name === 'bottom bun' ? bottombun
            : this.props.burgerBuild.name === 'top bun' ? topbun
            : this.props.burgerBuild.name === 'meat' ? meat
            : test } 
          alt={this.props.burgerBuild.name}/>
          
      </div>

    )
  }
}