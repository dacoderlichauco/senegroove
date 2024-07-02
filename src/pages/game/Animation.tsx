import React, { useState, useEffect, useRef } from 'react';
import ReactPlayer from 'react-player';

interface GemData {
  TIME: string;
  LABEL: string;
}

const Animation: React.FC = () => {
  const delta_y = window.innerHeight;
  const y_nb = window.innerHeight - 40;
  const x_position = 100;
  const delta_t = 5;
  const width = '500px';  // Desired width
  const height = '400px'; // Desired height maintaining the 16:9 aspect ratio

  // State to hold the positions of the gems and the JSON data
  const [gemPositions, setGemPositions] = useState<number[]>([]);
  const [gemData, setGemData] = useState<GemData[]>([]);
  const videoRef = useRef<ReactPlayer>(null);

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
    const positions = timeValues.map(t_g => (delta_y / delta_t) * (t_g - t) + y_nb);
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
      <div className="absolute" style={{ top: y_nb, left: 0, width: window.innerWidth, height: 40, backgroundColor: 'yellow' }} />
      {gemPositions.map((pos, index) => (
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
      ))}
    </div>
  );
};

export default Animation;
