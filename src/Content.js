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
	console.log('Hejsan!') 
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
