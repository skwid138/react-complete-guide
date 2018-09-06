import React from 'react';
import Person from './Person/Person';

/* Takes an array of people objects, then loops through and adds */
/* a click handler, and a change handler */
const people = props => (props.people.map((person, index) => {
	return (<Person
		key={ person.id }
		click={ () => props.clicked(index) }
		name={ person.name }
		age={ person.age }
		changed={ event => props.changed(event, person.id) }/>
	);
}));

export default people;