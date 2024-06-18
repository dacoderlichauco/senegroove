import React from 'react';
import { Gem as GemType } from '../../types';

type GemProps = {
  gem: GemType;
};

const Gem: React.FC<GemProps> = ({ gem }) => {
  const gemColor = gem.label === 'f' ? 'bg-lightblue-500' : 'bg-white';
  const gemLeftPosition = gem.label === 'f' ? 'left-1/4' : 'left-3/4';

  return (
    <div
      className={`absolute rounded-full w-8 h-8 transition-transform ${gemColor} ${gemLeftPosition}`}
      style={{
        transform: `translateY(${gem.position.y * 100}%)`,
      }}
    ></div>
  );
};

export default Gem;
