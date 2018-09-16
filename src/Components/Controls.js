import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ setIndexes }) => {
	return (
		<React.Fragment>
			<button
				className="new-quote btn btn-primary"
				id="new-quote"
				onClick={setIndexes}
			>
				Show me another!
			</button>
			<a
				href="https://twitter.com/intent/tweet"
				target="_blank"
				id="tweet-quote"
			>
				<button className="tweet btn btn-danger">Tweet this!</button>
			</a>
		</React.Fragment>
	);
};

export default Controls;
