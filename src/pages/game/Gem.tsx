import React from 'react';

interface GemProps {
  label: string;
  left: number;
  top: number;
  hit: boolean;
}

const Gem: React.FC<GemProps> = ({ label, left, top, hit }) => {
  const isNumber = !isNaN(Number(label));

  return (
    <div
      className={`absolute text-black font-bold text-center flex items-center justify-center rounded-full ${hit ? 'bg-green-500' : 'bg-blue-100'}`}
      style={{
        width: '50px',
        height: '50px',
        left: `${left}%`,
        top: `${top}px`,
      }}
    >
      {isNumber ? label : ''}
    </div>
  );
};

export default Gem;
