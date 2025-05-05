import React from 'react';
import Icon from './icons/IconSellector';
import s from './ProjectLogo.module.css';

const ProjectLogo = () => {
  return (
    <div className={s.wrapper}>
      <a href="/">
        <Icon name="logo" width={40} />
        <span>codepet</span>
      </a>
    </div>
  );
};

export default ProjectLogo;
