import React from 'react';
import './JoinUs.css';
import Button from 'components/buttons/Button';
import joinUsImage from '../../assets/images/join-us.png';

const JoinUs = () => {
  return (
    <div className="join-us">
      <div className="content">
        <div className="text">
          <div className="call">Присоединяйся к нам!</div>
          <div className="description">
            Создай свой проект, собери команду и стань на шаг ближе к мечте
          </div>
        </div>
        <Button style={{ width: '226px', height: '48px' }}>
          Зарегистрироваться
        </Button>
      </div>
      <div className="join-us-img">
        <img src={joinUsImage} alt="" />
      </div>
    </div>
  );
};

export default JoinUs;
