import * as React from 'react'
import './chathistory.scss'
import { Message } from '../../../store/chat/types'

export interface ChatHistoryProps {
  messages: Message[];
}

export const ChatHistory: React.FunctionComponent<ChatHistoryProps> = ({ messages }) => (
  <div className="chat-history">
    <ul>
      <li className="chat-history__clearfix to-message">
        <div className="chat-history__message">
          Please choose trade from left sidebar to see the chat.
        </div>
        <div className="chat-history__details">
          <span className="chat-history__time">10:12 AM</span>
        </div>
      </li>
      {messages.map(message => (
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
