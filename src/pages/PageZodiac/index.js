import React from 'react';
import { path, prop } from 'ramda';

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
  // const listHoroscopeChinesse = prop(
  //   'data',
  //   path('0', prop('data', prop('spotlight', prop('data', horoscopeChinesse))))
  // );
  // console.log(horoscopeChinesse);
  if (isLoading) return <Loading />;

  return (
    <div className="container">
      <Header />
      <Signs>
        {ArrayHoroscope &&
          ArrayHoroscope.map((h, i) => <Sign key={i} title={h.title} linkRoute={h.image} url={h.url} />)}
      </Signs>
      <SearchForm data={horoscopeChinesse} />
      <Horoscopo />
    </div>
  );
};
