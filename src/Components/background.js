import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Quote from './quote';

// const bgColors = ['1ce', 'ad0be5', '74b135', '9155ed', 'fb1'];
// const bgColor = Colors[Math.floor(Math.random() * (Colors.length - 1))];

class Background extends Component {
	static propTypes = {
		color: PropTypes.number
	};

	render() {
		const bgColor = 'bg-' + this.props.colorIndex;
		const classes = classNames({
			'quote-box': true,
			[bgColor]: true
		});
		return (
			<main className={classes} id="">
				<Quote
					quoteIndex={this.props.quoteIndex}
					sourceIndex={this.props.sourceIndex}
				/>
			</main>
		);
	}
}

export default Background;
