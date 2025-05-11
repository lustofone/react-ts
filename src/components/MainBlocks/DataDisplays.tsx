import React from 'react';
import { Data } from 'interfaces';

interface DataDisplayProps {
  data: Data | null;
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
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
