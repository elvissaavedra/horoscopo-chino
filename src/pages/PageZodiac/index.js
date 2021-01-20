import React from 'react';
import './index.css';

import { Loading } from '../../components/Loading/index';
import { Signs } from './Signs';
import { Sign } from './Sign';
import { SearchForm } from './SearchForm';

import { Header } from './Header';

import { ArrayHoroscope } from '../../shared/constant/ConstantHoroscope';
import useHoroscopeChinesse from '../../api/useHoroscopeChinesse';

export const PageZodiac = () => {
  const { horoscopeChinesse, isLoading } = useHoroscopeChinesse();
  console.log(ArrayHoroscope);

  if (isLoading) return <Loading />;

  return (
    <>
      <Header />
      <Signs>
        {ArrayHoroscope && ArrayHoroscope.map((h, i) => <Sign key={i} title={h.title} linkRoute={h.image} />)}
      </Signs>
      <SearchForm />
    </>
  );
};
//
