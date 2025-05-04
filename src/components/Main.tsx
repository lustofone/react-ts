import React from 'react';
import Mission from './MainBlocks/Mission';
import ActualProjects from './MainBlocks/ActualProjects';
import JoinUs from './MainBlocks/JoinUs';
import './Main.css';

function Main() {
  return (
    <div className="main-content">
      <Mission></Mission>
      <ActualProjects></ActualProjects>
      <JoinUs></JoinUs>
    </div>
  );
}

export default Main;
