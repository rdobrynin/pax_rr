import * as React from 'react'
import './chatInput.scss'
import { Constants } from '../../../utils/constants'
// import { UpdateMessageParam } from '../../../pages/trades'

export interface ChatProps {
  message: string;
  userImage: string;
  sendMessage: (message: string) => any;
  // updateMessage: (event: UpdateMessageParam) => void;
}

export const ChatInput: React.FunctionComponent<ChatProps> = ({ userImage, message }) => {
  function keyPress(e: React.KeyboardEvent<any>) {
    if (e.key === 'Enter') {
      send()
    }
  }

  function send() {
    return
    // sendMessage(message)
  }

  return (
    <div className={'chatInput__wrapper'}>
      <input
        // value={message}
        defaultValue=""
        // onChange={updateMessage}
        onKeyPress={keyPress}
        placeholder= {Constants.chat.placeholderText}
      />
      <button onClick={send}>{Constants.chat.handlerInputTitle}</button>
    </div>
  )
}
