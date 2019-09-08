import * as React from 'react';
import './tradeInformation.scss';

export const TradeInformation = () => (
    <div className={'trade-information'}>
      <span>You are trading with</span> <span className={'trade-information__seller'}>Chanaaar</span>
      <div className={'trade-information__session'}>Started 23 minutes ago</div>
    </div>
);
