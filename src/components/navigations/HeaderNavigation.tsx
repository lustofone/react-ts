import React from 'react';
import Icon from 'components/icons/IconSellector';
import './HeaderNavigation.css';

interface HeaderNavigationProps {
  links?: { label: string; href: string }[];
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ links }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <a href="/">
          <Icon name="logo" width={40} />
          <span>codepet</span>
        </a>
        {links && (
          <nav>
            <ul>
              {links.map((link, index) => (
                <li key={index}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};

export default HeaderNavigation;
