import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { Score, Gem } from '../../types';

type NowBarProps = {
  videoRef: React.RefObject<ReactPlayer>;
  gems: Gem[];
  updateScore: (score: Score) => void;
};

const NowBar: React.FC<NowBarProps> = ({ videoRef, gems, updateScore }) => {
  const [score, setScore] = useState<Score>({ hits: 0, misses: 0, earlyHits: 0 });
  const [leftActive, setLeftActive] = useState(false);
  const [rightActive, setRightActive] = useState(false);
  const [misses, setMisses] = useState(0);
  const [leftColor, setLeftColor] = useState('bg-pink-500');
  const [rightColor, setRightColor] = useState('bg-purple-500');
  const slopWindow = 0.5; // Adjustable slop window parameter

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'f') {
      setLeftActive(true);
    }
    if (event.key === 'j') {
      setRightActive(true);
    }

    if (videoRef.current) {
      const currentTime = videoRef.current.getCurrentTime();
      const currentGem = gems.find(gem => Math.abs(gem.time - currentTime) <= slopWindow);

      if (currentGem) {
        if ((currentGem.label === 'f' && event.key === 'f') || (currentGem.label === 'j' && event.key === 'j')) {
          if ((event.key === 'f' && currentGem.label === 'f') || (event.key === 'j' && currentGem.label === 'j')) {
            setScore(prevScore => ({ ...prevScore, hits: prevScore.hits + 1 }));
            if (event.key === 'f') {
              setLeftColor('bg-green-500');
              setTimeout(() => setLeftColor('bg-pink-500'), 100);
            }
            if (event.key === 'j') {
              setRightColor('bg-green-500');
              setTimeout(() => setRightColor('bg-purple-500'), 100);
            }
          }
        }
      } else {
        setScore(prevScore => ({ ...prevScore, earlyHits: prevScore.earlyHits + 1 }));
        if (event.key === 'f') {
          setLeftColor('bg-red-500');
          setTimeout(() => setLeftColor('bg-pink-500'), 100);
        }
        if (event.key === 'j') {
          setRightColor('bg-red-500');
          setTimeout(() => setRightColor('bg-purple-500'), 100);
        }
      }

      updateScore({ ...score, misses: misses });
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === 'f') {
      setLeftActive(false);
    }
    if (event.key === 'j') {
      setRightActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [score, misses]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = videoRef.current?.getCurrentTime();
      if (currentTime) {
        const missedGems = gems.filter(gem => gem.time < currentTime - slopWindow);
        if (missedGems.length > 0) {
          setMisses(prevMisses => prevMisses + missedGems.length);
        }
      }
    }, 100);
    return () => clearInterval(interval);
  }, [gems, videoRef]);

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-between h-10">
      <div className={`w-1/2 h-full ${leftColor} flex items-center justify-center`}>
        <span className="text-white text-lg">F</span>
      </div>
      <div className={`w-1/2 h-full ${rightColor} flex items-center justify-center`}>
        <span className="text-white text-lg">J</span>
      </div>
    </div>
  );
};

export default NowBar;
