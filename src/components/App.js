import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import {
  Home,
  NotFound,
} from 'components/pages';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />

        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
