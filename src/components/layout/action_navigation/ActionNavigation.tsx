import * as React from 'react'
import './ActionNavigation.scss'
import { IActionNavigationProps } from '../../../models/navigation/navigation'
import Media from 'react-media'
import { NavLink } from 'react-router-dom'

export const ActionNavigation: React.FunctionComponent<IActionNavigationProps> = ({ links }) => (

  <React.Fragment>
    <Media query="(max-width: 767px)">
      {matches =>
        matches ? (
          // @todo implement mobile layout
          <div></div>
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
