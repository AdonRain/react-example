import React, {Component} from 'react';
import {Route, IndexRoute} from 'react-router';
import createHashHistory from 'history/lib/createHashHistory';

import Container from './pages/Container';
import List from './pages/List';
import Detail from './pages/Detail';

const routes = (
  <Route path="/" component={Container}>
      <IndexRoute component={List} />
      <Route path="/detail/:id" component={Detail} />
  </Route>
);

export default {
  routes,
  history: createHashHistory({queryKey: false})
};
