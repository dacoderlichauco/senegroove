import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import Gem from './Gem';  // Import the Gem component

interface GemData {
  TIME: string;
  LABEL: string;
}

interface AnimationProps {
  videoUrl: string;
  leftKey: string;
  rightKey: string;
}

const Animation: React.FC<AnimationProps> = ({ videoUrl, leftKey, rightKey }) => {
  const delta_y = window.innerHeight;
  const y_nb = 50; // Now bar position at the top of the screen
  const delta_t = 5;
  const width = '100vw';  // Desired width to take up the whole viewport width
  const height = '100vh'; // Desired height to take up the whole viewport height

  // State to hold the positions of the gems, the JSON data, and the hit count
  const [gemPositions, setGemPositions] = useState<number[]>([]);
  const [gemData, setGemData] = useState<GemData[]>([]);
  const [hitCount, setHitCount] = useState(0);
  const [missCount, setMissCount] = useState(0);  // State to hold the miss count
  const [hitGems, setHitGems] = useState<boolean[]>([]);
  const videoRef = useRef<ReactPlayer>(null);
  const hitWindow = 0.25; // Time window for detecting hits, e.g., 0.5 seconds

  // Function to fetch the JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/basic_rythm.json"); // Adjust the path accordingly
        const data: GemData[] = await response.json();
        setGemData(data);
        setHitGems(new Array(data.length).fill(false));
      } catch (error) {
        console.error('Error fetching JSON data:', error);
      }
    };

    fetchData();
  }, []);

  // Function to update gem positions based on the current time
  const updateGemPositions = (t: number) => {
    const timeValues = gemData.map(entry => parseFloat(entry.TIME));
    const positions = timeValues.map(t_g => delta_y - ((delta_y / delta_t) * (t_g - t) + y_nb));
    setGemPositions(positions);
  };

  // Animation loop
  const animate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.getCurrentTime();
      updateGemPositions(currentTime);
    }
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Start the animation loop
    requestAnimationFrame(animate);
  }, [gemData]); // Start the loop after gem data is loaded

  // Function to handle key press
  const handleKeyPress = (event: KeyboardEvent) => {
    const isHitKey = event.key === leftKey || event.key === rightKey;
    if (isHitKey && videoRef.current) {
      const currentTime = videoRef.current.getCurrentTime();
      let hit = false;
      gemData.forEach((entry, index) => {
        const gemTime = parseFloat(entry.TIME);
        const gemLabel = entry.LABEL.toLowerCase();
        const isMatchingLabel = (gemLabel === 'j' && event.key === rightKey) || (gemLabel === 'f' && event.key === leftKey);
        if (!hitGems[index] && Math.abs(gemTime - currentTime) <= hitWindow && isMatchingLabel) {
          setHitGems(prevHitGems => {
            const newHitGems = [...prevHitGems];
            newHitGems[index] = true;
            return newHitGems;
          });
          setHitCount(prevCount => Math.min(prevCount + 1, gemData.length));
          hit = true;
        }
      });
      if (!hit) {
        setMissCount(prevCount => prevCount + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gemData, hitGems, leftKey, rightKey]); // Re-adding dependencies here

  // Function to determine gem x position based on label
  const getGemXPosition = (label: string) => {
    if (label.toLowerCase() === 'j') return 80; // 80% from the left
    if (label.toLowerCase() === 'f') return 20; // 20% from the left
    return 50; // Default to center
  };

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw', // Updated width to take up whole viewport
          height: '100vh', // Updated height to take up whole viewport
          overflow: 'hidden',
        }}
      >
        <ReactPlayer
          ref={videoRef}
          url={videoUrl} // Use the videoUrl prop
          controls={true}
          width="100vw" // Updated width to take up whole viewport
          height="50vh" // Updated height to take up whole viewport
        />
      </div>
      <div className="absolute" style={{ top: delta_y - y_nb, left: 0, width: window.innerWidth, height: 50, backgroundColor: 'yellow' }} />
      {gemPositions.map((pos, index) => (
        pos <= window.innerHeight && (
          <Gem
            key={index}
            top={pos}
            left={getGemXPosition(gemData[index].LABEL)} // Determine x position based on label
            hit={hitGems[index]}
            label={gemData[index].LABEL} // Pass the label to the Gem component
          />
        )
      ))}
      <div
        className="absolute"
        style={{
          top: 10,
          right: 10,
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        Hits: {hitCount}
      </div>
      <div
        className="absolute"
        style={{
          top: 50,
          right: 10,
          fontSize: '24px',
          fontWeight: 'bold',
        }}
      >
        Misses: {missCount}
      </div>
    </div>
  );
};

export default Animation;
