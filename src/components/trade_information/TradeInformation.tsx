import * as React from 'react'
import './tradeInformation.scss'
import { ITradeInformationHeader } from '../../store/trades/types'

export class TradeInformation extends React.Component<ITradeInformationHeader> {
  render() {
    const isTrading: boolean = this.props.isTrade
    return (
      <div className={'trade-information'}>
        {isTrading ? (
          <div>
            <span>You are trading with</span> <span className={'trade-information__seller'}>{this.props.name}</span>
            <div className={'trade-information__session'}>Started 23 minutes ago</div>
          </div>
        ) : (
          <div>
            <span>You are not trading....</span>
          </div>
        )}
      </div>
    )
  }
}
