import React, { Component, MouseEvent } from 'react'
import './ChatHeaderContainer.scss'
import { ITradeHeader, ITrades } from '../../../store/trades/types'
import { deleteTrade } from '../../../store/trades/actions'

interface PropsFromDispatch {
  deleteTrade: typeof deleteTrade
}

export class ChatHeaderContainer extends React.Component<ITradeHeader&ITrades> {

  handleClick(event: MouseEvent) {
    event.preventDefault()
    alert(event.currentTarget.tagName)
  }

  render() {
    return (
      <React.Fragment>
        <div className={'chatHeader__wrapper'}>
          <div className={'chatHeader__action'}>
            <button onClick={this.handleClick}>
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
