import React, { Component } from 'react'
// import IngredientList from './IngredientList'
// import lettuce from './images/lettuce1.png'
// import bottombun from './images/bottombun1.png'
// import tomato from './images/tomato1.png'
// import topbun from './images/topbun1.png'
// import meat from './images/meat.png'
// import test from './images/secondtest.png'

export default class BurgerCollection extends Component {

    render() {

        return (
            <div className='BurgerCollection'>
                <h1>{this.props.burgers.name}</h1>
                <ol>{this.props.burgers.ingredients.map((el, index) => (
                    <li key={index}> {el.name}
                    </li>

                )
                )
                }
                </ol>

            </div>

        )
    }
}