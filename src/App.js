import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { ArrayHoroscope } from './shared/constant/ConstantHoroscope';

import { PageZodiacInternal } from './pages/PageZodiacInternal';
import { PageZodiac } from './pages/PageZodiac';
import { Layout } from './components/Layout';

function App() {
  return (
    <Router>
      {/* <Carouselhdr /> */}
      <Layout>
        <Switch>
          <Route path="/interna">
            <PageZodiacInternal />
          </Route>
          <Route exact path="/">
            <PageZodiac info={ArrayHoroscope} />
          </Route>
          {/* <Route path="/:id">
            <PageDetailsHoroscope info={notice} />
          </Route> */}
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
