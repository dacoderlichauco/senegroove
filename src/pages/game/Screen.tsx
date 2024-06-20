import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import Lane from './Lane';
import { Gem as GemType, Score as ScoreType } from '../../types';
import { loadGems } from '../../utils';

const Screen: React.FC = () => {
  const videoRef = useRef<ReactPlayer>(null);
  const [gems, setGems] = useState<GemType[]>([]);
  const [score, setScore] = useState<ScoreType>({
    hits: 0,
    misses: 0,
    earlyHits: 0,
  });
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    loadGems().then(setGems);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
      <ReactPlayer
        ref={videoRef}
        url="easy_pattern.mp4"
        playing={playing}
        controls
        width="100%"
        height="75%"
      />
      <Lane keyLabel="f" orderIndex={0} gems={gems.filter(g => g.label === 'f')} updateScore={setScore} videoRef={videoRef} />
      <Lane keyLabel="j" orderIndex={1} gems={gems.filter(g => g.label === 'j')} updateScore={setScore} videoRef={videoRef} />
      <button
        className="absolute bottom-20 right-10 p-4 bg-blue-500 text-white rounded"
        onClick={() => setPlaying(prev => !prev)}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Screen;
