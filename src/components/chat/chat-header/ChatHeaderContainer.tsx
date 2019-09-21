import React from 'react'
import './ChatHeaderContainer.scss'
import { ITrade, ITradeHeader, ITrades } from '../../../store/trades/types'
import { Constants } from '../../../utils/constants'
import { deleteTrade } from '../../../store/trades/actions'

interface PropsFromDispatch {
  deleteTrade: typeof deleteTrade
}

interface State {
  selected?: ITrade
}

export class ChatHeaderContainer extends React.Component<ITradeHeader&ITrades&PropsFromDispatch, State> {

  constructor(props: ITradeHeader&ITrades&PropsFromDispatch) {
    super(props)

    this.state = {}
  }

  removeTrade = () => {
    // this.props.dispatch.deleteTrade(this.props.trade)
    // console.log(this.props.actions.deleteTrade(this.props.trade));
    // deleteTrade(this.props.trade)
    // console.log(this.props.trades);
    // @todo dispatch
    // const { deleteTrade: dt } = this.props.trade
    // // dt()
  }

  render() {
    return (
      <React.Fragment>
        <div className={'chatHeader__wrapper'}>
          <div className={'chatHeader__action'}>
            <button onClick={this.removeTrade}>
              <img src={Constants.assetsUrl + '/images/trash-bin.png'} alt="remove"/>
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
