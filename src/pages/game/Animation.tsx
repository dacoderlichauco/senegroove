import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';
import Gem from './Gem';  // Import the Gem component

interface GemData {
  TIME: string;
  LABEL: string;
}

const Animation: React.FC = () => {
  const delta_y = window.innerHeight;
  const y_nb = 50; // Now bar position at the top of the screen
  const x_position = 100;
  const delta_t = 5;
  const width = '500px';  // Desired width
  const height = '400px'; // Desired height maintaining the 16:9 aspect ratio

  // State to hold the positions of the gems, the JSON data, and the hit count
  const [gemPositions, setGemPositions] = useState<number[]>([]);
  const [gemData, setGemData] = useState<GemData[]>([]);
  const [hitCount, setHitCount] = useState(0);
  const [hitGems, setHitGems] = useState<boolean[]>([]);
  const videoRef = useRef<ReactPlayer>(null);
  const hitWindow = 0.25; // Time window for detecting hits, e.g., 0.5 seconds

  // Function to fetch the JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/fandj.json'); // Adjust the path accordingly
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
    if (event.key === 'j' && videoRef.current) {
      const currentTime = videoRef.current.getCurrentTime();
      gemData.forEach((entry, index) => {
        const gemTime = parseFloat(entry.TIME);
        if (!hitGems[index] && Math.abs(gemTime - currentTime) <= hitWindow) {
          setHitGems(prevHitGems => {
            const newHitGems = [...prevHitGems];
            newHitGems[index] = true;
            return newHitGems;
          });
          setHitCount(prevCount => Math.min(prevCount + 1, gemData.length));
        }
      });
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gemData, hitGems]); // Re-adding dependencies here

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <ReactPlayer
          ref={videoRef}
          url="/easy_pattern.mp4"
          controls={true}
          width="100vw"
          height="100vh"
        />
      </div>
      <div className="absolute" style={{ top: delta_y - y_nb, left: 0, width: window.innerWidth, height: 50, backgroundColor: 'yellow' }} />
      {gemPositions.map((pos, index) => (
        pos <= window.innerHeight && (
          <Gem
            key={index}
            top={pos}
            left={x_position}
            hit={hitGems[index]}
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
    </div>
  );
};

export default Animation;
