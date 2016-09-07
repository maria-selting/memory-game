import React from 'react';
import './Card.css';

const Card = React.createClass({
	displayName: 'Card',

	propTypes: {
		cards: React.PropTypes.object, 
		numberOfCards: React.PropTypes.number,
	},

  render() {
    return (
      <div className="Card">
    	Här har jag mitt kort! TJOHO!
      </div>
    )
  }
})

export default Card;
