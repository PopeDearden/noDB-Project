import React from 'react'
import lettuce from './images/lettuce1.png'
import bottombun from './images/bottombun1.png'
import tomato from './images/tomato1.png'
import topbun from './images/topbun1.png'
import meat from './images/meat.png'
import test from './images/secondtest.png'
import magic from './images/magicsauce.png'

const BurgerBuilder = (props) => {
  console.log(props.level)
  return (
    <div className='BurgerBuilder' style={{ zIndex: `${props.level}` }}>
      <img onClick={() => props.clearBurgerItem(props.burgerBuild.id)}
        src={props.burgerBuild.name === 'lettuce' ? lettuce
          : props.burgerBuild.name === 'tomato' ? tomato
            : props.burgerBuild.name === 'bottom bun' ? bottombun
              : props.burgerBuild.name === 'top bun' ? topbun
                : props.burgerBuild.name === 'meat' ? meat
                  : props.burgerBuild.name === 'magic sauce' ? magic
                    : test}
        alt={props.burgerBuild.name} />

    </div>

  )
}
export default BurgerBuilder