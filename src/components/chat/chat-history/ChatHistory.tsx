import * as React from 'react'
import './chathistory.scss'

export const ChatHistory: React.FunctionComponent = () => (
  <div className="chat-history">
    <ul>
      <li className="chat-history__clearfix to-message">
        <div className="chat-history__message">
          Are we meeting today? Project has been already finished and I have results to show you.
        </div>
        <div className="chat-history__details">
          <span className="chat-history__time">10:12 AM</span>
        </div>
      </li>

      <li className="chat-history__clearfix from-message">
        <div className="chat-history__message">
          Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems
          at the last phase of the project?
        </div>
        <div className="chat-history__details">
          <span className="chat-history__time">14:12 AM</span>
        </div>
      </li>

      <li className="chat-history__clearfix from-message">
        <div className="chat-history__message">
          Well I am not sure. The rest of the team is not here yet. Maybe in an hour or so? Have you faced any problems
          at the last phase of the project?
        </div>
        <div className="chat-history__details">
          <span className="chat-history__time">15:12 AM</span>
        </div>
      </li>

    </ul>

  </div>
)
