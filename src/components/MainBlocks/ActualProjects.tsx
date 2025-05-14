import React from 'react';
import 'components/MainBlocks/ActualProjects.css';
import Button from 'components/buttons/Button';
import ProjectCard from './ProjectCard';
import useFetchData from 'hooks/useFetchData';
import { IActualProjects } from 'interfaces';

const ActualProjects = () => {
  const { data, loading, error } = useFetchData<IActualProjects>(
    'https://devcodepet.tw1.ru/api/v1/projects/preview_main/'
  );

  if (loading) return <div>Loading...</div>;
  if (error) {
    console.log(error);
  }

  const projects = data?.results || [];

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
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project}></ProjectCard>
        ))}
      </div>
      <div className="actions">
        <Button style={{ height: '48px', width: '200px' }}>Все проекты</Button>
      </div>
    </div>
  );
};

export default ActualProjects;
