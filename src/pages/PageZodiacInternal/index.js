import React from 'react';

import { Main } from './Main';
import { Header } from './Header';
import { SearchForm } from '../PageZodiac/SearchForm';
import { Button } from './Button';

export const PageZodiacInternal = () => {
  return (
    <>
      <Header />
      <Main />
      <SearchForm />
      <Button />
    </>
  );
};
