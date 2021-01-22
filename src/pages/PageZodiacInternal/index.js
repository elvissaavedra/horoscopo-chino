import React from 'react';

import { Main } from './Main';
import { Header } from './Header';
import { SearchForm } from '../PageZodiac/SearchForm';
import { Button } from '../../global/components/Button';

export const PageZodiacInternal = () => {
  return (
    <div className="container">
      <Header />
      <Main />
      <SearchForm />
      <Button />
    </div>
  );
};
