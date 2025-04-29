import React from 'react';
import BlackButton from './buttons/Button';
import './Header.module.css';
import useScrollTo from '../hooks/useScrollTo';
import Icon from 'components/icons/IconSellector';

function Header() {
  const scrollTo = useScrollTo();
  return (
    <header className="header">
      <a href="#">
        <Icon name="ball" width={32} />
      </a>
      <a href="#" className="bus">
        <Icon name={'bus'} width={32} />
      </a>
      <a href="#" className="camera">
        <Icon name={'camera'} width={32} />
      </a>
      <a href="#" className="clock">
        <Icon name={'clock'} width={32} />
      </a>
      <a href="#" className="mac">
        <Icon name={'mac'} width={32} />
      </a>
      <a href="#" className="star">
        <Icon name={'star'} width={32} />
      </a>
      <BlackButton
        children="Test"
        style={{
          width: '56px',
          height: '56px',
        }}
        onClick={() => scrollTo('footer')}
      />
      <a href="#" className="exit">
        <Icon name={'exit'} width={56} />
      </a>
    </header>
  );
}

export default Header;
