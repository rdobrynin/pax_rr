import * as React from 'react'
import './tradeItem.scss'
import { Trade, Trades } from '../../store/trades/types'
import { NavLink } from 'react-router-dom'

export class TradeItem extends React.Component<Trades&Trade> {

  public showTrade = (hash: string) => {
    console.log(hash)
  }

  render() {
    return (
      <React.Fragment>
      <nav>
        <ul>
        <li className={'trade-item__wrapper'}>

          <NavLink to={`/sell_btc/${this.props.hash}`}>
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
          </NavLink>
        </li>
        </ul>
      </nav>
      </React.Fragment>
    )
  }
}
