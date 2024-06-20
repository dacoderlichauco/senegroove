import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Score, Gem } from '../../types';

type NowBarProps = {
  keyLabel: string;
  videoRef: React.RefObject<ReactPlayer>;
  gems: Gem[];
  updateScore: (score: Score) => void;
};

const NowBar: React.FC<NowBarProps> = ({ keyLabel, videoRef, gems, updateScore }) => {
  const [score, setScore] = useState<Score>({ hits: 0, misses: 0, earlyHits: 0 });
  const [color, setColor] = useState('bg-default-color'); // Default color
  const slopWindow = 0.5; // Adjustable slop window parameter

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === keyLabel) {
      if (videoRef.current) {
        const currentTime = videoRef.current.getCurrentTime();
        const currentGem = gems.find(gem => Math.abs(gem.time - currentTime) <= slopWindow);

        if (currentGem) {
          if (currentGem.label === keyLabel) {
            setScore(prevScore => ({ ...prevScore, hits: prevScore.hits + 1 }));
            setColor('bg-green-500');
            setTimeout(() => setColor('bg-default-color'), 50);
          } else {
            setScore(prevScore => ({ ...prevScore, misses: prevScore.misses + 1 }));
            currentGem.missed = true;
            setColor('bg-red-500');
            setTimeout(() => setColor('bg-default-color'), 50);
          }
        } else {
          setScore(prevScore => ({ ...prevScore, earlyHits: prevScore.earlyHits + 1 }));
          setColor('bg-red-500');
          setTimeout(() => setColor('bg-default-color'), 50);
        }

        updateScore(score);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [score]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        const currentTime = videoRef.current.getCurrentTime();
        const missedGems = gems.filter(gem => gem.time < currentTime - slopWindow && !gem.missed);
        if (missedGems.length > 0) {
          setScore(prevScore => ({ ...prevScore, misses: prevScore.misses + missedGems.length }));
          missedGems.forEach(gem => gem.missed = true); // Mark these gems as missed
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, [gems, videoRef]);

  return (
    <div className={`nowbar w-full h-10 ${color} flex items-center justify-center border-4 border-white`} style={{ position: 'absolute', bottom: 0 }}>
      <span className="text-white text-lg">{keyLabel.toUpperCase()}</span>
    </div>
  );
};

export default NowBar;
