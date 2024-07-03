import React from 'react';

interface GemProps {
  top: number;
  left: number;
  hit: boolean;
}

const Gem: React.FC<GemProps> = ({ top, left, hit }) => {
  if (top > window.innerHeight) {
    return null; // Don't render the gem if it's out of view
  }

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: `${left}%`,
        width: '50px',  // Width of the gem
        height: '50px', // Height of the gem
        backgroundColor: hit ? 'gray' : 'blue', // Change color if hit
      }}
    />
  );
};

export default Gem;
