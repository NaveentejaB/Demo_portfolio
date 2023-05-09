import React from 'react';
import './Card.css'
function Card({emoji,heading,detail}) {
  return (
    <div className='card'>
        <img src={emoji} alt="" />
        <span className='shittt'>{heading}</span>
        <span>{detail}</span>
        <button className='button c-button'>Learn more</button>
    </div>
  );
}

export default Card;
