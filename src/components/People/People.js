/* A pure component will make sure to check for props and state changes */
/*  with the shouldComponentUpdate method and return false if nothing has changed */
/* Should only use pure components where updates may not be required and the check */
/* is not happening further up the component tree */
import React, { PureComponent } from 'react';
import Person from './Person/Person';
/* Components are stateless or "functional" and typically will not manipulate state */

/* Takes an array of people objects, then loops through and adds */
/* a click handler, and a change handler */
class People extends PureComponent {
	constructor(props) {
		super(props);
		console.log('[People.js] Inside Constructor', props);
		this.lastPersonRef = React.createRef();
	}

	/* Happens first */
	componentWillMount() {
		console.log('[People.js] Inside componentWillMount()');
	}

	/* Called after componentWillMount() */
	componentDidMount() {
		console.log('[People.js] Inside componentDidMount()');
	}

	/* Called after componentDidMount() */
	componentWillReceiveProps(nextProps) {
		console.log('[UPDATE People.js] Inside componentWillReceiveProps()', nextProps);
	}

	/* Called after componentWillReceiveProps() */
	/* This method must return true or false, returning false will stop the app from rendering the changes */
	// shouldComponentUpdate(nextProps, nextState) {
	// 	console.log('[UPDATE People.js] Inside shouldComponentUpdate()', nextProps, nextState);
	// 	return nextProps.people !== this.props.people;
	// 	//return true;
	// }

	/* Called after componentWillUpdate() */
	componentWillUpdate(nextProps, nextState) {
		console.log('[UPDATE People.js] Inside componentWillUpdate()', nextProps, nextState);
	}

	/*  Called after render() */
	componentDidUpdate() {
		console.log('[UPDATE People.js] Inside componentDidUpdate()');
	}

	/* Called after componentWillUpdate() */
	render () {
		return this.props.people.map((person, index) => {
			return (<Person
				click={ () => this.props.clicked(index) }
				name={ person.name }
				position={ index }
				age={ person.age }
				authenticated={ this.props.isAuthenticated }
				ref={ this.lastPersonRef }
				key={ person.id }
				changed={ event => this.props.changed(event, person.id) }/>
			);
		});
	}
}

export default People;