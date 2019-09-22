import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './topNavigation.scss'
import styled from '../../../utils/styled'
import { IHeaderProps } from '../../../models/navigation/navigation'
import Media from 'react-media'
import { SidebarNavigation } from '../sidebar_navigation/SidebarNavigation'
import { Constants } from '../../../utils/constants'

const HeaderNavLink = styled(NavLink)`
`

interface State {
  isOpen: boolean
}

export class TopNavigation extends React.Component<IHeaderProps, State> {
  constructor(props: IHeaderProps) {
    super(props)

    this.state = {
      isOpen: false,
    }
  }

  toggleClickHandler() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <header>
        <Media query="(max-width: 767px)">
          {matches =>
            matches ? (
              <React.Fragment>
                <SidebarNavigation
                  isOpen={this.state.isOpen}
                  title={this.props.title}
                  links={this.props.links}>
                  <div className={'sidebar-navigation__close'} onClick={this.toggleClickHandler.bind(this)}>x</div>
              </SidebarNavigation>
                <div className={'top-navigation'}>
                  <button className={'hamburger-menu-button'} onClick={this.toggleClickHandler.bind(this)}>
                    <div className={'hamburger-menu-button__line'}/>
                    <div className={'hamburger-menu-button__line'}/>
                    <div className={'hamburger-menu-button__line'}/>
                  </button>
                  <div className={'top-navigation__logo'}>
                    <HeaderNavLink exact to="./">
                      <img src={Constants.assetsUrl + '/images/project-logo.png'} width="135px" alt="logo"/>
                    </HeaderNavLink>
                  </div>
                </div>
              </React.Fragment>
            ) : (
              <div className={'top-navigation'}>
                <div className={'top-navigation__logo'}>
                  <HeaderNavLink exact to="./">
                    <img src={Constants.assetsUrl + '/images/project-logo.png'} width="145px" alt="logo"/>
                  </HeaderNavLink>
                </div>
                <nav>
                  <ul>
                    {this.props.links.map((link, i) => (
                      <HeaderNavLink key={i} exact to={link.route} activeClassName="is-active">
                        {link.title}
                      </HeaderNavLink>
                    ))}
                  </ul>
                </nav>
              </div>
            )
          }
        </Media>
      </header>
    )
  }
}
