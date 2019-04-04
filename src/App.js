import React, { Component } from 'react';
import './App.css';
import CardSpace from './CardSpace';
import Card from './Card';
import Board from './Board';

class App extends Component {
    
  render() {
      // let cards = ['C', 'D', 'H', 'S'].map( suit => {
      //     return ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'].map( rank => {
      //         let card = {
      //             suit: suit,
      //             rank: rank
      //         }
      //         return <CardSpace key={suit+'_'+rank} card=<Card rank={card.rank} suit={card.suit} /> highlight={'B'} token={'B'}/>
      //     });
      // } );
      // cards.splice(1, 0, <br />);
    return (
      <div className="App">
          <Board />
        {/*cards.map( suit => {
            return <div key={suit[0].props.card.suit}>{suit}<br /></div>
        })*/}
      </div>
    );
  }
}

export default App;
