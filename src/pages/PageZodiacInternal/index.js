import React from 'react';

import { SearchForm } from '../PageZodiac/SearchForm';
import { Main } from './Main';
import { Header } from './Header';
import { Button } from '../../shared/components/Button';

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
