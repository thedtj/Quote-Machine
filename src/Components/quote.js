import React, { Component } from 'react';
import { Quotes, Sources } from './Data';

class Quote extends Component {
	render() {
		return (
			<div className="quote__container">
				<div className="quote__content" id="text">
					"{Quotes[this.props.quoteIndex]}"
				</div>
				<div className="quote__source" id="author">
					- {Sources[this.props.sourceIndex]}
				</div>
			</div>
		);

		{
			/* // return <div className="quote-container">{quote}</div>; */
		}
	}
}

export default Quote;
