import React from 'react';
import 'components/MainBlocks/Mission.css';
import Button from 'components/buttons/Button';
import useFetchData from 'hooks/useFetchData';
import { Data } from 'interfaces';
import DataDisplay from './DataDisplays';

function Mission() {
  const { data, loading, error } = useFetchData<Data>(
    'https://devcodepet.tw1.ru/api/v1/counter/'
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

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
            <DataDisplay data={data} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mission;
