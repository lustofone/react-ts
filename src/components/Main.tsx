import React from 'react';
import { Link } from 'react-router-dom';
import BlackButton from './buttons/Button';
import LogoSVG from 'components/icons/LogoSVG';

interface Props {}

export const Main = ({}: Props) => {
  return (
    <div className="main-content">
      <BlackButton
        children="Создать проект"
        style={{
          background: '#fff',
          width: '200px',
          height: '48px',
        }}
        onClick={() => console.log('Кнопка нажата')}
      />
      <LogoSVG />
      <p>
        Edit <code>src/components/Main.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
};
