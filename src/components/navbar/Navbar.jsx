import React, { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { BsCaretDownFill, BsCaretUpFill } from 'react-icons/bs';

import logo from '../../assets/images/logo@2x.png';
import logo2 from '../../assets/images/logo2@2x.png';

const Navbar = () => {
  
  const [fcollectionsDropdown, setFcollectionsDropdown] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);
  const [galleryDropdown, setGalleryDropdown] = useState(false);
  const [applicationsDropdown, setApplicationsDropdown] = useState(false);

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

            <div className='collections__dropdown'>
              <div className='collections__dropdown-nav'>
                <p><a href="#collections">Featured Collections</a></p>
                {fcollectionsDropdown
                  ? <BsCaretUpFill color='#5fbdc1' size={15} className='fcollectionsDropdown' onClick={() => setFcollectionsDropdown(false)} />
                  : <BsCaretDownFill color='#5fbdc1' size={15} className='fcollectionsDropdown' onClick={() => setFcollectionsDropdown(true)} />}
              </div>
              {fcollectionsDropdown && (
                <div className='collections__dropdown-menu menu__bg'>
                  <p><a href="#collection1">Collection 1</a></p>
                  <p><a href="#collection2">Collection 2</a></p>
                  <p><a href="#collection3">Collection 3</a></p>
                  <p><a href="#collection4">Collection 4</a></p>
                  <p><a href="#collection5">Collection 5</a></p>
                  <p><a href="#collection6">Collection 6</a></p>
                </div>
              )}
            </div>
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
          ? <RiCloseLine color='#fff' size={28} className='toggleMenu' onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#fff' size={28} className='toggleMenu' onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className='rmp__navbar-menu_container menu__bg scale-up-center'>

            <div className='rmp__navbar-menu_nav'>
              <img src={logo} alt="logo" />
              <RiCloseLine color='#fff' size={28} className='toggleMenu' onClick={() => setToggleMenu(false)} />
            </div>

            <div className='rmp__navbar-menu_container-links menu__bg '>
              <div className='rmp__navbar-menu_container-links-top'>
                <div className='gallery__dropdown'>
                  <div className='gallery__dropdown-nav'>
                    <p><a href="#gallery">Gallery</a></p>
                    {galleryDropdown 
                      ? <BsCaretUpFill color='#5fbdc1' size={15} className='galleryDropdown' onClick={() => setGalleryDropdown(false)} />
                      : <BsCaretDownFill color='#5fbdc1' size={15} className='galleryDropdown' onClick={() => setGalleryDropdown(true)}/>}
                    </div>

                  {galleryDropdown && (
                    <div className='gallery__dropdown-menu'>
                      <p><a href="#all">All</a></p>
                      <p><a href="#popular">Popular</a></p>
                      <p><a href="#sale">On Sale</a></p>
                      <p><a href="#auction">On Auction</a></p>
                      <p><a href="#offers">On Offer</a></p>
                      <p><a href="#recents">Recently Added</a></p>
                    </div>
                  )}
                </div>

                <p><a href="#collections">Collections</a></p>
                <p><a href="#artists">Artists</a></p>

                <div className='applications__dropdown'>
                  <div className='applications__dropdown-nav'>
                    <p><a href="#applications">Applications</a></p>
                    {applicationsDropdown 
                      ? <BsCaretUpFill color='#5fbdc1' size={15} className='applicationsDropdown' onClick={() => setApplicationsDropdown(false)} />
                      : <BsCaretDownFill color='#5fbdc1' size={15} className='applicationsDropdown' onClick={() => setApplicationsDropdown(true)} />}
                  </div>

                  {applicationsDropdown && (
                    <div className='applications__dropdown-menu'>
                      <p><a href="#loopbomb">Loopbomb</a></p>
                      <p><a href="#radicleart">Radicle Art</a></p>
                      <p><a href="#blockpaint">Block Paint</a></p>
                      <p><a href="#crazyplay">Crazy Play</a></p>
                    </div>
                  )}
                </div>

                <p className='cta'><a href="#collections">Become a contributor</a></p>

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