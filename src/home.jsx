import React from "react";
import "./home.css";
import hdImage from './assets/yeezyboost.png';
import GridItems from './components/gridItems'
import aboutImage from './assets/products/8.png'

export const Home = () => {
  return (
    <div className="container">
      <section className="header">
        <div className="hdImage">
            <img src={hdImage} />
        </div>
        <div className="textHeader">
          <h1>Summer <span>To Shine.</span></h1>
          <p>The radiance lives on with the b-ball original. Crossing Hardwood comfort with off-court flair</p>
          <a href='./pages/product-page/productPage' className="checkBttn">Check the Offers</a>
        </div>
      </section>
      <section className="main">
        <div className="mainDisc">
          <h1>Best <span>Discount</span></h1>
        </div>
        <GridItems />
      </section>
      <section className="about">
        <div className="aboutUs">
          <p>Abotus</p>
          <h1>Ue are Providing <span>High</span> Quality Shoes.</h1>
        </div>
        <div className="aboutImg">
          <div className="aboutCard">
            <h1>Get Up To 30% Off</h1>
            <p>You can get to 30 percent discount from here</p>
          </div>
          <img src={aboutImage} />
        </div>
      </section>
    </div>
  );
};