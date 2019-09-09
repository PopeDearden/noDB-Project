import React from 'react'
import lettuce from './images/lettuce1.png'
import bottombun from './images/bottombun1.png'
import tomato from './images/tomato1.png'
import topbun from './images/topbun1.png'
import meat from './images/meat.png'
import magic from './images/magicsaucedisplay.png'
import test from './images/secondtest.png'

const IndividualIngredient =(props)=> {

  
  const {name} = props.ingredientData
    return (
      <div className='IndividualIngredient'>
       <img src= {name === 'lettuce' ? lettuce
            : name === 'tomato' ? tomato
            : name === 'bottom bun' ? bottombun
            : name === 'top bun' ? topbun
            : name === 'meat' ? meat
            : name === 'magic sauce' ? magic
            : test } 
          alt={name}/>
        <button onClick = {()=>props.addIngredient(props.ingredientData)}>add {name}</button>
          
      </div>

    )
  
}
export default IndividualIngredient