import * as React from 'react'
import './tradeAmount.scss'
import { ITradeAmount } from '../../../store/trades/types'

export class TradeAmount extends React.Component<ITradeAmount> {
  render() {
    return (
      <div>
        <div className={'trade-amount__title'}>
          amount usd
        </div>
        <div className={'trade-amount__value'}>
          {this.props.amount}
        </div>
      </div>
    )
  }
}
