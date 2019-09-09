import * as React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '../../../utils/styled'
import { IHeaderProps } from '../../../models/navigation/navigation'
import './sidebarNavigation.scss'

const HeaderNavLink = styled(NavLink)`
`

export const SidebarNavigation: React.FunctionComponent<IHeaderProps> = ({ links }) => (
  <React.Fragment>
    <div className={'sidebar-navigation'}>
      <nav>
        <ul>
          {links.map((link, i) => (
            <HeaderNavLink key={i} exact to={link.route} activeClassName="is-active">
              {link.title}
            </HeaderNavLink>
          ))}
        </ul>
      </nav>
    </div>
  </React.Fragment>
)
