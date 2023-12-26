import React from 'react';
import '../Star/star.css'

const Star = ({ isFilled}) => {


    return (
        <img 
        src={`../public/${isFilled ? 'starfilled.png' : 'starempty.png'}`}
        alt='Star'
        className='card--favourite'
        
    )
}

