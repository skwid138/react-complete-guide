import React, { PureComponent } from 'react';
import classes from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';

/* Components that manage state should do very little UI manipulation */
/* Their render output should be lean with little JSX */
/* Containers are stateful and will track and update state */

class App extends PureComponent {
	constructor(props) {
		super(props);
		console.log('[App.js] Inside Constructor', props);
	}

	componentWillMount() {
		console.log('[App.js] Inside componentWillMount()');
	}

	componentDidMount() {
		console.log('[App.js] Inside componentDidMount()');
	}

	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[UPDATE App.js] Inside shouldComponentUpdate()', nextProps, nextState);
	// 	return nextState.people !== this.state.people ||
	// 		nextState.showPeople !== this.state.showPeople;
	// 	//return true;
	// }

	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE App.js] Inside componentWillUpdate()', nextProps, nextState);
	}

	componentDidUpdate() {
		console.log('[UPDATE App.js] Inside componentDidUpdate()');
	}

	state = {
		people: [
			{ id: 1, name: 'Hunter', age: 27 },
			{ id: 2, name: 'Banjo', age: 2 },
			{ id: 3, name: 'Jerry', age: 83 }
		],
		showPeople: false
	};

	deletePersonHandler = personIndex => {
		const people = [...this.state.people]; // To avoid mutating the original array "immutable"
		people.splice(personIndex, 1); // remove the person

		this.setState({people: people}); // update state
	};

	nameChangeHandler = (event, id) => {
		const personIndex = this.state.people.findIndex(person => {
			return person.id === id;
		});

		const person = {...this.state.people[personIndex]};
		person.name = event.target.value;

		const people = [...this.state.people];
		people[personIndex] = person;

		this.setState({people: people});
	};

	togglePersonHandler = () => {
		this.setState({showPeople: !this.state.showPeople});
	};

	render() {
		console.log('[App.js] Inside render()');
		let people = null;
		if (this.state.showPeople) {
			people = <People
				people={ this.state.people }
				clicked={ this.deletePersonHandler }
				changed={ this.nameChangeHandler }/>;
		}

		return (
			<div className={ classes.App }>
				<button onClick={ () => this.setState({showPeople: true}) }>Show People</button>
				<Cockpit
					appTitle={ this.props.title }
					showPeople={ this.state.showPeople }
					people={ this.state.people }
					clicked={ this.togglePersonHandler }/>
				{ people }
			</div>
		);
	}
}

export default App;