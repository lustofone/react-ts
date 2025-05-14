import React from 'react';
import 'components/MainBlocks/Mission.css';
import Button from 'components/buttons/Button';
import DataDisplay from './DataDisplays';

const Mission = () => {
  return (
    <div className="mission">
      <div className="wrapper">
        <div className="background"></div>
        <div className="content">
          <div className="slogan">
            <div className="goal">
              Пет-проекты для всех и идеальный для тебя
            </div>
            <div className="description">
              CodePET - платформа, которая дает возможности для сотрудничества,
              обмена знаниями и портфолио
            </div>
          </div>
          <div className="flex-spacer"></div>
          <div className="bottom">
            <div className="button-container">
              <Button style={{ height: '48px' }}>Создать проект</Button>
            </div>
            <DataDisplay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;
