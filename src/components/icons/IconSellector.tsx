import React from 'react';
import IconBall from './BallVoleyballSVG';
import IconBus from './BusSVG';
import IconCamera from './CameraSVG';
import IconClock from './ClockSVG';
import IconMac from './ComMacOldSVG';
import IconStar from './StarSVG';
import IconExit from './ExitSVG';

type IconName = 'ball' | 'bus' | 'camera' | 'clock' | 'mac' | 'star' | 'exit';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

function Icon({ name, className, width }: IconProps) {
  if (name === 'ball') return <IconBall className={className} width={width} />;
  if (name === 'bus') return <IconBus className={className} width={width} />;
  if (name === 'camera')
    return <IconCamera className={className} width={width} />;
  if (name === 'clock')
    return <IconClock className={className} width={width} />;
  if (name === 'mac') return <IconMac className={className} width={width} />;
  if (name === 'star') return <IconStar className={className} width={width} />;
  if (name === 'exit') return <IconExit className={className} width={width} />;
  return <svg></svg>;
}

export default Icon;
