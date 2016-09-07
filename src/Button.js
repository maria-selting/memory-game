import React from 'react';
import './Button.css';

const Button = React.createClass({
	displayName: 'Button',

  render() {
    return (
    	<div className='Button'>
      <button onClick={this.props.handleStartNewGame}>
      	Start new game! 
      </button>
      </div>
      )
  }

})

export default Button;
