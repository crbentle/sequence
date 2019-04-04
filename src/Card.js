import React from 'react'
import PropTypes from 'prop-types'

const Card = (props) => {
    return (
        <div className={'card rank-' + props.rank + ' suit-' + props.suit} />
    )
}

Card.propTypes = {
  rank: PropTypes.oneOf(['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']),
  suit: PropTypes.oneOf(['C', 'D', 'H', 'S'])
};

export default Card;
