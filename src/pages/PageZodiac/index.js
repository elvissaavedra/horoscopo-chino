import React from 'react';

import { Sign } from './Sign';
import { Header } from './Header';

import { ArrayHoroscope } from '../../shared/constant/ConstantHoroscope';

export const PageZodiac = () => {
  console.log(ArrayHoroscope);
  return (
    <>
      <Header />
      <div>
        {ArrayHoroscope.map((h, i) => (
          <Sign key={i} title={h.title} linkRoute={h.image} />
        ))}
      </div>
    </>
  );
};
//
