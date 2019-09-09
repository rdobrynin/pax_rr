import React, { Component, MouseEvent } from 'react'
import './chatInput.scss'

export class ChatInput extends Component {
  handleClick(event: MouseEvent) {
    event.preventDefault()
    alert(event.currentTarget.tagName) // alerts BUTTON
  }

  render() {
    return <div className={'chatInput__wrapper'}>
      <input type="text" placeholder={'Type your message'}/>
      <button onClick={this.handleClick}>
        send
      </button>
    </div>
  }
}
