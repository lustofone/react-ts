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
      <div className={`main_container ${s.header_container}`}>
        <div className={s.header_navigation}>
          <ProjectLogo></ProjectLogo>
          <HeaderNavigation links={navLinks} />
        </div>
        <div className={s.exit_button}>
          <a href="#" className={s.exit_link}>
            <Icon name={'exit'} width={64} />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
