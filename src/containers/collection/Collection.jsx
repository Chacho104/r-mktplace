import React from 'react';
import './collection.css';
import { Items, Activity } from '../../components';

const Collection = () => {
  
  const handleClick = () => {

  }

  return (
    <div className='rmp__collection'>

      <div className='rmp__collection-toggle'>

        <button type='button' className='active' onClick={handleClick}>Items</button>

        <button type='button' onClick={handleClick}>Activity</button>
      </div>

      <div className='rmp__collection-content' id='items'>
        <Items />
      </div>
      
      <div className='rmp__collection-content' id='activity'>
        <Activity />
      </div>
    </div>
  )
}

export default Collection