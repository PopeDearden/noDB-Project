import React, { Component } from 'react'
import BurgerBuilder from './BurgerBuilder'
import axios from 'axios'
export default class BurgerBuild extends Component {
    constructor() {
        super()
        this.state = {
            savedBurgers: [],
        }
        // use an arrow function to avoid need to bind
        // this.saveBurger = this.saveBurger.bind(this)
    }

    // use an arrow function here to avoid need to bind
    saveBurger = body => {
        // can destructure res.data here
        axios.post('api/saveburger', body).then(({ data }) => {
            this.setState({ savedBurgers: data })

            // console.log (this.state.savedBurgers)
        }).catch(error => {
            alert('thing didnt work')
        })
        this.props.clearBurger()
    }

    render() {
        // destructure props up here
        const {
            props: {
                burgerBuild,
                clearBurger,
                clearBurgerItem,
            },
            saveBurger,
        } = this;

        return (
            <div className='BurgerBuild'>
                {/* <h1>Burger Maker:</h1> */}
                <div className='BurgerButtons'>
                    <button onClick={() => saveBurger(burgerBuild)}>Save</button>
                    <button onClick={() => clearBurger()}>Clear</button>
                </div>
                <div className='BurgerIngredients'>
                    {burgerBuild.map((el, index) => ( // use () for implicit return
                        <BurgerBuilder
                            clearBurgerItem={clearBurgerItem}
                            key={index}
                            burgerBuild={el}
                        />
                        // put closing curly braces on the same ling
                        // also use auto formatting (alt shift f)
                    ))}
                    {/* {this.props.burgerBuild.map((el, index) => {
                    // console.log(el)
                    return <BurgerBuilder
                        clearBurgerItem={this.props.clearBurgerItem}
                        key={index}
                        burgerBuild={el} />
                }
                )
                } */}
                </div>

            </div>
        )
    }
}