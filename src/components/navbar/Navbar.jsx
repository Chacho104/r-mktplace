import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/images/logo@2x.png';
import logo2 from '../../assets/images/logo2@2x.png';

const Navbar = () => {
  
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <>
    <div className='rmp__navbar'>

      <div className='rmp__navbar-links'>

        <div className='rmp__navbar-links_logo'>
          <img src={logo} alt='logo' />
        </div>


        <div className='rmp__navbar-links_container'>
          <div className='rmp__navbar-links_container-left'>
            <p><a href="#explore">Explore</a></p>
            <p><a href="#collections">Featured Collections</a></p>
          </div>
          <div className='rmp__navbar-links_container-right'>
            <p><a href="#howitworks">How It Works</a></p>
            <p><a href="#about">About Risidio</a></p>
            <button type='button'>My NFT</button>
          </div>
        </div>
      </div>
    </div>

    <div className='rmp__navbar-menu menu__bg'>
      <div className='rmp__navbar-menu_logo'>
        <img src={logo2} alt="logo2" />
      </div>
        {toggleMenu 
          ? <RiCloseLine color='#fff' size={28} className='toggleMenu' onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={28} className='toggleMenu' onClick={() => setToggleMenu(true)}/>}
        {toggleMenu && (
          <div className='rmp__navbar-menu_container menu__bg scale-up-center'>

            <div className='rmp__navbar-menu_nav'>
              <img src={logo} alt="logo" />
              <RiCloseLine color='#fff' size={28} className='toggleMenu' onClick={() => setToggleMenu(false)} />
            </div>

            <div className='rmp__navbar-menu_container-links menu__bg '>
              <div className='rmp__navbar-menu_container-links-top'>
                <p><a href="#gallery">Gallery</a></p>
                <p><a href="#collections">Collections</a></p>
              </div>
              <div className='rmp__navbar-menu_container-links-center'>
                <p><a href="#howitworks">How It Works</a></p>
                <p><a href="#about">About Risidio</a></p>
              </div>
              <div className='rmp__navbar-menu_container-links-bottom'>
                <button type='button'>Register with Hiro Wallet</button>
              </div>
            </div>
          </div>
        )}
      </div>

    </>
  )
}

export default Navbar