import * as React from 'react'
import './tradeHash.scss'
import { ITradeHash } from '../../../store/trades/types'

export class TradeHash extends React.Component<ITradeHash> {
  render() {
    return (
      <div>
        <div className={'trade-hash__title'}>
          trade hash
        </div>
        <div className={'trade-hash__value'}>
          {this.props.hash}
        </div>
      </div>
    )
  }
}
