import React from 'react';
import './hero.css';
import profileimg from '../../assets/images/artistimg@2x.png';

const Hero = () => {
  return (
    <div className='rmp__hero'>

      <div className='rmp__hero-banner'>
        <div className='overlay'></div>
        <h1>Collection Name</h1>
      </div>

      <div className='rmp__hero-profile'>
        <img src={profileimg} alt="artist" />
        <h2>Artist Name</h2>
      </div>

    </div>
  )
}

export default Hero