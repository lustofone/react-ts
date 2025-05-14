import React from 'react';
import Mission from './MainBlocks/Mission';
import ActualProjects from './MainBlocks/ActualProjects';
import JoinUs from './MainBlocks/JoinUs';
import s from './Main.module.css';

const Main = () => {
  return (
    <main className={s.main}>
      <div className="main_container">
        <Mission></Mission>
        <ActualProjects></ActualProjects>
        <JoinUs></JoinUs>
      </div>
    </main>
  );
};

export default Main;
