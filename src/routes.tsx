import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Root from './components/layout/Root';
import IndexPage from './pages/index';

const Routes: React.SFC = () => (
  <Root>
    <Switch>
      <Route exact path="/" component={IndexPage}/>
    </Switch>
  </Root>
);

export default Routes;
