import React, { Component } from 'react'
import RecipeImage from './RecipeImage'

export default class BurgerCollection extends Component {
  constructor() {
    super()
    this.state = {
      editing: false,
      rename: ''
    }
    this.save = this.save.bind(this)
    this.delete = this.delete.bind(this)
  }
  handleChange(e) {
    this.setState({ rename: e.target.value })
  }
  toggle() {
    this.setState(prevState => ({ editing: !prevState.editing }))
  }
  save() {
    this.props.saveFn(this.props.burgers.id, { newName: this.state.rename })
    this.toggle()
  }
  delete() {
    this.props.deleteBurger(this.props.burgers.id)
    console.log('did a thing')
  }


  render() {
    // destructure everything up here
    // const { ingredients, name, id } = this.props.burgers
    const {
      props: {
        burgers: {
          ingredients,
          name,
          id,
        },
      },
      state: {
        // editToggle,
        // editToggle sounds like a function or a component
        // participles are good for boolean values
        editing,
      },
      handleChange,
      save,
      toggle,
      _delete,
    } = this;

    // results in cleaner JSX
    // and a very nice list of variables up there ^^
    return (
      <div className='BurgerCollection'>
        {editing ? (
          <div className="editor">
            <input onChange={e => handleChange(e)} />
            <button onClick={() => save()}>
              Save
                        </button>
            <button onClick={() => toggle()}>Cancel</button>
          </div>
        ) : (
            <h1 onDoubleClick={() => toggle()}>{name}</h1>
          )}
        <div className="RecipeContent">
          <ol>
            {ingredients.map((el, index) => (
              <li key={index}> {el.name}
              </li>
            ))}
          </ol>
          <div className='Little'>
            {ingredients.map((el, index) =>
              <RecipeImage
                key={index}
                ingredients={el} />
            )}
            <button onClick={() => _delete(id)}>X</button>
          </div>
        </div>
      </div>
    )
  }
}