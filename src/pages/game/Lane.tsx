import React, {useEffect, useState, useRef} from "react";
import Gem from "./Gem";
import Bar from "./Bar";

type LaneProps={
  l_width: number;
  l_height: number;
  keyAssigned: string;
}

const Lane: React.FC<LaneProps> = ({l_width, l_height, keyAssigned}) => {
    const [isKeyPressed, setIsKeyPressed]=useState(false);
    const isKeyPressedRef = useRef(false);
    const gemSize =20;
    const gem_x= l_width/2 -gemSize/2;
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
      <Gem x={gem_x} size={gemSize} speed={5}/>
      <Gem x={gem_x} size={gemSize} speed={2}/>
      <Gem x={gem_x} size={gemSize} speed={3}/>
      <Bar b_width={l_width} b_height={gemSize} isKeyPressed={isKeyPressed}/>
  
      </div>

      
  );
};

export default Lane;
