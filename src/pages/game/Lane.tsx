import React, {useEffect, useState, useRef} from "react";
import Gem from "./Gem";
import Bar from "./Bar";

type GemData = {
  TIME: string;
  LABEL: string;
};

type LaneProps={
  l_width: number;
  l_height: number;
  keyAssigned: string;
  gemData: GemData[];
}

const Lane: React.FC<LaneProps> = ({l_width, l_height, keyAssigned, gemData}) => {
    const [isKeyPressed, setIsKeyPressed]=useState(false);
    const isKeyPressedRef = useRef(false);
    const gemSize =20;
    const gem_x= l_width/2 -gemSize/2;
    const [gems, setGems] = useState<{ x: number; y: number; size: number; speed: number; time: number }[]>([]);

    useEffect(() => {
    
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === keyAssigned && !isKeyPressedRef.current) {
          setIsKeyPressed(true); // Update state when key is pressed
          isKeyPressedRef.current = true;
          console.log("key pressed",event.key);
        }
      };
      const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key === keyAssigned) {
          setIsKeyPressed(false); // Update state when key is pressed
          isKeyPressedRef.current = false;
          console.log("key unpressed",event.key);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        window.removeEventListener('keyup', handleKeyUp);
      };

    },[keyAssigned]);
    
    useEffect(() => {
      const interval = setInterval(() => {
        const currentTime = (new Date()).getTime() / 1000; // Example current time in seconds
  
        const newGems = gemData
          .filter(gem => parseFloat(gem.TIME) <= currentTime)
          .map(gem => ({
            x: gem_x,
            y: 0, // Start from the top
            size: gemSize,
            speed: 5, // Adjust speed as needed
            time: parseFloat(gem.TIME),
          }));
  
        setGems(prevGems => [...prevGems, ...newGems]);
      }, 100);
  
      return () => clearInterval(interval);
    }, [gemData, gem_x, gemSize]);
return (

  <div
    style={{
      position: "relative",
      width: l_width,
      height:l_height,
      border: "1px solid black",
      overflow: "hidden",
    }}
    >
      {gems.map((gem, index) => (
        <Gem key={index} x={gem.x} y={gem.y} size={gem.size} speed={gem.speed} />
      ))}
      <Bar b_width={l_width} b_height={gemSize} isKeyPressed={isKeyPressed}/>
  
      </div>

      
  );
};

export default Lane;
