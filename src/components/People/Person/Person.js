import React, { Component } from 'react';
import classes from './Person.css';
/* Components are stateless or "functional" and typically will not manipulate state */

/* When using class based components this.props must be used */
/* props,children allows you to access anything passed between the component tags */
class Person extends Component {
	render() {
		console.log('[Person.js] Inside render()');
		return (
			<div className={ classes.Person }>
				<p onClick={ this.props.click }>I&apos;m { this.props.name } and I&apos;m { this.props.age } years old.</p>
				<p>{ this.props.children }</p>
				<input type="text" onChange={ this.props.changed } value={ this.props.name }/>
			</div>
		);
	}
}

export default Person;