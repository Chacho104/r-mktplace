import React from 'react';
import './App.css';
import { Footer, Description, Collection} from './containers';
import { Navbar, Hero, Bottomnav } from './components';

const App = () => {
  return (
    <div className='App'>
      <Navbar />
      <Hero />
      <Description />
      <Collection />
      <Bottomnav />
      <Footer />
    </div>
  )
}

export default App