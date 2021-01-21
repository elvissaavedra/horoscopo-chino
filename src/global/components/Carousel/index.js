import React from 'react';

import './style.css';

export const Carousel = ({ arrayItemCarousel }) => {
  return (
    <nav className="carousel__content">
      <ul className="carousel__list">
        {arrayItemCarousel &&
          arrayItemCarousel.map((item, index) => {
            return (
              <li className="carousel__item" key={'list' + index}>
                <a>
                  <img src={item.image} alt={item.title} className="carousel__image" />
                </a>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
