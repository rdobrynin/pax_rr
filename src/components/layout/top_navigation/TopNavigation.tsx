import * as React from 'react'
import { NavLink } from 'react-router-dom'
import './topNavigation.scss'
import styled from '../../../utils/styled'
import { HeaderProps } from '../../../models/navigation/navigation'
import Media from 'react-media'
import { HamburgerMenuButton } from './hamburger_menu_button/HamburgerMenuButton'

const HeaderNavLink = styled(NavLink)`
`

export const TopNavigation: React.FunctionComponent<HeaderProps> = ({ title, links, logoImage, imageSize }) => (
  <header>
    <Media query="(max-width: 767px)">
      {matches =>
        matches ? (
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
            <div className={'top-navigation'}>
              <HamburgerMenuButton isOpen={false}/>
              <div className={'top-navigation__logo'}>
                <HeaderNavLink exact to="./">
                  <img src={logoImage} alt="" width={imageSize}/>
                </HeaderNavLink>
              </div>
            </div>
          </React.Fragment>
        ) : (
          <div className={'top-navigation'}>
            <div className={'top-navigation__logo'}>
              <HeaderNavLink exact to="./">
                <img src={logoImage} alt="" width={imageSize}/>
              </HeaderNavLink>
            </div>
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
        )
      }
    </Media>
  </header>
)
