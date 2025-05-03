import React from 'react';

import './Header.css';
import Icon from 'components/icons/IconSellector';
import HeaderNavigation from 'components/navigations/HeaderNavigation';

function Header() {
  const navLinks = [
    { label: 'Проекты', href: '/projects' },
    { label: 'Специалисты', href: '/specialists' },
    { label: 'О нас', href: '/about' },
  ];

  return (
    <header className="header" id="header">
      <HeaderNavigation links={navLinks} />

      <a href="#" className="exit">
        <Icon name={'exit'} width={64} />
      </a>
    </header>
  );
}

export default Header;
