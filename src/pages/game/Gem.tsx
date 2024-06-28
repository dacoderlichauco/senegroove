import React, { useEffect, useState } from "react";

type GemProps = {
  x: number;
  y: number;
  size: number;
  speed: number;
};

const Gem: React.FC<GemProps> = ({ x, y, size, speed }) => {
  const [position, setPosition] = useState({ x, y });

  useEffect(() => {
    let animationFrameId: number;
    const startTime = performance.now();

    const updatePosition = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      setPosition(prevPosition => {
        const newY = prevPosition.y + (speed * elapsedTime) / 1000;
        console.log('Gem position:', newY);
        return {
          ...prevPosition,
          y: newY, // Update y based on elapsed time
        };
      });
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => cancelAnimationFrame(animationFrameId);
  }, [speed]);

  if (position.y > 1) {
    return null;
  }

  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}px`,
        top: `${position.y * 100}%`, // Convert y to percentage of the lane height
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: 'blue',
        borderRadius: '50%',
      }}
    ></div>
  );
};

export default Gem;