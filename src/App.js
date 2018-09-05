import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person';

// ? https://www.npmjs.com/package/eslint-plugin-react

class App extends Component {
  state = {
  	persons: [
  		{ id: 1, name: 'Hunter', age: 27 },
  		{ id: 2, name: 'Banjo', age: 2 },
  		{ id: 3, name: 'Jerry', age: 83 }
  	],
  	otherState: 'someother value',
  	showPersons: false
  };

  deletePersonHandler = personIndex => {
  	// To avoid mutating the original array "immutable"
  	const persons = [...this.state.persons];

  	persons.splice(personIndex, 1); // remove the person

  	this.setState({persons: persons}); // update state
  };

  nameChangeHandler = (event, id) => {
  	const personIndex = this.state.persons.findIndex(person => {
  		return person.id === id;
  	});

  	const person = {...this.state.persons[personIndex]};

  	person.name = event.target.value;

  	const persons = [...this.state.persons];
  	persons[personIndex] = person;

  	this.setState({persons: persons});
  };

  togglePersonHandler = () => {
  	const doesShow = this.state.showPersons;
  	this.setState({showPersons: !doesShow});
  };

  /* When passing method references using bind is typically a better option then using a fat arrow to call the method */

  render() {
  	/* Using Style like this is a way to scope the styles, but only allows for inline styles which makes certain things more difficult */
  	const style = {
  		backgroundColor: 'green',
  		color: 'white',
  		font: 'inheirt',
  		border: '1px solid blue',
  		padding: '8px',
  		cursor: 'pointer'
  	};

  	let persons = null;

  	if (this.state.showPersons) {
  		persons = (
  			<div>
  				{
  					this.state.persons.map((person, index) => {
  						return (
  							<Person
  								click={() => this.deletePersonHandler(index) }
  								name={ person.name }
  								age={ person.age }
  								key={ person.id }
  								changed={ event => this.nameChangeHandler(event, person.id) }
  							/>
  						);
  					})
  				}
  			</div>
  		);

  		style.backgroundColor = 'red';
  	}

  	/* Dynamically build class list to apply to p tag below */
  	/* p tag uses join with white space to make sure classes are separated */
  	const assignedClasses = [];
  	if (this.state.persons.length <= 2) {
  		assignedClasses.push(classes.red);
  	}
  	if (this.state.persons.length <=1) {
  		assignedClasses.push(classes.bold);
  	}

  	return (
  		<div className={ classes.App }>
  			<h1>Hi, I&apos;m a React app</h1>
  			<p className={ assignedClasses.join(' ') }>It&apos;s working?</p>
  			<button
  				style={ style }
  				onClick={ this.togglePersonHandler }>
				Show People
  			</button>
  			{ persons }
  		</div>
  	);

  	// return React.createElement('div', {className:'App'}, React.createElement('h1', null,'worrrrrd'))
  }
}

export default App;
