import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './topNavigation.scss';
import styled from '../../../utils/styled';
import { HeaderProps } from '../../../models/navigation/navigation';

const HeaderNavLink = styled(NavLink)`
`;

export const TopNavigation: React.FunctionComponent<HeaderProps> = ({ title, links, logoImage, imageSize }) => (
  <header>
    <div className={'top-navigation'}>
      <div className={'top-navigation__logo'}>
          <HeaderNavLink  exact to="./">
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
  </header>
);
