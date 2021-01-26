import React from 'react';

import useHoroscopeChinesse from '../../api/useHoroscopeChinesse';

import { ArrayHoroscope } from '../../shared/constant/ConstantHoroscope';

import { Signs } from './Signs';
import { Sign } from './Sign';
import { SearchForm } from './SearchForm';
import { Loading } from '../../components/Loading/index';
import { Horoscopo } from './Horoscopo';
import { Header } from './Header';

import './index.css';

export const PageZodiac = () => {
  const { horoscopeChinesse, isLoading } = useHoroscopeChinesse();
  const currentYear = new Date().getFullYear();
  const lastNumber = currentYear.toString().slice(currentYear.toString().length - 1);
  let element;
  switch (lastNumber) {
    case '0':
      element = 'Metal';
      break;
    case '1':
      element = 'Metal';
      break;
    case '2':
      element = 'Agua';
      break;
    case '3':
      element = 'Agua';
      break;
    case '4':
      element = 'Madera';
      break;
    case '5':
      element = 'Madera';
      break;
    case '6':
      element = 'Fuego';
      break;
    case '7':
      element = 'Fuego';
      break;
    case '8':
      element = 'Tierra';
      break;
    case '9':
      element = 'Tierra';
      break;
    default:
      element = '';
  }
  const currentSign = horoscopeChinesse?.find((sign) => {
    return (currentYear - sign.year) % 12 === 0;
  });
  if (isLoading) return <Loading />;

  return (
    <div className="container">
      <Header />
      <Signs>
        {ArrayHoroscope &&
          ArrayHoroscope.map((h, i) => <Sign key={i} title={h.title} linkRoute={h.image} url={h.url} />)}
      </Signs>
      <SearchForm data={horoscopeChinesse} />
      <Horoscopo sign={currentSign} element={element} />
    </div>
  );
};
