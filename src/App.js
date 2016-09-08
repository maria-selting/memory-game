import React from 'react';
import _ from 'lodash';
import './App.css';
import Header from './Header.js';
import Content from './Content.js';
import Footer from './Footer.js';

const App = React.createClass({
  displayName: 'App',

  getInitialState() {
    return {
      numberOfCards: 0, 
      cards: {},
      images: [],
      flipped: [],
    }
  },

  handleStartNewGame() {
    const numberOfCards = 4
    let images = [
      {
            id: 1,
            src: './images/cat-1.jpg',
      },
      {
            id: 2,
            src: './images/cat-2.jpg',
      }
    ]
    images = _.shuffle(_.concat([], images, images))
    let cards = {}
    for (let i = 0; i < numberOfCards; i++) {
      cards[i]= {
        id: i,
        image: images[i],
        isFlipped: false,
      }
    }

    this.setState({
      numberOfCards: numberOfCards,
      cards: cards,
      images: images,
    })

    console.log('numberOfCards:', numberOfCards )
    console.log('cards:', cards)
    console.log('images;', images)
  
  },

  render() {
    return (
      <div className="App">
        <Header />
        <Content 
          cards={this.state.cards} 
          numberOfCards={this.state.numberOfCards} 
        />
        <Footer 
          handleStartNewGame={this.handleStartNewGame} 
        />
      </div>
    );
  }
})


export default App;
