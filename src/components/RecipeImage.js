import React from 'react'
import lettuce from './images/lettuce1.png'
import bottombun from './images/bottombun1.png'
import tomato from './images/tomato1.png'
import topbun from './images/topbun1.png'
import meat from './images/meat.png'
import test from './images/secondtest.png'
import magic from './images/magicsauce.png'

// This component and IndividualIngredient and BurgerBuild could all be made into a single component
// you just have to add a className prop and a conditional button (for individual ingredient),
// as well as an onclick (for burger build)

// console.log(`${props.ingredients.name}`)
const RecipeImage = ({ ingredients: { name } }) => (
    <div className='RecipeImage'>
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
    </div>
)

export default RecipeImage