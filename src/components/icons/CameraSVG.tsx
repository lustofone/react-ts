import * as React from 'react';

const SvgIcon: React.FC<React.SVGProps<SVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.height}
    viewBox="0 0 32 32"
  >
    <path d="m28 7-15.004.017L13 4.062 5 4v3H3a2 2 0 0 0-2 2v17a2 2 0 0 0 2 2h25a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2M7 6h4v3H7zm5 18.958a7 7 0 1 1 0-14 7 7 0 0 1 0 14m13.5-11.437a2 2 0 1 1-.001-3.999 2 2 0 0 1 .001 3.999m-13.5.104a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9"></path>
  </svg>
);

export default SvgIcon;
