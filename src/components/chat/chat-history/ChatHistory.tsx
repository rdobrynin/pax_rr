import * as React from 'react'
import Moment from 'react-moment'
import 'moment-timezone'
import './chathistory.scss'
import { Message } from '../../../store/chat/types'
import moment from 'moment'

export interface ChatHistoryProps {
  messages: Message[];
  externalComment: string,
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
          {this.props.messages.map(message => (
            <li className="chat-history__clearfix from-message" key={message.timestamp}>
              <h3>From: {message.user}</h3>
              <div className="chat-history__message">
                {message.message}
                <div className="chat-history__details">
                </div>
                <span className="chat-history__time">{message.timestamp}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}
