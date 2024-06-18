import React, { useEffect, useState } from 'react';
import { Score, Gem } from '../../types';

type NowBarProps = {
  videoRef: React.RefObject<HTMLVideoElement>;
  gems: Gem[];
  updateScore: (score: Score) => void;
};

const NowBar: React.FC<NowBarProps> = ({ videoRef, gems, updateScore }) => {
  const [score, setScore] = useState<Score>({ hits: 0, misses: 0, earlyHits: 0 });
  const slopWindow = 0.1; // Adjustable slop window parameter

  const handleKeyPress = (event: KeyboardEvent) => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const currentGem = gems.find(gem => Math.abs(gem.time - currentTime) <= slopWindow);

      if (currentGem) {
        if ((currentGem.label === 'f' && event.key === 'f') || (currentGem.label === 'j' && event.key === 'j')) {
          setScore(prevScore => ({ ...prevScore, hits: prevScore.hits + 1 }));
        }
      } else {
        setScore(prevScore => ({ ...prevScore, earlyHits: prevScore.earlyHits + 1 }));
      }

      updateScore(score);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [score]);

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-between">
      <div className="w-1/2 h-10 bg-blue-500"></div>
      <div className="w-1/2 h-10 bg-green-500"></div>
    </div>
  );
};

export default NowBar;
