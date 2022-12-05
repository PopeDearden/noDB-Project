import React from 'react'
import lettuce from './images/lettuce1.png'
import bottombun from './images/bottombun1.png'
import tomato from './images/tomato1.png'
import topbun from './images/topbun1.png'
import meat from './images/meat.png'
import test from './images/secondtest.png'
import magic from './images/magicsauce.png'

const RecipeImage = (props)=> {
    return (
      <div className='RecipeImage' style={{zIndex: `${props.key}`}}>
       <img  
        src= {props.ingredients.name === 'lettuce' ? lettuce
            : props.ingredients.name === 'tomato' ? tomato
            : props.ingredients.name === 'bottom bun' ? bottombun
            : props.ingredients.name === 'top bun' ? topbun
            : props.ingredients.name === 'meat' ? meat
            : props.ingredients.name === 'magic sauce' ? magic
            : test } 
          alt={props.ingredients.name}/>
          
      </div>

    )
}
export default RecipeImage