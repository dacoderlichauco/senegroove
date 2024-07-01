import React, { useState, useEffect } from 'react';
import Gem from './Gem'; // Ensure this path is correct based on your file structure

type JsonEntry = {
  TIME: string;
  LABEL: string;
};

type LaneProps = {
  l_width: number;
  l_height: number;
  keyAssigned: string;
  gemData: JsonEntry[];
  nowBarHeight: number;
  start: boolean;
};

const Lane: React.FC<LaneProps> = ({ l_width, l_height, keyAssigned, gemData, nowBarHeight, start }) => {
  const [gemPositions, setGemPositions] = useState<number[]>(new Array(gemData.length).fill(-Infinity));
  const [startTime, setStartTime] = useState<number | null>(null);
  const T_window = 5; // The amount of time (in seconds) that spans the window height

  useEffect(() => {
    const animationFrameIds: number[] = [];

    const updateGemPositions = () => {
      if (startTime !== null) {
        const currentTime = (Date.now() - startTime) / 1000; // Current time in seconds

        const newPositions = gemData.map(entry => {
          const gemTime = parseFloat(entry.TIME); // Time of the gem in seconds
          const position = l_height * (1 - (currentTime - gemTime) / T_window);
          console.log(`Gem time: ${gemTime}, Current time: ${currentTime}, Position: ${position}`);
          return position;
        });

        setGemPositions(newPositions);

        newPositions.forEach((position, index) => {
          if (position < l_height - nowBarHeight) {
            animationFrameIds[index] = requestAnimationFrame(updateGemPositions);
          }
        });
      }
    };

    if (start) {
      setStartTime(Date.now());
      updateGemPositions();
    }

    return () => {
      animationFrameIds.forEach(id => cancelAnimationFrame(id));
    };
  }, [gemData, start, startTime, l_height, nowBarHeight, T_window]);

  const gemSize = nowBarHeight; // Gem size is equal to nowBarHeight

  return (
    <div style={{ width: l_width, height: l_height, position: 'relative', border: '1px solid black' }}>
      {gemPositions.map((position, index) => (
        position >= 0 && position < (l_height - nowBarHeight) && (
          <Gem
            key={index}
            size={gemSize}
            left={(l_width - gemSize) / 2}
            top={position}
          />
        )
      ))}
      <div
        style={{
          width: '100%',
          height: nowBarHeight,
          backgroundColor: 'red',
          position: 'absolute',
          bottom: 0,
          left: 0,
        }}
      />
    </div>
  );
};

export default Lane;
