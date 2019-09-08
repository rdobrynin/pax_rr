import React from 'react'
import './hamburgerMenuButton.scss';

interface State {
  isOpen: false;
}

export const HamburgerMenuButton: React.FunctionComponent<State> = () => (
  <div>
    <button className={'hamburger-menu-button'}>
      <div className={'hamburger-menu-button__line'}/>
      <div className={'hamburger-menu-button__line'}/>
      <div className={'hamburger-menu-button__line'}/>
    </button>
  </div>
)
