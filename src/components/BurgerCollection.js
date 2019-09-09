import React, { Component } from 'react'

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
        const {ingredients, name} = this.props.burgers
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
                        <h1 onDoubleClick={() => this.toggle()}>{name}</h1>
                    )}
               
                <ol>{ingredients.map((el, index) => (
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