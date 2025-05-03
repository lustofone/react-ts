import React from 'react';
import 'components/MainBlocks/ProjectCard.css';
import Icon from 'components/icons/IconSellector';

const ProjectCard = () => {
  return (
    <div className="project-card">
      <div className="schedule">
        <Icon name="calendar" width={'19px'}></Icon>
        <div className="date">15 сентября-22 августа</div>
      </div>
      <div className="project-info">
        <div className="project-name">Название проекта</div>
        <div className="project-direction">Мобильная разработка</div>
        <div className="participants">
          <div className="specialization">UX/UI</div>
          <div className="specialization">Manual QA</div>
          <div className="specialization">+5</div>
        </div>
      </div>
      <div className="request">Откликнуться</div>
    </div>
  );
};

export default ProjectCard;
