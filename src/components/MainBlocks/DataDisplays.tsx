import React from 'react';
import useFetchData from 'hooks/useFetchData';
import { Data } from 'interfaces';

const DataDisplay: React.FC = () => {
  const { data, loading, error } = useFetchData<Data>(
    'https://devcodepet.tw1.ru/api/v1/counter/'
  );

  if (loading) return <div>Loading...</div>;
  if (error) console.log(error, 'error');

  return (
    <div className="heroes">
      <div className="projects">
        <div className="count">{data?.projects ?? 0}</div>
        <div className="items">проектов</div>
      </div>
      <div className="participiants">
        <div className="count">{data?.users ?? 0}</div>
        <div className="items">участников</div>
      </div>
    </div>
  );
};

export default DataDisplay;
