import * as React from 'react';
import './tradeCounter.scss';
import { ITotalTrades } from '../../../store/trades/types'
export class TradeCounter extends React.Component<ITotalTrades> {
  render() {
    return (
    <div>
      <div className={'trade-counter__title'}>
        # of trades
      </div>
      <div className={'trade-counter__value'}>
        <span>{this.props.total}</span>
      </div>
    </div>
    )
  }
}
