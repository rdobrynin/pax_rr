import * as React from 'react'
import './tradeItem.scss'
import { ITrade, ITrades } from '../../store/trades/types'
import { NavLink } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

interface RouteParams {
  hash: string
}

export class TradeItem extends React.Component<ITrades&ITrade&RouteComponentProps<RouteParams>> {
  render() {
    const { data, match } = this.props
    const isSelected: boolean  = this.props.hash === match.params.hash;
    return (
      <React.Fragment>
      <nav>
        <ul>
          {/*<pre>{JSON.stringify(this.props, null, 2)}</pre>*/}
          {/*@todo*/}
        <li className={'trade-item__wrapper ' + (this.props.isActive ? 'is-active' : '') }>
          <NavLink to={`/sell_btc/${this.props.hash}`}>
          <div>
            <div className={'trade-item__action ' + (isSelected ? 'is-selected' : '') }>
              {this.props.name}&nbsp;<span>is buying</span></div>
            <div className={'trade-item__payment'}>{this.props.paymentMethod}</div>
            <div className={'trade-item__value'}>
              {this.props.amount} {this.props.currency}&nbsp;(0.0025893 BTC)
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
