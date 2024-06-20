import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import NowBar from './NowBar';
import Gem from './Gem';
import { Gem as GemType, Score } from '../../types';

type LaneProps = {
  keyLabel: string;
  orderIndex: number;
  gems: GemType[];
  updateScore: (score: Score) => void;
  videoRef: React.RefObject<ReactPlayer>;
};

const Lane: React.FC<LaneProps> = ({ keyLabel, orderIndex, gems, updateScore, videoRef }) => {
  const [score, setScore] = useState<Score>({ hits: 0, misses: 0, earlyHits: 0 });
  const [active, setActive] = useState(false);
  const [renderedGems, setRenderedGems] = useState<GemType[]>(gems);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === keyLabel) {
      setActive(true);
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === keyLabel) {
      setActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [score]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (videoRef.current) {
        const currentTime = videoRef.current.getCurrentTime();
        const screenHeight = window.innerHeight;
        const nowBarHeight = 50; // Height of the now bar in pixels
        const maxFallDistance = screenHeight - nowBarHeight;
        const fallSpeed = maxFallDistance / 5; // Adjust this value to set the fall speed (pixels per second)

        const updatedGems = gems.map(gem => {
          const timeUntilNowBar = gem.time - currentTime;
          gem.position.y = Math.max(
            0,
            maxFallDistance - timeUntilNowBar * fallSpeed
          ) / screenHeight;
          return gem;
        });

        // Filter out gems that have passed the NowBar
        const filteredGems = updatedGems.filter(gem => gem.position.y < 1);
        setRenderedGems(filteredGems);
      }
    }, 100);
    return () => clearInterval(interval);
  }, [gems, videoRef]);

  return (
    <div className={`lane lane-${orderIndex} border`} style={{ left: `${orderIndex * 20}%`, position: 'absolute', top: 0, height: '100%', width: '20%', zIndex: 0 }}>
      {renderedGems.map((gem, index) => (
        <Gem key={index} gem={gem} />
      ))}
      <NowBar keyLabel={keyLabel} videoRef={videoRef} gems={renderedGems} updateScore={updateScore} />
    </div>
  );
};

export default Lane;
