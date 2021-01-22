import React from 'react';
import { useParams } from 'react-router-dom';

import { SearchForm } from '../PageZodiac/SearchForm';
import { Main } from './Main';
import { Header } from './Header';
import useHoroscopeChinesse from '../../api/useHoroscopeChinesse';
import { Loading } from "../../components/Loading/index";
import { Button } from '../../shared/components/Button';

export const PageZodiacInternal = () => {
  const { sign } = useParams();
  const { horoscopeChinesse, isLoading } = useHoroscopeChinesse();
    if (isLoading) return <Loading />;
    console.log("🚀interna", horoscopeChinesse)
  console.log("🚀 ~ file: index.js ~ line 10 ~ PageZodiacInternal ~ sign", sign)
  
  return (
    <div className="container">
      <Header />
      <Main />
      <SearchForm />
      <Button />
    </div>
  );
};
