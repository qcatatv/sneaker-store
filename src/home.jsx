import React from "react";
import "./home.css";
import CustomerReview from "./components/customerReview";
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
          <a href='/Shop' className="checkBttn">Check the Offers</a>
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
          <p className="aboutDesc">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        <div className="aboutImg">
          <div className="aboutCard">
            <h1>Get Up To 30% Off</h1>
            <p>You can get to 30 percent discount from here</p>
          </div>
          <img src={aboutImage} />
        </div>
      </section>
      <section className="review">
        <h1>Customer <span>Review</span></h1>
        <div className="csReview">
          <CustomerReview />
        </div>
      </section>
      <section className="newsletter">
        <div className="newletter">
          <h1>Sign Up for <span>Updates</span> & Newsletters</h1>
          <div class="nwlteer">
            <span class="nwlteer__title">Subscribe</span>
            <p class="nwlteer__content">Get fresh information about new discount cupons!
            </p>
            <div class="nwlteer__form">
                <input placeholder="Your Email" type="text" />
                <button class="sign-up"> Sign up</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};