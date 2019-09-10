import * as React from 'react'
import './chatInput.scss'
// import { UpdateMessageParam } from '../../../pages/sell'

export interface ChatProps {
  message: string;
  userName: string;
  sendMessage: (message: string) => any;
  // updateMessage: (event: UpdateMessageParam) => void;
}

export const ChatInput: React.FunctionComponent<ChatProps> = ({ userName, message, sendMessage }) => {
  function keyPress(e: React.KeyboardEvent<any>) {
    if (e.key === 'Enter') {
      send()
    }
  }

  function send() {
    sendMessage(message)
  }

  return (
    <div className={'chatInput__wrapper'}>
      <input
        value={message}
        // onChange={updateMessage}
        onKeyPress={keyPress}
        placeholder="Type a message..."
      />
      <button onClick={send}>Send</button>
    </div>
  )
}
