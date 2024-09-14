import React from 'react';
import './discountBanner.css';
import Jordan from '../assets/products/1.png';
import Nike from '../assets/products/3.png';
import Yeezy from '../assets/products/4.png';
const DiscountBanner = () => {
  return (
    <div className="discount-banner">
      {/* Left side - Big offer */}
      <div className="banner-item big-offer">
        <img src={Jordan} alt="Burger" />
        <div className="discount-text">
          <h2>25% Discount</h2>
          <div className="price-tag">
            <span>$2.60</span>
          </div>
        </div>
      </div>

      {/* Right side - Smaller offers */}
      <div className="small-offers">
        <div className="banner-item small-offer">
          <img src={Nike} alt="Waffles" />
          <div className="discount-text">
            <h2>Save 20%</h2>
            <div className="price-tag">
              <span>$3.80</span>
            </div>
          </div>
        </div>
        <div className="banner-item small-offer">
          <img src={Yeezy} alt="Tacos" />
          <div className="discount-text">
            <h2>Save 15%</h2>
            <div className="price-tag">
              <span>$3.80</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscountBanner;