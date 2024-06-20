import React from 'react';
import { Gem as GemType } from '../../types';

type GemProps = {
  gem: GemType;
};

const Gem: React.FC<GemProps> = ({ gem }) => {
  const gemColor = gem.missed
    ? 'bg-red-500'
    : gem.hit
    ? 'bg-green-500'
    : 'bg-blue-500'; // Default color for active gems

  // Only render gem if it's above the now bar (position.y < 1)
  if (gem.position.y >= 1) {
    return null;
  }

  return (
    <div
      className={`absolute rounded-full w-8 h-8 transition-transform ${gemColor}`}
      style={{
        top: `${gem.position.y * 100}vh`, // Positioning based on the gem's position
        transform: `translateY(${gem.position.y * 100}%)`, // Ensuring full-screen effect
        transition: 'transform 0.1s linear', // Smooth fall animation
        zIndex: 2, // Ensure gems appear above the video
      }}
    ></div>
  );
};

export default Gem;
