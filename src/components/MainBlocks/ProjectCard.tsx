import React from 'react';
import 'components/MainBlocks/ProjectCard.css';
import Icon from 'components/icons/IconSellector';
import { IActualProject } from 'interfaces';

const specializationColors: { [key: string]: string } = {
  'Manual QA': '#F6BC5F',
  'Automation QA': '#F6BC5F',
  'Performance QA': '#F6BC5F',
  'Systems Analyst': '#CCB3DA',
  'Data Analyst': '#CCB3DA',
  'Business Analyst': '#CCB3DA',
  DevOps: '#A1D1FE',
  'System Administration': '#A1D1FE',
  'Project Manager': '#8BA9FF',
  'UI/UX Designer': '#B8F18B',
  'Graphic Designer': '#B8F18B',
  Frontend: '#F28381',
  Software: '#FF5733',
  Backend: '#33FF57',
  Fullstack: '#3357FF',
  Modile: '#FF33F3',
};

const ProjectCard: React.FC<{ project: IActualProject }> = ({ project }) => {
  const { name, started, ended, directions, project_specialists } = project;

  const formatDate = (dateString: string): string => {
    const options: Intl.DateTimeFormatOptions = {
      day: 'numeric',
      month: 'short',
      year: 'numeric',
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
          {project_specialists.map((specialist, idx) => {
            const specialization = specialist.profession.specialization;
            const color = specializationColors[specialization] || '#CCCCCC';

            return (
              <div
                key={idx}
                className="specialization"
                style={{ backgroundColor: color }}
              >
                {specialization}
              </div>
            );
          })}
          {restCount > 0 && (
            <div className=" specialization specialization-count">
              +{restCount}
            </div>
          )}
        </div>
      </div>
      <div className="request">Откликнуться</div>
    </div>
  );
};

export default ProjectCard;
