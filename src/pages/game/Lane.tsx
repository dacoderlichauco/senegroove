import React, { useEffect, useState, useRef } from "react";
import Gem from "./Gem";
import Bar from "./Bar";
import { GemData } from "../../types";

type LaneProps = {
  l_width: number;
  l_height: number;
  keyAssigned: string;
  gemData: GemData[];
  nowBarHeight: number;
};

const Lane: React.FC<LaneProps> = ({ l_width, l_height, keyAssigned, gemData, nowBarHeight }) => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);
  const isKeyPressedRef = useRef(false);
  const [gems, setGems] = useState<{ x: number; y: number; size: number; speed: number; time: number }[]>([]);

  const gemSize = 20;
  const gem_x = l_width / 2 - gemSize / 2;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === keyAssigned && !isKeyPressedRef.current) {
        setIsKeyPressed(true);
        isKeyPressedRef.current = true;
        console.log("key pressed", event.key);
      }
    };
    const handleKeyUp = (event: KeyboardEvent) => {
      if (event.key === keyAssigned) {
        setIsKeyPressed(false);
        isKeyPressedRef.current = false;
        console.log("key unpressed", event.key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [keyAssigned]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = (new Date()).getTime() / 1000;
      console.log('Current time:', currentTime);
      console.log('Gem data:', gemData);

      const newGems = gemData
        .map(gem => {
          const gemTime = parseFloat(gem.TIME);
          const duration = currentTime - gemTime;
          const speed = nowBarHeight / duration;
          console.log('Creating new gem:', gem, 'with speed:', speed);

          return {
            x: gem_x,
            y: 0,
            size: gemSize,
            speed: speed,
            time: gemTime,
          };
        });

      console.log('Adding new gems:', newGems);
      setGems(prevGems => [...prevGems, ...newGems]);
    }, 100);

    return () => clearInterval(interval);
  }, [gemData, gem_x, gemSize, nowBarHeight]);

  return (
    <div
      style={{
        position: "relative",
        width: l_width,
        height: l_height,
        border: "1px solid black",
        overflow: "hidden",
      }}
    >
      {gems.map((gem, index) => (
        <Gem key={index} x={gem.x} y={gem.y} size={gem.size} speed={gem.speed} />
      ))}
      <Bar b_width={l_width} b_height={gemSize} isKeyPressed={isKeyPressed} />
    </div>
  );
};

export default Lane;