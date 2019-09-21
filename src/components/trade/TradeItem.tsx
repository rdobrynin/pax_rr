import * as React from 'react'
import './tradeItem.scss'
import { ITrade, ITrades } from '../../store/trades/types'
import { NavLink } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'
import { ConvertToBtc } from '../../helpers/rate'
import { IRate } from '../../store/rate/types'
import { Constants } from '../../utils/constants'

interface RouteParams {
  hash: string
}

interface State {
  selected?: boolean
}

type TradeProps = ITrades&ITrade&RouteComponentProps<RouteParams>;

export class TradeItem extends React.Component<IRate&TradeProps, State> {

  constructor(props: IRate&TradeProps) {
    super(props)

    this.state = {
      selected: false
    }
  }

  public UNSAFE_componentWillMount() {
    if (this.props.hash === this.props.match.params.hash) {
      this.setState({ selected: this.props.chat.isRead = true })
    }
  }

  componentDidUpdate(prevProps: TradeProps) {
    if (this.props.location !== prevProps.location) {
      const isSelected: boolean = this.props.hash === this.props.match.params.hash
      if (isSelected) {
        this.setState({ selected: this.props.chat.isRead = true })
      }

    }
  }

  render() {
    return (
      <React.Fragment>
        <nav>
          <ul>
            {/*<pre>{JSON.stringify(this.props, null, 2)}</pre>*/}
            {/*@todo*/}
            <li className={'trade-item__wrapper ' + ( this.props.isActive ? 'is-active' : '' )}>
              <NavLink to={`/sell_btc/${this.props.hash}`}>
                <div>
                  <div className={'trade-item__action ' + ( this.props.chat.isRead ? 'is-selected' : '' )}>
                    {this.props.name}&nbsp;<span>{Constants.trade.isBuyingTitle}</span></div>
                  <div className={'trade-item__payment'}>{this.props.paymentMethod}</div>
                  <div className={'trade-item__value'}>
                    {this.props.amount} {this.props.bpi.USD.code}&nbsp;
                    ({ConvertToBtc(this.props.amount, this.props.bpi.USD.rate_float)} BTC)
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
