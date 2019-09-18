import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '../../../utils/styled'
import { IHeaderProps } from '../../../models/navigation/navigation'
import './sidebarNavigation.scss'

const HeaderNavLink = styled(NavLink)`
`

export class SidebarNavigation extends React.Component<IHeaderProps> {

  toggleSidebar() {
    //  @todo dispatch
  }

  render() {
    return (
      <React.Fragment>
        <div className={'sidebar-navigation ' + ( this.props.isOpen ? 'is-open' : '' )}>
          <div className={'sidebar-navigation__close'} onClick={this.toggleSidebar.bind(this)}>x</div>
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
      </React.Fragment>
    )
  }
}
