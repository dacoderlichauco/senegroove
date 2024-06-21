import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import Lane from './Lane';
import { Gem as GemType } from '../../types';
import { loadGems } from '../../utils';

const Screen: React.FC = () => {
  const videoRef = useRef<ReactPlayer>(null);
  const [gems, setGems] = useState<GemType[]>([]);
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
        controls={false}
        width="100%"
        height="75%"
        style={{ position: 'relative', zIndex: 1 }}
      />
      <div className="absolute top-0 w-full h-full" style={{ zIndex: 2 }}>
        <Lane keyLabel="f" orderIndex={0} gems={gems.filter(g => g.label === 'f')} videoRef={videoRef} />
        <Lane keyLabel="j" orderIndex={1} gems={gems.filter(g => g.label === 'j')} videoRef={videoRef} />
      </div>
      <button
        className="absolute bottom-20 right-10 p-4 bg-blue-500 text-white rounded"
        onClick={() => setPlaying(prev => !prev)}
        style={{ zIndex: 3 }} // Ensure the button is on top
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Screen;
