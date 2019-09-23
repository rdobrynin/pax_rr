import * as React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import './chathistory.scss'
import moment from 'moment'
import { IMessage } from '../../../store/trades/types'
import { Constants } from '../../../utils/constants'

export interface ChatHistoryProps {
  messages?: IMessage[]
  externalComment?: string,
}

Moment.globalTimezone = 'Europe/Tallinn'

Moment.globalFilter = (d: any) => {
  return d.toUpperCase()
}

export class ChatHistory extends React.Component<ChatHistoryProps> {

  state = {
    sessionTime: moment().toISOString()
  }

  render() {
    const sessionTime = this.state.sessionTime
    return (
      <div className="chat-history">
        <ul>
          <React.Fragment>
            {!!this.props.externalComment ? (
              <li className="chat-history__clearfix to-message">
                <div className="chat-history__message">
                  {this.props.externalComment}
                </div>
                <div className="chat-history__details">
                  <span className="chat-history__time">
                    <Moment add={{ hours: 12 }} format="hh:mm A">
                      {sessionTime}
                    </Moment>
                  </span>
                </div>
              </li>
            ) : ( '' )}
          </React.Fragment>
          {this.props.messages ? (
            <React.Fragment>
              {this.props.messages.map((item, i) => (
                <li className={'chat-history__clearfix ' + ( item.isBuyer ? 'to-message' : 'from-message' )} key={i}>
                  <div className="chat-history__message">
                    {item.comment}
                  </div>
                  <div className="chat-history__details">
                  <span className="chat-history__time">
                    <Moment add={{ hours: 12 }} format="hh:mm A">
                      {item.time}
                    </Moment>
                  </span>
                  </div>
                  <div className="avatar"><img src={`${Constants.assetsUrl}/images/${item.image}`} alt=""/></div>
                </li>
              ))}
            </React.Fragment>
          ) : ( '' )}
        </ul>
      </div>
    )
  }
}
