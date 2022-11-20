import React from 'react';
import './description.css';
import ReactReadMoreReadLess from 'react-read-more-read-less';

const longDescription = 
'Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this piece etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc Description of this collection - - Examples such the content of NFTs, specific themes of the collection, quotations by the creator, the meaning behind the creation of this collection etc'

const Description = () => {
  return (
    <div className='rmp__description'>
      <div className='rmp__description-container'>
        <div className='rmp__description-container_text'>
          <ReactReadMoreReadLess 
          charLimit={178}
          readMoreText={'Read More'}
          readLessText={'Read Less'}
          readMoreClassName='read-more-less--more'
          readLessClassName='read-more-less--less'
          >
            {longDescription}
          </ReactReadMoreReadLess>
        </div>
        <div className='rmp__description-container_metrics'>
          <div className='rmp__description-container_metrics-metric'>
            <h3>Floor Price</h3>
            <p>2,835 STX</p>
          </div>
          <div className='rmp__description-container_metrics-metric special'>
            <h3>Owners</h3>
            <p>1,236</p>
          </div>
          <div className='rmp__description-container_metrics-metric'>
            <h3>Items</h3>
            <p>2,500</p>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Description