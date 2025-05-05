import React from 'react';
import 'components/Footer.css';
import { ReactComponent as VKLogo } from 'assets/images/vk.svg';
import { ReactComponent as TGLogo } from 'assets/images/tg.svg';
import ProjectLogo from './ProjectLogo';
import FooterNavigation from './navigations/FooterNavigation';

function Footer() {
  const navlinks = [
    { label: 'О нас', href: '/about' },
    { label: 'Проекты', href: '/projects' },
    { label: 'Специалисты', href: '/specialists' },
  ];
  const conditionslinks = [
    { label: 'Пользовательское соглашение', href: '/conditions/agreement' },
    {
      label: 'Условия конфиденциальности',
      href: '/conditions/confidentiality',
    },
  ];
  const contactslinks = [
    { label: 'code_pet@gmail.com', href: 'mailto:code_pet@gmail.com' },
  ];
  return (
    <div className="footer" id="footer">
      <ProjectLogo></ProjectLogo>
      <div className="content">
        <FooterNavigation links={navlinks}>Навигация</FooterNavigation>
        <FooterNavigation links={conditionslinks}>Условия</FooterNavigation>
        <div className="contacts">
          <FooterNavigation links={contactslinks}>Контакты</FooterNavigation>
          <div className="social">
            <a href="https://vk.com/code_pet_oficial">
              <VKLogo width="40" />
            </a>
            <a href="https://t.me/code_pet_oficial">
              <TGLogo width="40" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
