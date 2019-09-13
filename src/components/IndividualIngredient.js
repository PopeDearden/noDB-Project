import React from 'react'
import lettuce from './images/lettuce1.png'
import bottombun from './images/bottombun1.png'
import tomato from './images/tomato1.png'
import topbun from './images/topbun1.png'
import meat from './images/meat.png'
import magic from './images/magicsaucedisplay.png'
import test from './images/secondtest.png'

// const { name } = props.ingredientData
// can destructure in parameters and then use () for implicit return
// also, alt shift f for autoformat
const IndividualIngredient = ({ ingredientData: { name }, addIngredient, ingredientData }) => (
  <div className='IndividualIngredient'>
    <img
      src={name === 'lettuce' ? lettuce
        : name === 'tomato' ? tomato
          : name === 'bottom bun' ? bottombun
            : name === 'top bun' ? topbun
              : name === 'meat' ? meat
                : name === 'magic sauce' ? magic
                  : test}
      alt={name}
    />
    <button onClick={() => addIngredient(ingredientData)}>
      add {name}
    </button>
  </div>
)

export default IndividualIngredient