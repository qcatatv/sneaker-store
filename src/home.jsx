import React from "react";
import "./home.css"
import backgroundVideo from './assets/bgvideo.mp4'
import DiscountBanner from "./components/discountBanner";

export const Home = () => {
  return (
    <div className="container">
      <section className="header">
        <div className="videHeader">
          <video autoPlay loop muted id="video">
            <source src={backgroundVideo} />
          </video>
        </div>
        <div className="textHeader">
          <h1>Sneaker Store</h1>
          <p>Sneaker store | sport equipment</p>
          <a href="/shop" className="checkBttn">Check the Offers</a>
        </div>
      </section>
      <section className="main">
        <div className="mainDisc">
          <h1>Check the new Discount</h1>
          <DiscountBanner />
        </div>
      </section>
    </div>
  );
};