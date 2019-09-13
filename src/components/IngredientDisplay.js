import React, { Component } from 'react'
import IndividualIngredient from './IndividualIngredient'

export default ({ ingredients, addIngredient }) => (
    <div className='ingredientBar'>
        <h1>Ingredients!</h1>
        {ingredients.map(el => (
            <IndividualIngredient
                key={el.name}
                ingredientData={el}
                addIngredient={addIngredient}
            />
        ))}
    </div>
)

// export default class IngredientDisplay extends Component {

//   render() {
//     // const {ingredientBar} = this.props

//     return (
//       // const {this.props.ingredients} = ingredients
//       <div className='ingredientBar'>
//         <h1>Ingredients!</h1>
//         {this.props.ingredients.map(el => (
//           <IndividualIngredient 
//           key = {el.name}
//           ingredientData = {el} 
//           addIngredient = {this.props.addIngredient}/>
//         )
//         )
//         }
//       </div>
//     )
//   }
// }