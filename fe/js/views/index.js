import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import Wrapper from './pages/Wrapper';
import Home from './pages/Home';
import Hero from './pages/Hero';

const routes = (
  <Route path="/" component={Wrapper}>
      <IndexRoute component={Home} />
      <Route path="/hero/:name" component={Hero} />
  </Route>
);

export default {
  routes,
  history: createHashHistory({queryKey: false})
};
