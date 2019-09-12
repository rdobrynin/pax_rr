import * as React from 'react'
import './tradeItem.scss'
import { Trade, Trades } from '../../store/trades/types'

export class TradeItem extends React.Component<Trades&Trade> {

  render() {
    return (
      <div>
        <div className={'trade-item__wrapper'}>
          <div>
            <div className="trade-item__action">{this.props.name} <span>is buying</span></div>
            <div className={'trade-item__payment'}>{this.props.paymentMethod}</div>
            <div className={'trade-item__value'}>
              {this.props.currency} (0.0025893 BTC)
            </div>
          </div>
          <div className={'trade-item__buyer_wrapper'}>
            <div className={'trade-item__buyer'}>
              <img src={this.props.image} alt={this.props.name}/>
            </div>
            <div className={'trade-item__status'}>
              {this.props.tradeStatus}
            </div>
          </div>
        </div>
      </div>
    )
  }
}
