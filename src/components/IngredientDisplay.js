import React, {Component} from 'react'

export default class IngredientDisplay extends Component {
 
    render() {
      const {pokemonData} = this.props
  
      return (
        <div className='lettuceBar'>
          
          <img 
            src={this.} 
            alt={pokemonData.name}/>
        </div>
      )
    }
  }