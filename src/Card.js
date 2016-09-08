import React from 'react';
import './Card.css';

const Card = React.createClass({
	displayName: 'Card',

	propTypes: {
		id: React.PropTypes.number,
		image: React.PropTypes.object,
		isFlipped: React.PropTypes.bool,
		cards: React.PropTypes.object, 
		numberOfCards: React.PropTypes.number,
	},

  render() {
    return (
      <div className='Card'>
    	<img src={this.props.image}/>
    	TJOHO här är mitt kort
      </div>
    )
  },
})

export default Card;
