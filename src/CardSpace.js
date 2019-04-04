import React from 'react'
import PropTypes from 'prop-types'
import Card from './Card'

const CardSpace = (props) => {
    const color = getColor( props.highlight );
    let className = 'card-space ' + ( props.token ? 'border-black' : 'border-' + color );
    
    return <div className={className}>
        {props.card && props.card}
        {!props.card && <div className='free-space' />}
        {props.token && 
            <div className='token' style={{'background-color': getColor( props.token )}}>&nbsp;</div> }
    </div>
}

const getColor = ( prefix ) => {
    let color = 'black';
    switch( prefix ) {
        case 'R':
            color = 'red';
            break;
        case 'G':
            color = 'green';
            break;
        case 'B':
            color = 'blue';
            break;
        default:
            color = 'black';
    }
    return color;
}

CardSpace.propTypes = {
    highlight: PropTypes.oneOf(['R', 'G', 'B', null]),
    token: PropTypes.oneOf(['R', 'G', 'B', null]),
    card: PropTypes.node
};

// Same approach for defaultProps too
CardSpace.defaultProps = {
  // highlight: "R",
  // token: 'G',
  // card: {
  //     suit: 'D',
  //     rank: 'Q'
  // }
};

export default CardSpace;
