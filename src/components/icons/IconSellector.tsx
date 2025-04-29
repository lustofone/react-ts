import React from 'react';
import IconBall from './BallVoleyballSVG';
import IconBus from './BusSVG';
import IconCamera from './CameraSVG';
import IconClock from './ClockSVG';
import IconMac from './ComMacOldSVG';
import IconStar from './StarSVG';
import IconExit from './ExitSVG';
import IconLogo from './LogoSVG';

type IconName =
  | 'logo'
  | 'exit'
  | 'ball'
  | 'bus'
  | 'camera'
  | 'clock'
  | 'mac'
  | 'star';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: IconName;
}

function Icon({ name, className, width }: IconProps) {
  if (name === 'logo') return <IconLogo className={className} width={width} />;
  if (name === 'exit') return <IconExit className={className} width={width} />;
  if (name === 'ball') return <IconBall className={className} width={width} />;
  if (name === 'bus') return <IconBus className={className} width={width} />;
  if (name === 'camera')
    return <IconCamera className={className} width={width} />;
  if (name === 'clock')
    return <IconClock className={className} width={width} />;
  if (name === 'mac') return <IconMac className={className} width={width} />;
  if (name === 'star') return <IconStar className={className} width={width} />;
  return <svg></svg>;
}

export default Icon;
