import * as React from 'react'
import './tradeAmount.scss'
import { ITradeAmount } from '../../../store/trades/types'
import { IRate } from '../../../store/rate/types'

export class TradeAmount extends React.Component<IRate&ITradeAmount> {
  render() {
    return (
      <div>
        <div className={'trade-amount__title'}>
          amount {this.props.bpi.USD.code}
        </div>
        <div className={'trade-amount__value'}>
          {this.props.amount}
        </div>
      </div>
    )
  }
}
