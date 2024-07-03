import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

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
  const gemSize = y_nb;     // Size of the gem
  // State to hold the positions of the gems, the JSON data, and the hit count
  const [gemPositions, setGemPositions] = useState<number[]>([]);
  const [gemData, setGemData] = useState<GemData[]>([]);
  const [hitCount, setHitCount] = useState(0);
  const videoRef = useRef<ReactPlayer>(null);
  const hitWindow = 0.5; // Time window for detecting hits, e.g., 0.5 seconds

  // Function to fetch the JSON data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/fandj.json'); // Adjust the path accordingly
        const data: GemData[] = await response.json();
        setGemData(data);
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
    console.log('Key pressed:', event.key); // Debugging line

    if (event.key === 'j') {
      console.log('Detected key "j"'); // Debugging line
    }

    if (event.key === 'j' && videoRef.current) {
      const currentTime = videoRef.current.getCurrentTime();
      console.log('Key j pressed at video time:', currentTime); // Debugging line
      const isHit = gemData.some(entry => {
        const gemTime = parseFloat(entry.TIME);
        const hit = Math.abs(gemTime - currentTime) <= hitWindow;
        if (hit) {
          console.log('Hit detected for gem at time:', gemTime); // Debugging line
        }
        return hit;
      });
      if (isHit) {
        setHitCount(prevCount => prevCount + 1);
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [gemData]); // Re-adding dependencies here

  return (
    <div>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: width,
          height: height,
          overflow: 'hidden',
        }}
      >
        <ReactPlayer
          ref={videoRef}
          url="/easy_pattern.mp4"
          controls={true}
          width="100%"
          height="100%"
        />
      </div>
      <div className="absolute" style={{ top: delta_y - 50, left: 0, width: window.innerWidth, height: 50, backgroundColor: 'yellow' }} />
      {gemPositions.map((pos, index) => (
        pos <= window.innerHeight && ( // Only render gems within the visible range
          <div
            key={index}
            className="absolute"
            style={{
              top: pos,
              left: x_position,
              width: '50px',  // Width of the gem
              height: '50px', // Height of the gem
              backgroundColor: 'blue', // Color of the gem
            }}
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
