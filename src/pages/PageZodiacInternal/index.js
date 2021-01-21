import React from 'react';

import { Main } from './Main';
import { Header } from './Header';
import { SearchForm } from '../PageZodiac/SearchForm'

export const PageZodiacInternal = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <SearchForm />
    </div>
  );
};
