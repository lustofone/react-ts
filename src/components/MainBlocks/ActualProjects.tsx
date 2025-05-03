import React from 'react';
import 'components/MainBlocks/ActualProjects.css';
import Button from 'components/buttons/Button';
import ProjectCard from './ProjectCard';

const ActualProjects = () => {
  return (
    <div className="actual-projects">
      <div className="header">
        <p className="title">Актуальные проекты</p>
        <p className="description">
          Примените свои навыки и получите опыт работы в команде
          единомышленников, присоединившись к актуальным проектам.
        </p>
      </div>
      <div className="project-cards">
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
        <ProjectCard></ProjectCard>
      </div>
      <div className="actions">
        <Button style={{ height: '48px', width: '200px' }}>Все проекты</Button>
      </div>
    </div>
  );
};

export default ActualProjects;
