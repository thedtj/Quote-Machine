import React, { Component } from 'react';
import classNames from 'classnames/bind';
import Credits from './Components/Credits';
import Main from './Components/Main';
import Header from './Components/header';
import { Colors, Quotes, Sources } from './Components/Data';
import { randNumGen } from './Helpers';

class App extends Component {
	state = {
		colorIndex: randNumGen(Colors),
		quoteIndex: randNumGen(Quotes),
		sourceIndex: randNumGen(Sources)
	};

	setIndexes = () => {
		const ColorNum = randNumGen(Colors);
		const QuoteNum = randNumGen(Quotes);
		const SourceNum = randNumGen(Sources);
		if (
			ColorNum === this.state.colorIndex ||
			QuoteNum === this.state.quoteIndex
		) {
			this.setIndexes();
		} else {
			this.setState({
				...this.state,
				colorIndex: ColorNum,
				quoteIndex: QuoteNum,
				sourceIndex: SourceNum
			});
		}
	};

	render() {
		return (
			<div className="App" id="quote-box">
				<Header />
				<Main
					colorIndex={this.state.colorIndex}
					quoteIndex={this.state.quoteIndex}
					sourceIndex={this.state.sourceIndex}
				/>
				<Credits setIndexes={this.setIndexes} />
			</div>
		);
	}
}

export default App;
