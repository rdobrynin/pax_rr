import * as React from 'react';
import './ActionNavigation.scss';
import { ActionNavigationProps } from '../../../models/navigation/navigation';

export const ActionNavigation: React.FunctionComponent<ActionNavigationProps> = ({ items }) => (
  <div className={'action-navigation'}>
    <nav>
      <ul>
        {items.map((item, i) => (
          // no specs for other pages were assigned;
          <li key={i} className={item.title.toLowerCase() === 'trades' ? 'is_active' : ''}>
            <div>{item.title}</div>
          </li>
        ))}
      </ul>
    </nav>
  </div>
);
