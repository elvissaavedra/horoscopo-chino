import React, { useState } from 'react';

import { ArrayHoroscope } from '../../../shared/constant/ConstantHoroscope';

import { Carousel } from '../../../global/components/Carousel';

import './style.css';

export const Header = ({ data, sign }) => {
  const itemSign = data.filter((item) => item.url === sign);
  const titleSign = itemSign.map(ele => ele.header)

  return (
    <div className="zodiacHeader__content">
      <img src={`/images/${titleSign}.png`} alt={titleSign} className="zodiacHeader__image" />
      <h2 className="bodyTitle">{titleSign}</h2>
      <p className="zodiacHeader__paragraph">
        <span className="zodiacHeader__text bodyText">Misteriosa, secreta, agresiva.</span>
      </p>
      <p className="zodia cHeader__paragraph">
        <span className="zodiacHeader__text bodyText">
          Descubre las características de la más magnética horóscopo chino.
        </span>
      </p>
      <Carousel arrayItemCarousel={ArrayHoroscope} />
    </div>
  );
};
