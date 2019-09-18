import React from 'react'
import './ChatHeaderContainer.scss'
import { ITradeHeader, ITrades } from '../../../store/trades/types'

export class ChatHeaderContainer extends React.Component<ITradeHeader&ITrades> {

  static removeTrade() {
    // @todo dispatch
  }

  render() {
    return (
      <React.Fragment>
        <div className={'chatHeader__wrapper'}>
          <div className={'chatHeader__action'}>
            <button onClick={ChatHeaderContainer.removeTrade}>
              <img src={`${process.env.PUBLIC_URL}/assets/images/trash-bin.png`} alt="remove"/>
            </button>
          </div>
          <div className={'chatHeader__header'}>
            <div className={'chatHeader__title'}>{this.props.paymentMethod}</div>
            <div className={'chatHeader__value'}>{this.props.name}&nbsp;
              <span>+{this.props.reputationPositive}</span>&nbsp;/&nbsp;<span>-{this.props.reputationNegative}</span>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
