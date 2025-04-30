import React from 'react';
import 'components/MainBlocks/Mission.css';
import Button from 'components/buttons/Button';

function Mission() {
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
            <div className="heroes">
              <div className="projects">
                <div className="count">1714</div>
                <div className="items">проектов</div>
              </div>
              <div className="participiants">
                <div className="count">747</div>
                <div className="items">участников</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
