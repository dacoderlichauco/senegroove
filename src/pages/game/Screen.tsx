import React, { useEffect, useRef, useState } from 'react';
import Gem from './Gem';
import NowBar from './NowBar';
import Score from './Score';
import { Gem as GemType, Score as ScoreType } from '../../types';
import { loadGems, getCurrentTime } from '../../utils';

const Screen: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [gems, setGems] = useState<GemType[]>([]);
  const [score, setScore] = useState<ScoreType>({ hits: 0, misses: 0, earlyHits: 0 });

  useEffect(() => {
    loadGems().then(setGems);
  }, []);

  useEffect(() => {
    const updateGemPositions = () => {
      if (videoRef.current) {
        const currentTime = getCurrentTime(videoRef.current);
        setGems(prevGems =>
          prevGems.map(gem => ({
            ...gem,
            position: { ...gem.position, y: currentTime - gem.time },
          }))
        );
      }
    };

    const interval = setInterval(updateGemPositions, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
      <video ref={videoRef} className="w-full h-3/4" controls>
        <source src="your-video-url.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <NowBar videoRef={videoRef} gems={gems} updateScore={setScore} />
      <Score score={score} />
      {gems.map((gem, index) => (
        <Gem key={index} gem={gem} />
      ))}
    </div>
  );
};

export default Screen;
