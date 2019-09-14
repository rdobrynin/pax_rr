import * as React from 'react';
import './tradeReputation.scss';
import { ITradeReputation } from '../../../store/trades/types'
export class TradeReputation extends React.Component<ITradeReputation> {
  render() {
    return (
      <div>
        <div className={'trade-reputation__avatar'}>
          <img src={`${process.env.PUBLIC_URL}/assets/images/avatar_m.png`} alt="name"/>
        </div>
        <div className={'trade-reputation_stats'}>
          <span>+{this.props.reputationPositive}</span>&nbsp;/&nbsp;<span>-{this.props.reputationNegative}</span>
        </div>
      </div>
    )
  }
}
