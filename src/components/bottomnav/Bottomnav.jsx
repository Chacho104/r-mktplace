import React from 'react';
import './bottomnav.css';

const Bottomnav = () => {
  return (
    <div className='rmp__bottomnav'>
        <div className='rmp__bottomnav-container'>
            <div className='rmp__bottomnav-container_text'>
                <p>You've seen the whole collection</p>
            </div>
            <div className='rmp__bottomnav-container_action'>
                <button type='button' className='gallery'><a href="#gallery">Gallery</a></button>
                <button type='button' className='backtotop'><a href="#home">Go Back To Top</a></button>
            </div>
        </div>
    </div>
  )
}

export default Bottomnav