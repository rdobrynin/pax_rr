import * as React from 'react'
import './ActionNavigation.scss'
import { IActionNavigationProps } from '../../../models/navigation/navigation'
import Media from 'react-media'

export const ActionNavigation: React.FunctionComponent<IActionNavigationProps> = ({ items }) => (

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
                {items.map((item, i) => (
                  // no specs for other pages were assigned;
                  <li key={i} className={item.title.toLowerCase() === 'trades' ? 'is-active' : ''}>
                    <div>{item.title}</div>
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
