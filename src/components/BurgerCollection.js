import React, { Component } from 'react'
import RecipeImage from './RecipeImage'

export default class BurgerCollection extends Component {
    constructor() {
        super()
        this.state = {
            editToggle: false,
            rename: ''
        }
        this.save = this.save.bind(this)
        this.delete = this.delete.bind(this)
    }
    handleChange(e) {
        this.setState({ rename: e.target.value })
    }
    toggle() {
        this.setState(prevState => ({ editToggle: !prevState.editToggle }))
    }
    save() {
        this.props.saveFn(this.props.burgers.id, { newName: this.state.rename })
        this.toggle()
    }
    delete(){
        this.props.deleteBurger(this.props.burgers.id)
        console.log('did a thing')
    }


    render() {
        const { ingredients, name, id} = this.props.burgers
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
                    <div className="RecipeContent">
                <ol>{ingredients.map((el, index) => (
                    <li key={index}> {el.name}
                    </li>
                )
                )
                }
                </ol>
                <div className='Little'>
                    {ingredients.map((el, index) =>
                        <RecipeImage
                        key={index}
                        ingredients={el} />
                        )}
<button onClick={()=>this.delete(id)}>X</button>
                </div>
                    </div>

            </div>

        )
    }
}