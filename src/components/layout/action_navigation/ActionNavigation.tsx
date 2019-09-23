import * as React from 'react'
import './ActionNavigation.scss'
import { IActionNavigationProps } from '../../../models/navigation/navigation'
import Media from 'react-media'
import { NavLink } from 'react-router-dom'
import { RouteComponentProps } from 'react-router'

interface RouteParams {
  hash: string
}

export class ActionNavigation extends React.Component<IActionNavigationProps&RouteComponentProps<RouteParams>> {
  render() {
    const {links } = this.props
    return (
      <React.Fragment>
        <Media query="(max-width: 767px)">
          {matches =>
            matches ? (
              <div/>
            ) : (

              <div className={'action-navigation'}>
                <nav>
                  <ul>
                    {links.map((link, i) => (
                      <li key={i}>
                        <NavLink activeClassName={'is-active'} exact={true} to={link.route}>
                          <div>{link.title}</div>
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            )
          }
        </Media>
      </React.Fragment>
    )
  }
}
