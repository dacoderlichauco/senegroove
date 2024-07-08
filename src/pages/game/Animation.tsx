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


  // State to hold the positions of the gems, the JSON data, and the hit count
  const [gemPositions, setGemPositions] = useState<number[]>([]);
  const [gemData, setGemData] = useState<GemData[]>([]);
  const [hitCount, setHitCount] = useState(0);
  const [badHitCount, setBadHitCount] = useState(0); // State for bad hits
  const [hitGems, setHitGems] = useState<boolean[]>([]);
  const [leftKeyActive, setLeftKeyActive] = useState(false);
  const [rightKeyActive, setRightKeyActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false); // State to control video playback
  const videoRef = useRef<ReactPlayer>(null);
  const hitWindow = 0.25; // Time window for detecting hits, e.g., 0.5 seconds

  const keyStates: { [key: string]: boolean } = {}; // Object to track key states

  // Function to fetch the JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/basic_rythm.json'); // Adjust the path accordingly
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
    if (!keyStates[event.key]) { // Only process if the key was not already pressed
      keyStates[event.key] = true;
      let isBadHit = true;
      if (event.key === leftKey || event.key === rightKey) {
        if (event.key === leftKey) {
          setLeftKeyActive(true);
        }
        if (event.key === rightKey) {
          setRightKeyActive(true);
        }
        if (videoRef.current) {
          const currentTime = videoRef.current.getCurrentTime();
          gemData.forEach((entry, index) => {
            const gemTime = parseFloat(entry.TIME);
            const gemLabel = entry.LABEL.toLowerCase();
            const isMatchingLabel = (gemLabel === 'j' && event.key === rightKey) || (gemLabel === 'f' && event.key === leftKey);
            if (Math.abs(gemTime - currentTime) <= hitWindow && isMatchingLabel) {
              if (!hitGems[index]) {
                setHitGems(prevHitGems => {
                  const newHitGems = [...prevHitGems];
                  newHitGems[index] = true;
                  return newHitGems;
                });
                setHitCount(prevCount => Math.min(prevCount + 1, gemData.length));
                isBadHit = false;
              }
            }
          });
        }
      }
      if (isBadHit) {
        setBadHitCount(prevCount => prevCount + 1);
      }
    }
  };

  // Function to handle key release
  const handleKeyRelease = (event: KeyboardEvent) => {
    keyStates[event.key] = false; // Reset key state
    if (event.key === leftKey) {
      setLeftKeyActive(false);
    }
    if (event.key === rightKey) {
      setRightKeyActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    window.addEventListener('keyup', handleKeyRelease);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
      window.removeEventListener('keyup', handleKeyRelease);
    };
  }, [gemData, hitGems, leftKey, rightKey]); // Re-adding dependencies here

  // Function to determine gem x position based on label
  const getGemXPosition = (label: string) => {
    if (label.toLowerCase() === 'j') return 80; // 80% from the left
    if (label.toLowerCase() === 'f') return 20; // 20% from the left
    return 50; // Default to center
  };

  // Function to toggle video playback
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ backgroundColor: 'black', height: '100vh', width: '100vw' }}>
      <button
        style={{
          position: 'absolute',
          top: 10,
          left: 10,
          zIndex: 1000,
          padding: '10px 20px',
          backgroundColor: 'lightgray',
          border: 'none',
          cursor: 'pointer'
        }}
        onClick={togglePlay}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
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
          controls={false}
          playing={isPlaying}
          width="100vw" // Updated width to take up whole viewport
          height="100vh" // Updated height to take up whole viewport
        />
      </div>
      <div className="absolute" style={{ top: delta_y - y_nb, left: 0, width: '50%', height: 50, backgroundColor: leftKeyActive ? '#B3B300' : 'yellow' }} />
      <div className="absolute" style={{ top: delta_y - y_nb, left: '50%', width: '50%', height: 50, backgroundColor: rightKeyActive ? '#B3B300' : 'yellow' }} />
      {gemPositions.map((pos, index) => (
        pos <= window.innerHeight && (
          <Gem
            key={index}
            top={pos}
            left={getGemXPosition(gemData[index].LABEL)} // Determine x position based on label
            hit={hitGems[index]}
            label={gemData[index].LABEL} // Pass the label prop
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
          color: 'white',
        }}
      >
        Hits: {hitCount}
      </div>
      <div
        className="absolute"
        style={{
          top: 40,
          right: 10,
          fontSize: '24px',
          fontWeight: 'bold',
          color: 'white',
        }}
      >
        Bad Hits: {badHitCount}
      </div>
    </div>
  );
};

export default Animation;
