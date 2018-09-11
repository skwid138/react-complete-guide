import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
/* Components are stateless or "functional" and typically will not manipulate state */

/* When using class based components this.props must be used */
/* props,children allows you to access anything passed between the component tags */
class Person extends Component {
	render() {
		console.log('[Person.js] Inside render()');
		return (
			<Aux>
				<p onClick={ this.props.click }>I&apos;m { this.props.name } and I&apos;m { this.props.age } years old.</p>
				<p>{ this.props.children }</p>
				<input type="text" onChange={ this.props.changed } value={ this.props.name }/>
			</Aux>
		);
	}
}

export default WithClass(Person, classes.Person);