import React from 'react'
import './ChatHeaderContainer.scss'
import { ITradeHeader, ITrades } from '../../../store/trades/types'

export class ChatHeaderContainer extends React.Component<ITradeHeader&ITrades> {
  render() {
    return (
      <React.Fragment>
        <div className={'chatHeader__wrapper'}>
          <div className={'chatHeader__action'}>
            {this.props.children}
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
