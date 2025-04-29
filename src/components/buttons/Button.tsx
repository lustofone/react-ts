import React from 'react';
import './Button.module.css';

interface BlackButtonProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const BlackButton: React.FC<BlackButtonProps> = ({
  style,
  children,
  onClick,
}) => {
  return (
    <button className="button" style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default BlackButton;
