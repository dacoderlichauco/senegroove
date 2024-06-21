import React, { useState, useEffect } from 'react';
import { Gem as GemType } from '../../types';

type GemProps = {
  gem: GemType;
};

const Gem: React.FC<GemProps> = ({ gem }) => {
  const gemColor = gem.label === 'f' ? 'bg-lightblue-500' : 'bg-white';
  const gemLeftPosition = gem.label === 'f' ? 'left-1/4' : 'left-3/4';

  // Only render gem if it's above the now bar (position.y < 1)
  if (gem.position.y >= 1) {
    return null;
  }

  return (
    <div
      className={`absolute rounded-full w-8 h-8 transition-transform ${gemColor} ${gemLeftPosition}`}
      style={{
        transform: `translateY(${gem.position.y * 100}vh)`, // Use viewport height for full-screen effect
      }}
    ></div>
  );
};

export default Gem;
