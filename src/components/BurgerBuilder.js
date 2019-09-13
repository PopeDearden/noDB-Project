import React from 'react'
import lettuce from './images/lettuce1.png'
import bottombun from './images/bottombun1.png'
import tomato from './images/tomato1.png'
import topbun from './images/topbun1.png'
import meat from './images/meat.png'
import test from './images/secondtest.png'
import magic from './images/magicsauce.png'

const BurgerBuilder = ({ clearBurgerItem, burgerBuild: { id, name } }) => (
  // use () for implicit return
  // use alt shift f for autoformat
  // destructure props in parameters
  <div className='BurgerBuilder'>
    <img
      onClick={() => clearBurgerItem(id)}
      src={name === 'lettuce' ? lettuce
        : name === 'tomato' ? tomato
          : name === 'bottom bun' ? bottombun
            : name === 'top bun' ? topbun
              : name === 'meat' ? meat
                : name === 'magic sauce' ? magic
                  : test}
      alt={name}
    />
  </div>
)

export default BurgerBuilder