import React, { Component, MouseEvent } from 'react'
import './ChatHeaderContainer.scss'

export class ChatHeaderContainer extends Component {
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
              <img src="./assets/images/trash-bin.png" alt="remove"/>
            </button>
          </div>
          <div className={'chatHeader__header'}>
            <div className={'chatHeader__title'}>Amazon Gift Card</div>
            <div className={'chatHeader__value'}>Chanaaar <span>+37</span> / <span>-1</span></div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}
