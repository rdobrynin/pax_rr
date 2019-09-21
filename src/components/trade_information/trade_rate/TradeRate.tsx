import * as React from 'react'
import './tradeRate.scss'
import { ConvertToBtc } from '../../../helpers/rate'
import { IRate } from '../../../store/rate/types'
import { ITradeAmount } from '../../../store/trades/types'
import { Constants } from '../../../utils/constants'

export class TradeRate extends React.Component<ITradeAmount&IRate> {
  render() {
    return (
      <div>
        <div className={'trade-rate__title'}>
          {Constants.trade.amountTitle} BTC
        </div>
        <div className={'trade-rate__value'}>
          {ConvertToBtc(this.props.amount, this.props.bpi.USD.rate_float)}
        </div>
      </div>
    )
  }
}
