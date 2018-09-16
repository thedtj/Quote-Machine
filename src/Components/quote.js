import React, { Component } from 'react';
import { Quotes, Sources } from './Data';

class Quote extends Component {
	render() {
		return (
			<div className="quote-container">
				<h1 className="quote text-light" id="text">
					{Quotes[this.props.quoteIndex]}
				</h1>
				<div className="blockquote-footer text-light text-right" id="author">
					{Sources[this.props.sourceIndex]}
				</div>
			</div>
		);

		{
			/* // return <div className="quote-container">{quote}</div>; */
		}
	}
}

export default Quote;
