import React from 'react';
import s from './FooterNavigation.module.css';

interface FooterNavigationProps {
  children?: React.ReactNode;
  links?: { label: string; href: string }[];
}

const FooterNavigation: React.FC<FooterNavigationProps> = ({
  links,
  children,
}) => {
  return (
    <div className={s.footer_nav}>
      {children && <div className={s.title}>{children}</div>}
      {links && (
        <nav className={s.nav}>
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
  );
};

export default FooterNavigation;
