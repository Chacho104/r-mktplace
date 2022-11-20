import React from 'react';
import './items.css';
import { nft, nft1, nft2, nft4 } from '../../assets';

const nfts = [
    { id: '0001', media: nft, type: 'Artwork', creator: 'Artist Name', stxprice: '20 STX', dollarprice: '27 $' },
    { id: '0002', media: nft1, type: 'Artwork', creator: 'Artist Name', stxprice: '20 STX', dollarprice: '27 $' },
    { id: '0003', media: nft2, type: 'Artwork', creator: 'Artist Name', stxprice: '20 STX', dollarprice: '27 $' },
    { id: '0004', media: nft4, type: 'Artwork', creator: 'Artist Name', stxprice: '20 STX', dollarprice: '27 $' },
    { id: '0005', media: nft, type: 'Artwork', creator: 'Artist Name', stxprice: '20 STX', dollarprice: '27 $' },
    { id: '0006', media: nft1, type: 'Artwork', creator: 'Artist Name', stxprice: '20 STX', dollarprice: '27 $' },
    { id: '0007', media: nft2, type: 'Artwork', creator: 'Artist Name', stxprice: '20 STX', dollarprice: '27 $' },
    { id: '0008', media: nft4, type: 'Artwork', creator: 'Artist Name', stxprice: '20 STX', dollarprice: '27 $' },
    { id: '0009', media: nft, type: 'Artwork', creator: 'Artist Name', stxprice: '20 STX', dollarprice: '27 $' },
    { id: '0010', media: nft1, type: 'Artwork', creator: 'Artist Name', stxprice: '20 STX', dollarprice: '27 $' },
    { id: '0011', media: nft2, type: 'Artwork', creator: 'Artist Name', stxprice: '20 STX', dollarprice: '27 $' },
    { id: '0012', media: nft4, type: 'Artwork', creator: 'Artist Name', stxprice: '20 STX', dollarprice: '27 $' }
]

const Items = () => {
  return (
    <div className='rmp__items'>
        <div className='rmp__items-container'>
            {nfts.map((nft) => {
                return (
                    <div className='rmp__items-container_nftcard' key={nft.id}>
                        <div className='rmp__items-container_nftcard-content'>
                            <div className='media'>
                                <img src={nft.media} alt="NFT Media" />
                            </div>

                            <div className='details'>
                                <div className='details__owner'>
                                    <p className='details__owner-type'>{nft.type}</p>
                                    <p className='details__owner-creator'><span>By</span> {nft.creator}</p>
                                </div>
                                <div className='details__price'>
                                    <p className='details__price-stx'>{nft.stxprice}</p>
                                    <p className='details__price-usd'>{nft.dollarprice}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Items