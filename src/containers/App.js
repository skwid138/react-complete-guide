import React, { PureComponent } from 'react';
import classes from './App.css';
import People from '../components/People/People';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Aux';
import withClass from '../hoc/WithClass';

/* Components that manage state should do very little UI manipulation */
/* Their render output should be lean with little JSX */
/* Containers are stateful and will track and update state */

/* As of 16.3 createContext method can be used, it takes an optional default value as an argument */
/* props will usually be the prefered method for passing data around, but */
/* for global data like user auth this is a way to tie components together */
export const AuthContext = React.createContext(false);

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
		showPeople: false,
		toggleClicked: 0,
		authenticated: false
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
		/* Do not reference this.state inside of the setState method as it is asynchronous */
		// this.setState({
		// 	showPeople: !this.state.showPeople,
		// 	toggleClicked: this.state.toggleClicked + 1
		// });

		this.setState((prevState, props) => {
			return {
				showPeople: !prevState.showPeople,
				toggleClicked: prevState.toggleClicked + 1
			};
		});
	};

	loginHandler = () => {
		this.setState({authenticated: true});
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
		// classes={ classes.App }
		return (
			<Aux>
				<button onClick={ () => this.setState({showPeople: true}) }>Show People</button>
				<Cockpit
					login={ this.loginHandler }
					appTitle={ this.props.title }
					showPeople={ this.state.showPeople }
					people={ this.state.people }
					clicked={ this.togglePersonHandler }/>
				<AuthContext.Provider value={ this.state.authenticated }>
					{ people }
				</AuthContext.Provider>
			</Aux>
		);
	}
}

export default withClass(App, classes.App);