import React from 'react';
import BlackButton from './buttons/BlackButton';

function Main() {
  return (
    <div className="App-header main-content">
      <BlackButton
        children="Создать проект"
        style={{
          width: '200px',
          height: '48px',
        }}
        onClick={() => console.log('Кнопка нажата')}
      />
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
}

export default Main;
