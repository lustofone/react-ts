import React from 'react';

import s from './Header.module.css';
import Icon from 'components/icons/IconSellector';
import HeaderNavigation from 'components/navigations/HeaderNavigation';
import ProjectLogo from './ProjectLogo';

function Header() {
  const navLinks = [
    { label: 'Проекты', href: '/projects' },
    { label: 'Специалисты', href: '/specialists' },
    { label: 'О нас', href: '/about' },
  ];

  return (
    <header className={s.header} id="header">
      <div className={s.container}>
        <ProjectLogo></ProjectLogo>
        <HeaderNavigation links={navLinks} />
      </div>
      <a href="#" className={s.exit}>
        <Icon name={'exit'} />
      </a>
    </header>
  );
}

export default Header;
