import React from 'react';
import Mission from './MainBlocks/Mission';
import ActualProjects from './MainBlocks/ActualProjects';
import './Main.css';

function Main() {
  return (
    <div className="main-content">
      <Mission></Mission>
      <ActualProjects></ActualProjects>
    </div>
  );
}

export default Main;
