import React from 'react';
import './Content.css';
import Card from './Card.js';

const Content = React.createClass({
	displayName: 'Content',

	propTypes: {
		cards: React.PropTypes.object, 
		numberOfCards: React.PropTypes.number,
	},


renderCards() {

	let cardComponents = []

	for (let i = 0; i < this.props.numberOfCards; i++) {
		cardComponents.push(
			<Card 
				key={this.props.cards[i].id}
				id={this.props.cards[i].id}
				image={this.props.cards[i].id}
				isFlipped={this.props.cards[i].isFlipped}
			/>)

	}

	return cardComponents

	},

  render() {
    return (
      <div className="Content">
      	{this.renderCards()}
      </div>
    );
  }
})



export default Content;
