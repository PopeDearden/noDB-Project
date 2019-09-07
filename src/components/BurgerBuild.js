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
        })
    }


    render() {

        return (
            <div className='BurgerBuild'>
            <button onClick={()=>this.saveBurger(this.props.burgerBuild)}>saveBurger</button>
                {this.props.burgerBuild.map((el, index) => {
                    // console.log(el)
                    return <BurgerBuilder
                        clearBurgerItem={this.props.clearBurgerItem}
                        key={index}
                        burgerBuild={el} />
                }
                )
                }
                {/* {console.log(this.props.burgerBuild)} */}

            </div>
        )
    }
}