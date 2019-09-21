import * as React from 'react'
import './tradeStatus.scss'
import { ITradeStatus } from '../../../store/trades/types'
import { Constants } from '../../../utils/constants'

export class TradeStatus extends React.Component<ITradeStatus> {
  render() {
    return (
      <div>
        <div className={'trade-status__title'}>
          {Constants.trade.statusTitle}
        </div>
        <div className={'trade-status__value'}>
          {this.props.status}
        </div>
      </div>
    )
  }
}
