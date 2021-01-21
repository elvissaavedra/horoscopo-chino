import React from 'react';

import useHoroscopeChinesse from '../../api/useHoroscopeChinesse';

import { ArrayHoroscope } from '../../shared/constant/ConstantHoroscope';

import { Signs } from './Signs';
import { Sign } from './Sign';
import { SearchForm } from './SearchForm';
import { Loading } from '../../components/Loading/index';
import HoroscopoInfo from './Horoscopo/HoroscopoInfo';
import HoroscopoYear from './Horoscopo/HoroscopoYear';
import { Header } from './Header';
import { Button } from '../../global/components/Button';

import './index.css';

export const PageZodiac = () => {
  const { horoscopeChinesse, isLoading } = useHoroscopeChinesse();
  let dataHoroscope = horoscopeChinesse?.map((sign) => {
    return sign?.data?.map((zodiacSign) => {
      return zodiacSign?.fields?.reduce((prev, current) => {
        prev[current.name] = current.value;
        return prev;
      }, {});
    });
  });

  if (isLoading) return <Loading />;

  return (
    <div className="container">
      <Header />
      <Signs>
        {ArrayHoroscope && ArrayHoroscope.map((h, i) => <Sign key={i} title={h.title} linkRoute={h.image} />)}
      </Signs>
      <SearchForm />
      <HoroscopoInfo />
      <HoroscopoYear />
      <Button />
    </div>
  );
};
