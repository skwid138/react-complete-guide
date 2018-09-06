import React from 'react';
import classes from './Person.css';

/* When using class based components this.props must be used */
/* props,children allows you to access anything passed between the component tags */
const person = props => (
	<div className={ classes.Person }>
		<p onClick={ props.click }>I&apos;m {props.name} and I&apos;m { props.age } years old.</p>
		<p>{ props.children }</p>
		<input type="text" onChange={ props.changed } value={ props.name }/>
	</div>
);

export default person;