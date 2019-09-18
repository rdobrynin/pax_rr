import * as React from 'react'
import './tradeStatus.scss'
import { ITradeStatus } from '../../../store/trades/types'

export class TradeStatus extends React.Component<ITradeStatus> {
  render() {
    return (
      <div>
        <div className={'trade-status__title'}>
          trade status
        </div>
        <div className={'trade-status__value'}>
          {this.props.status}
        </div>
      </div>
    )
  }
}
