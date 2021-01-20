import React from 'react';

import { Sign } from './Sign';
import { Header } from './Header';

import { ArrayHoroscope } from '../../shared/constant/ConstantHoroscope';

import HoroscopoInfo from '../../components/Horoscopo/HoroscopoInfo';
import HoroscopoYear from '../../components/Horoscopo/HoroscopoYear';

export const PageZodiac = () => {
  console.log(ArrayHoroscope);
  return (
    <div className="container">
      <Header />
      <div>
        {ArrayHoroscope.map((h, i) => (
          <Sign key={i} title={h.title} linkRoute={h.image} />
        ))}
      </div>
      <HoroscopoInfo />
      <HoroscopoYear />
    </div>
  );
};
//
