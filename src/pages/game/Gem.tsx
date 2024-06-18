import React from 'react';
import { Gem as GemType } from '../../types';

type GemProps = {
  gem: GemType;
};

const Gem: React.FC<GemProps> = ({ gem }) => {
  return (
    <div
      className={`absolute bg-red-500 rounded-full w-8 h-8 transition-transform`}
      style={{
        transform: `translate(${gem.position.x * 50}%, ${gem.position.y * 100}%)`,
      }}
    ></div>
  );
};

export default Gem;
