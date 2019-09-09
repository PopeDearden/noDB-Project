import React, { Component } from 'react'
// import IngredientList from './IngredientList'
// import lettuce from './images/lettuce1.png'
// import bottombun from './images/bottombun1.png'
// import tomato from './images/tomato1.png'
// import topbun from './images/topbun1.png'
// import meat from './images/meat.png'
// import test from './images/secondtest.png'

export default class BurgerCollection extends Component {
    constructor() {
        super()
        this.state = {
            editToggle: false,
            rename: ''
        }
        this.save = this.save.bind(this)
    }
    handleChange(e) {
        this.setState({ rename: e.target.value })
    }
    toggle() {
        this.setState(prevState => ({ editToggle: !prevState.editToggle }))
    }
    save() {
        this.props.saveFn(this.props.burgers.id, {newName: this.state.rename})
        this.toggle()
      }
    
    render() {

        return (
            <div className='BurgerCollection'>
                {this.state.editToggle ? (
                    <div className="editor">
                        <input onChange={e => this.handleChange(e)} />
                        <button onClick={() => this.save()}>
                            Save
            </button>
                        <button onClick={() => this.toggle()}>Cancel</button>
                    </div>
                ) : (
                        <h1 onDoubleClick={() => this.toggle()}>{this.props.burgers.name}</h1>
                    )}
               
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