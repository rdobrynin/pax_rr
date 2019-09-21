import * as React from 'react'
import Moment from 'react-moment';
import 'moment-timezone';
import './tradeInformation.scss'
import { ITradeInformationHeader } from '../../store/trades/types'
import { Constants } from '../../utils/constants'
import moment from 'moment'

Moment.globalTimezone = 'Estonia/Tallinn';
moment.relativeTimeThreshold('s', 59)

export class TradeInformation extends React.Component<ITradeInformationHeader> {

  state = {
    sessionTime: moment().toISOString()
  }

  render() {
    const toLowerCaseFilter = (d: string) => {
      return d.toLowerCase();
    };
    const isTrading: boolean = this.props.isTrade
    const sessionTime = this.state.sessionTime
    return (
      <div className={'trade-information'}>
        {isTrading ? (
          <div>
            <span>{Constants.trade.tradingWithText}</span>&nbsp;
            <span className={'trade-information__seller'}>
            {this.props.name}
           </span>
            <div className={'trade-information__session'}>Started&nbsp;
              <Moment filter={toLowerCaseFilter} fromNow>
                {sessionTime}
              </Moment>
            </div>
          </div>
        ) : (
          <div>
            <span>{Constants.trade.notTradingText}</span>
          </div>
        )}
      </div>
    )
  }
}
