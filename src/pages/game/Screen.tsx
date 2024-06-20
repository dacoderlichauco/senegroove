import React, { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import Gem from "./Gem";
import NowBar from "./NowBar";
import Score from "./Score";
import { Gem as GemType, Score as ScoreType } from "../../types";

import { loadGems } from "../../utils";

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

  useEffect(() => {
    const updateGemPositions = () => {
      if (videoRef.current) {
        const currentTime = videoRef.current.getCurrentTime();
        const screenHeight = window.innerHeight;
        const nowBarHeight = 50; // Height of the now bar in pixels
        const maxFallDistance = screenHeight - nowBarHeight;
        const fallSpeed = maxFallDistance / 5; // Adjust this value to set the fall speed (pixels per second)

        setGems((prevGems) =>
          prevGems.map((gem) => {
            const timeUntilNowBar = gem.time - currentTime;
            const position = Math.max(
              0,
              maxFallDistance - timeUntilNowBar * fallSpeed
            );

            // Check if gem has passed the now bar without being hit
            if (position >= maxFallDistance && !gem.missed) {
              setScore((prevScore) => ({
                ...prevScore,
                misses: prevScore.misses + 1,
              }));
              gem.missed = true; // Mark gem as missed
            }

            return {
              ...gem,
              position: { ...gem.position, y: position / screenHeight },
            };
          })
        );
      }
    };

    const interval = setInterval(updateGemPositions, 100);
    return () => clearInterval(interval);
  }, []);

  const handleError = (e: any) => {
    console.error("Error playing video:", e);
  };

  return (
    <div className="relative w-full h-screen bg-black">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        {gems.map((gem, index) => (
          <Gem key={index} gem={gem} />
        ))}
      </div>
      <ReactPlayer
        ref={videoRef}
        url="easy_pattern.mp4"
        playing={playing}
        controls
        width="100%"
        height="75%"
        onError={handleError}
      />
      <NowBar videoRef={videoRef} gems={gems} updateScore={setScore} />
      <Score score={score} />
      <button
        className="absolute bottom-20 right-10 p-4 bg-blue-500 text-white rounded"
        onClick={() => setPlaying((prev) => !prev)}
      >
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default Screen;
