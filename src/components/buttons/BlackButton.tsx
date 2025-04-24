import React from 'react';

interface BlackButtonProps {
  style?: React.CSSProperties;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const BlackButton: React.FC<BlackButtonProps> = ({ style, children, onClick }) => {
  return (
    <button className="button bg-black" style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default BlackButton;
