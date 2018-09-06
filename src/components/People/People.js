import React, { Component } from 'react';
import Person from './Person/Person';
/* Components are stateless or "functional" and typically will not manipulate state */

/* Takes an array of people objects, then loops through and adds */
/* a click handler, and a change handler */
class People extends Component {
	render () {
		return this.props.people.map((person, index) => {
			return (<Person
				key={ person.id }
				click={ () => this.props.clicked(index) }
				name={ person.name }
				age={ person.age }
				changed={ event => this.props.changed(event, person.id) }/>
			);
		});
	}
}

export default People;