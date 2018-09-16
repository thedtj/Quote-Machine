import React, { Component } from 'react';
import Controls from './Controls';

export default class Credits extends Component {
	render() {
		return (
			<footer className="container">
				<Controls setIndexes={this.props.setIndexes} />
				<h3>the footer goes here!</h3>
			</footer>
		);
	}
}
