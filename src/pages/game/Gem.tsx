import React from 'react';

type GemProps = {
  size: number;
  left: number;
  top: number;
};

const Gem: React.FC<GemProps> = ({ size, left, top }) => {
  return (
    <div
      style={{
        width: size,
        height: size,
        backgroundColor: 'blue',
        position: 'absolute',
        left: left,
        top: top,
      }}
    />
  );
};

export default Gem;
