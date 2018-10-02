import React from 'react';
import PropTypes from 'prop-types';

const Controls = ({ setIndexes }) => {
	return (
		<React.Fragment>
			<button
				className="controls__btn controls__btn--newQuote"
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
				<button className="controls__btn controls__btn--tweet">
					Tweet this!
				</button>
			</a>
		</React.Fragment>
	);
};

export default Controls;
