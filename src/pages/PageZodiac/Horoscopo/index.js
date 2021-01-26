import React from 'react';

import { HoroscopoYear } from './HoroscopoYear/index';
import { HoroscopoInfo } from './HoroscopoInfo/index';

export const Horoscopo = ({ sign, element }) => {
  return (
    <>
      <HoroscopoInfo />
      <HoroscopoYear sign={sign} element={element} />
    </>
  );
};
