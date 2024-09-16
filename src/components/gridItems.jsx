import React from 'react'
import './gridItems.css'
import Jordan from '../assets/products/1.png'
import Nike from '../assets/products/3.png'
import Yeezy from '../assets/products/4.png'

export const GridItems = () => {
  return (
    <div className='gridItem'>
      <div className='gridFirst'>
        <a className='gridDiscount'>Discount 30%</a>
        <img src={Jordan}/>
        <h1><span className='gridBrand'>Air Jordan</span> 4 Retro Military Blue</h1>
        <div className='gridText'>
        </div>
      </div>
      <div className='gridSecond'>
        <a className='gridDiscount'>Discount 30%</a>
        <img src={Nike}/>
        <h1><span className='gridBrand'>Nike Dunk</span> Low Panda Black White</h1>
        <div className='gridText'>
        </div>
      </div>
      <div className='gridThird'>
        <a className='gridDiscount'>Discount 30%</a>
        <img src={Yeezy}/>
        <h1><span className='gridBrand'>adidas Yeezy</span> Foam Runner Onyx</h1>
        <div className='gridText'>
        </div>
      </div>
    </div>
  )
}

export default GridItems