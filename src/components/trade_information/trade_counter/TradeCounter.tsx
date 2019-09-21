import * as React from 'react';
import './tradeCounter.scss';
import { ITotalTrades } from '../../../store/trades/types'
import { Constants } from '../../../utils/constants'
export class TradeCounter extends React.Component<ITotalTrades> {
  render() {
    return (
    <div>
      <div className={'trade-counter__title'}>
        {Constants.trade.countTradesTitle}
      </div>
      <div className={'trade-counter__value'}>
        <span>{this.props.total}</span>
      </div>
    </div>
    )
  }
}
