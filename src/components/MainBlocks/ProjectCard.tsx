import React from 'react';
import 'components/MainBlocks/ProjectCard.css';
import Icon from 'components/icons/IconSellector';
import { IActualProject } from 'interfaces';

const specializationColors: { [key: string]: string } = {
  Software: '#FF5733',
  Frontend: '#FF5733',
  Backend: '#33FF57',
  DevOps: '#3357FF',
  Fullstack: '#3357FF',
  'Automation QA': '#F3FF33',
  'Manual QA': '#F6BD60',
  'Performance QA': '#F3FF33',
  'UI/UX Designer': '#FF33F3',
  Modile: '#FF33F3',
  'System Administration': '#FF33F3',
  'Graphic Designer': '#FF33F3',
  'Project Manager': '#FF33F3',
  'Systems Analyst': '#FF33F3',
  'Business Analyst': '#FF33F3',
  'Data Analyst': '#FF33F3',
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
