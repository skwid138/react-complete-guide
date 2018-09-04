import React, { Component } from 'react'
import './App.css'
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Hunter', age: 27 },
      { name: 'Banjo', age: 2 },
      { name: 'Jerry', age: 83 }
    ],
    otherState: 'someother value',
    showPersons: false
  }

  // naming methods with 'Handler' that are not called, but are assigned to events is a recomended naming convention
  switchNameHandler = newName => {
    // console.log('it was clicked');
    // ! Don't mutate the state like this --> this.state.persons[0].name = 'reggie';

    /* This will merge with the predefined state object */
    this.setState(
      {
        persons: [
          { name: 'Hunter', age: 27 },
          { name: 'Banjo', age: 2 },
          { name: newName, age: 83 }
        ]
      }
    )
  }

  nameChangeHandler = event => {
    this.setState(
      {
        persons: [
          { name: 'Hunter', age: 27 },
          { name: event.target.value, age: 2 },
          { name: 'Jubroni', age: 83 }
        ]
      }
    )
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow})
  }

  /* When passing method references using bind is typically a better option then using a fat arrow to call the method */

  render() {
    /* Using Style like this is a way to scope the styles, but only allows for inline styles which makes certain things more difficult */
    const style = {
      backgroundColor: 'white',
      font: 'inheirt',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let persons = null

    if (this.state.showPersons) {
      persons = (
        <div>
          { 
            this.state.persons.map(person => {
              return (
                <Person 
                  name={ person.name } 
                  age={ person.age } 
                />
              )
            }) 
          }
        </div>
      )
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
        <p>It's working?</p>
        <button
          style={ style }
          onClick={ this.togglePersonHandler }>
          Show People
        </button>
        
        { persons }

      </div>
    )

    // return React.createElement('div', {className:'App'}, React.createElement('h1', null,'worrrrrd'))
  }
}

export default App
