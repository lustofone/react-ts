import React from 'react';
import useScrollTo from '../hooks/useScrollTo';
import Button from 'components/buttons/Button';
import Icon from 'components/icons/IconSellector';
import Timer from 'components/Timer';
import 'components/Footer.css';

function Footer() {
  const scrollTo = useScrollTo();

  return (
    <div className="footer" id="footer">
      <a href="#" className="star">
        <Icon name={'star'} width={16} />
      </a>
      <Button
        children={<Icon name={'exit'} width={56} />}
        onClick={() => scrollTo('header')}
      />
      <Timer></Timer>
    </div>
  );
}

export default Footer;
