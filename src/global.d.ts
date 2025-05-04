/* eslint-disable @typescript-eslint/no-require-imports */
declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.jpeg' {
  const content: string;
  export default content;
}

declare module '*.gif' {
  const content: string;
  export default content;
}

declare module '*.svg' {
  import React = require('react');
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  export default content;
}
