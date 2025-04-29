import React from 'react';
import useScrollTo from '../hooks/useScrollTo';
import Button from 'components/buttons/Button';
import Icon from 'components/icons/IconSellector';

function Footer() {
  const scrollTo = useScrollTo();
  return (
    <div className="footer" id="footer">
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
      <Button
        children={<Icon name={'exit'} width={56} />}
        onClick={() => scrollTo('footer')}
      />
    </div>
  );
}

export default Footer;
