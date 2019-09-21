import * as React from 'react'
import './tradeHash.scss'
import { ITradeHash } from '../../../store/trades/types'
import { Constants } from '../../../utils/constants'

export class TradeHash extends React.Component<ITradeHash> {
  render() {
    return (
      <div>
        <div className={'trade-hash__title'}>
          {Constants.trade.hashTitle}
        </div>
        <div className={'trade-hash__value'}>
          {this.props.hash}
        </div>
      </div>
    )
  }
}
