import * as React from 'react';
import './tradeCounter.scss';

export const TradeCounter = () => (
  <div>
    <div className={'trade-counter__title'}>
      # of trades
    </div>
    <div className={'trade-counter__value'}>
      <span>4</span>
    </div>
  </div>
);
