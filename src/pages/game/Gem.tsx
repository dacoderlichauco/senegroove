import React, { useState, useEffect } from 'react';

interface GemProps {
  top: number;
  left: number;
  time: number;
  currentTime: number;
  hitWindow: number;
  onHit: () => void;
}

const Gem: React.FC<GemProps> = ({ top, left, time, currentTime, hitWindow, onHit }) => {
  const [hit, setHit] = useState(false);

  useEffect(() => {
    if (!hit && Math.abs(time - currentTime) <= hitWindow) {
      setHit(true);
      onHit();
    }
  }, [currentTime, hit, hitWindow, onHit, time]);

  if (top > window.innerHeight) {
    return null; // Don't render the gem if it's out of view
  }

  return (
    <div
      className="absolute"
      style={{
        top: top,
        left: left,
        width: '50px',  // Width of the gem
        height: '50px', // Height of the gem
        backgroundColor: hit ? 'gray' : 'blue', // Change color if hit
      }}
    />
  );
};

export default Gem;
