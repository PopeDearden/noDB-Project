import React, { Component } from 'react'
import BurgerBuilder from './BurgerBuilder'
import axios from 'axios'
export default class BurgerBuild extends Component {
    constructor() {
        super()
        this.state = {
            savedBurgers: [],
        }
       this.saveBurger = this.saveBurger.bind(this)
    }

    saveBurger(body) {
        axios.post('api/saveburger', body).then(res => {
            this.setState({ savedBurgers: res.data })
            
            // console.log (this.state.savedBurgers)
        }).catch(error => {
            alert('thing didnt work')
        })
        this.props.clearBurger()
    }
    


    render() {

        return (
            <div className='BurgerBuild'>
                    {/* <h1>Burger Maker:</h1> */}
                <div className='BurgerButtons'>
            <button onClick={()=>this.saveBurger(this.props.burgerBuild)}>Save</button>
            <button onClick={()=>this.props.clearBurger()}>Clear</button>
                </div>
                <div className='BurgerIngredients'>

                {this.props.burgerBuild.map((el, index) => {
                    // console.log(el)
                    return <BurgerBuilder
                        clearBurgerItem={this.props.clearBurgerItem}
                        key={index}
                        burgerBuild={el} />
                }
                )
                }
                </div>

            </div>
        )
    }
}