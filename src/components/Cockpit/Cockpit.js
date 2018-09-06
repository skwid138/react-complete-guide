import React from 'react';
import classes from './Cockpit.css';
/* Components are stateless or "functional" and typically will not manipulate state */

const cockpit = props => {

	/* Dynamically build class list to apply to p tag below */
  	/* p tag uses join with white space to make sure classes are separated */
	const assignedClasses = [];
	let btnClass = '';

	if (props.showPeople) {
		btnClass = classes.Red;
	}


  	if (props.people.length <= 2) {
  		assignedClasses.push(classes.red);
  	}
  	if (props.people.length <=1) {
  		assignedClasses.push(classes.bold);
  	}

	return (
		<div className={ classes.Cockpit }>
			<h1>Hi, I&apos;m a React app?</h1>
			<h3>{ props.appTitle }</h3>
  			<p className={ assignedClasses.join(' ') }>Cow Party Anyone?</p>
  			<button
			  className={ btnClass }
  				onClick={ props.clicked }>
				Toggle People
  			</button>
		</div>
	);
};

export default cockpit;