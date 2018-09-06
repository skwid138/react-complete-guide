import React, { Component } from 'react';

/* Error Boundaries should only be used when the developer cannot control the outcome */
/* Otherwise the error is likely in the code and should be fixed there */
/* This is a way to keep the app working aside from the problem component */

class ErrorBoundary extends Component {
	state = {
		hasError: false,
		errorMessage: ''
	}

	componentDidCatch = (error, info) => {
		this.setState({hasError: true, errorMessage: error});
	}

	render() {
		if (this.state.hasError) {
			return (
				<h1>{ this.state.errorMessage }</h1>
			);
		} else {
			return this.props.children;
		}
	}

}

export default ErrorBoundary;