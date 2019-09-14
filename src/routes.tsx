import * as React from 'react';
import { Route, Switch } from 'react-router-dom';

import Root from './components/layout/Root';
import IndexPage from './pages/index';
import BuyPage from './pages/buy';
import TradesPage from './pages/trades';
import WalletPage from './pages/wallet';
import SupportPage from './pages/support';
import AccountPage from './pages/account';

const Routes: React.FunctionComponent = () => (
  <Root>
    <Switch>
      <Route exact path="/" component={IndexPage}/>
      <Route path="/buy_btc" component={BuyPage}/>
      <Route path="/sell_btc" component={TradesPage}/>
      <Route path="/sell_btc/trades/" component={TradesPage}/>
      <Route path="/sell_btc/overview" component={TradesPage}/>
      <Route path="/sell_btc/disputes" component={TradesPage}/>
      <Route path="/sell_btc/offers" component={TradesPage}/>
      <Route path="/sell_btc/team" component={TradesPage}/>
      <Route path="/sell_btc/history" component={TradesPage}/>
      <Route path="/wallet" component={WalletPage}/>
      <Route path="/support" component={SupportPage}/>
      <Route path="/account" component={AccountPage}/>
      <Route component={() => <div>Not Found</div>}/>
    </Switch>
  </Root>
);

export default Routes;
