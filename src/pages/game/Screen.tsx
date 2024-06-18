import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import Gem from './Gem';
import NowBar from './NowBar';
import Score from './Score';
import { Gem as GemType, Score as ScoreType } from '../../types';
import { loadGems, getCurrentTime } from '../../utils';

const Screen: React.FC = () => {
  const videoRef = useRef<ReactPlayer>(null);
  const [gems, setGems] = useState<GemType[]>([]);
  const [score, setScore] = useState<ScoreType>({ hits: 0, misses: 0, earlyHits: 0 });

  useEffect(() => {
    loadGems().then(setGems);
  }, []);

  useEffect(() => {
    const updateGemPositions = () => {
      if (videoRef.current) {
        const currentTime = videoRef.current.getCurrentTime();
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
      <ReactPlayer
        ref={videoRef}
        url="/senegroove-media/easy_pattern.mp4"
        playing
        controls
        width="100%"
        height="75%"
      />
      <NowBar videoRef={videoRef} gems={gems} updateScore={setScore} />
      <Score score={score} />
      {gems.map((gem, index) => (
        <Gem key={index} gem={gem} />
      ))}
    </div>
  );
};

export default Screen;
