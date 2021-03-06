import React, { Component } from 'react';

/* Similar to below, but this is stateful */
/* The class is anonymous which is why there is no name */
const withClass = (WrappedComponent, className) => {
	const WithClass = class extends Component {
		render() {
			return (
				<div className={ className }>
					<WrappedComponent ref={ this.props.forwardedRef } {...this.props} />
				</div>
			);
		}
	};

	return React.forwardRef((props, ref) => {
		return <WithClass {...props} forwardedRef={ ref } />;
	});
};

/* The spread operator allows props to be passed onto other components */
// const withClass = (WrappedComponent, className) => {
// 	return (props) => (
// 		<div className={ className }>
// 			<WrappedComponent {...props} />
// 		</div>
// 	);
// };

// const withClass = props => (
// 	<div className={ props.classes }>
// 		{ props.children }
// 	</div>
// );

export default withClass;