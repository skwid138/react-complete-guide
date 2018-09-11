import React, { Component } from 'react';
import classes from './Person.css';
import WithClass from '../../../hoc/WithClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

/* Components are stateless or "functional" and typically will not manipulate state */

/* When using class based components this.props must be used */
/* props,children allows you to access anything passed between the component tags */
class Person extends Component {

	constructor(props) {
		super(props);
		console.log('[Person.js] Inside Constructor', props);
		/* as of 16.3 Ref can be used like so */
		this.inputElement = React.createRef();
	}

	componentDidMount() {
		console.log('[UPDATE Person.js] Inside componentDidUpdate()');
		this.inputElement.current.focus();
	}

	focus() {
		this.inputElement.current.focus();
	}

	render() {
		console.log('[Person.js] Inside render()');
		/* the ref attribute is a react specific thing and is only available to stateful components */
		/* ref should mostly be used for focus or media playback not adding style or other dynamic things */
		return (
			<Aux>
				{ this.props.authenticated ? <p>I&apos;m auth&apos;d!</p> : null }
				<p onClick={ this.props.click }>I&apos;m { this.props.name } and I&apos;m { this.props.age } years old.</p>
				<p>{ this.props.children }</p>
				<input
					ref={ this.inputElement }
					/* older way --> ref={ (inp) => this.inputElement = inp } */
					type="text"
					onChange={ this.props.changed }
					value={ this.props.name }/>
			</Aux>
		);
	}
}

Person.propTypes = {
	click: PropTypes.func,
	name: PropTypes.string,
	age: PropTypes.number,
	changed: PropTypes.func
};

export default WithClass(Person, classes.Person);