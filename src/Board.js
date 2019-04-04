import React from 'react'
import PropTypes from 'prop-types'
import CardSpace from './CardSpace'
import Card from './Card'

class Board extends React.Component {
    constructor(props) {
      super(props);
      
      this.layout = 
        [
            ['AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C'],
            ['AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H'],
            ['AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D'],
            ['AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S'],
        ];
      
      this.state = {
          cards: [],
          playerColor: 'B' 
      };
    }    
        
    render () {
        return <div className="board">
            {this.layout.map( (row, index) => {
                return <div key={index} className="board-row">
                    {row.map( (card) => {
                    return <CardSpace key={index + '_' + card} card=<Card suit={card.slice(-1)} rank={card.slice(0,-1)} /> /> } )}
                </div>
            })}
        </div>
    }
}

export default Board;