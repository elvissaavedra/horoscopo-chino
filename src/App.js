import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ArrayHoroscope } from './shared/constant/ConstantHoroscope';

import { PageZodiacInternal } from './pages/PageZodiacInternal';
import { PageZodiac } from './pages/PageZodiac';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <PageZodiac info={ArrayHoroscope} />
          </Route>
          <Route path="/horoscopo-:sign">
            <PageZodiacInternal />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
