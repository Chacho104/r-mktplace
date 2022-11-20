import React from 'react';
import './footer.css';
import logo from '../../assets/images/logo1@2x.png';
import { BsDiscord, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='rmp__footer'>
      <div className='rmp__footer-container'>

        <div className='rmp__footer-container_left'>
          <div className='rmp__footer-container_left-logo'>
           <img src={logo} alt='logo' />
          </div>
          <div className='rmp__footer-container_left-brief'>
            <p>Risidio Marketplace is the platform for digital assets registered 
              via the Bitcoin blockchain using Clarity Contracts and the Stacks 
              2.0 network. We are looking for partners and clients to help get 
              the platform to the next level.
            </p>
          </div>
        </div>
        <hr />
        <div className='rmp__footer-container_right'>
          <div className='rmp__footer-container_right-nav'>
            <h4>NFT</h4>
            <p><a href="`#nft">Your NFTs</a></p>
            <p><a href="#nft">Mint A File</a></p>
          </div>
          <div className='rmp__footer-container_right-nav'>
            <h4>How It Works</h4>
            <p><a href="#howitworks">Self Owned Indenty</a></p>
            <p><a href="#howitworks">Getting Testnet Stc</a></p>
          </div>
          <div className='rmp__footer-container_right-nav'>
            <h4>What we do</h4>
            <p><a href="#services">Get In Touch</a></p>
            <p><a href="#services">Developers</a></p>
          </div>
        </div>
        <div className='rmp__footer-container_socials'>
          <a href="#discord"><BsDiscord /></a>
          <a href="#instagram"><BsInstagram /></a>
          <a href="#twitter"><BsTwitter /></a>
          <a href="#youtube"> <BsYoutube /></a>
        </div>
        <div className='rmp__footer-container_copyright'>
          <span>&copy; 2020 Risido Ltd. All Rights Reserved.</span>
        </div>
        <div className='rmp__footer-container_legal'>
          <p><a href="#policy">Privacy Policy</a></p>
          <p><a href="#tou" className='right'>Terms of Use</a></p>
        </div>
      </div>
    </div>
  )
}

export default Footer