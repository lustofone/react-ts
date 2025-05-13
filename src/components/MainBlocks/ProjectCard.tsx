import React from 'react';
import 'components/MainBlocks/ProjectCard.css';
import Icon from 'components/icons/IconSellector';
import { IActualProject } from 'interfaces';

interface Props {
  project: IActualProject;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const {
    id,
    name,
    started,
    ended,
    directions,
    project_specialists,
    count,
    level,
    is_required,
  } = project;

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'long',
    };
    return new Date(dateString).toLocaleDateString('ru-RU', options);
  };

  const restCount = Math.max(project_specialists.length - 2, 0);

  return (
    <div className="project-card">
      <div className="schedule">
        <Icon name="calendar" width={'19px'}></Icon>
        <div className="date">
          {`${formatDate(started)} - ${formatDate(ended)}`}
        </div>
      </div>
      <div className="project-info">
        <div className="project-name">{name}</div>
        <div className="project-direction">{directions[0].name}</div>
        <div className="participants">
          {project_specialists.map((specialist, idx) => (
            <div key={idx} className="specialization">
              {specialist.profession.specialization}
            </div>
          ))}
          {restCount > 0 && <div className="specialization">+{restCount}</div>}
        </div>
      </div>
      <div className="request">Откликнуться</div>
    </div>
  );
};

export default ProjectCard;
