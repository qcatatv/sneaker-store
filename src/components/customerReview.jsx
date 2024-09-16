import React from 'react'
import './customerReview.css'
import Thompson from '../assets/profilePicture/first.jpg'
import Cooper from '../assets/profilePicture/second.jpg'
import Bennett from '../assets/profilePicture/third.jpg'

export default function CustomerReview() {
  return (
    <div className='customerReview'>
        <div class="card">
        <div class="card__img"></div>
            <div class="card__descr-wrapper">
                <img src={Thompson} />
                <p class="card__title">
                Lily Thompson
            </p>
            <p class="card__descr">
            Super comfortable and stylish! Perfect for daily wear. Definitely coming back for more!
            </p>
            </div>
        </div>
        <div class="card">
        <div class="card__img"></div>
            <div class="card__descr-wrapper">
                <img src={Cooper} />
                <p class="card__title">
                James Cooper
            </p>
            <p class="card__descr">
            Great fit, high-quality material, and amazing support. These sneakers are my new favorite!
            </p>
            </div>
        </div>
        <div class="card">
        <div class="card__img"></div>
            <div class="card__descr-wrapper">
                <img src={Bennett} />
                <p class="card__title">
                Sophia Bennett
            </p>
            <p class="card__descr">
            The design is sleek, and they feel light on my feet. Excellent buy!
            </p>
            </div>
        </div>
    </div>
  )
}

