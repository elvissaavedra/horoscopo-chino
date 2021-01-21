import React, { useState } from 'react';

import { ArrayHoroscope } from '../../../shared/constant/ConstantHoroscope';

import { Carousel } from '../../../global/components/Carousel';

import './style.css';

export const Header = () => {
  const { data, setData } = useState([]);

  return (
    <div className="zodiacHeader__content">
      <img src="/images/Rata.png" alt="Rata" className="zodiacHeader__image" />
      <h2 className="bodyTitle">Rata</h2>
      <p className="zodiacHeader__paragraph">
        <span className="zodiacHeader__text bodyText">Misteriosa, secreta, agresiva.</span>
      </p>
      <p className="zodiacHeader__paragraph">
        <span className="zodiacHeader__text bodyText">
          Descubre las características de la más magnética horóscopo chino.
        </span>
      </p>
      <Carousel arrayItemCarousel={ArrayHoroscope} />
    </div>
  );
};
