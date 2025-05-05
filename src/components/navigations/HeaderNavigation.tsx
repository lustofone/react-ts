import React from 'react';
import s from './HeaderNavigation.module.css';

interface HeaderNavigationProps {
  links?: { label: string; href: string }[];
}

const HeaderNavigation: React.FC<HeaderNavigationProps> = ({ links }) => {
  return (
    <>
      {links && (
        <nav className={s.nav}>
          <ul className={s.ul}>
            {links.map((link, index) => (
              <li key={index}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default HeaderNavigation;
